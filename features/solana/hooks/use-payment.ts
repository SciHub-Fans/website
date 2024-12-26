import { TOKEN_ADDRESS } from "@/features/store/constants";
import { Currency } from "@/features/store/types";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, TransactionInstruction } from "@solana/web3.js";
import { createTransferInstruction, getAssociatedTokenAddressSync } from "@solana/spl-token";
import { toast } from "sonner";

const usePayment = () => {
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();

    const createMemoInstruction = (memo: string) => {
        return new TransactionInstruction({
            keys: [{ pubkey: publicKey!, isSigner: true, isWritable: true }],
            data: Buffer.from(memo),
            programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr")
        });
    }

    const createTokenTransferInstruction = async (currency: Currency, toPublicKey: PublicKey, amount: string) => {
        const tokenAddress = TOKEN_ADDRESS[currency];
        const recipientAtaAddress = getAssociatedTokenAddressSync(tokenAddress, toPublicKey);
        const payerAtaAddress = getAssociatedTokenAddressSync(tokenAddress, publicKey!);

        // 查询付款人代币账户余额
        const payerBalance = await connection.getTokenAccountBalance(payerAtaAddress);
        console.log("付款人代币余额:", payerBalance.value.uiAmount);

        if (Number(payerBalance.value.amount) < Number(amount)) {
            toast.error("Insufficient balance");
            return;
        }

        return createTransferInstruction(
            payerAtaAddress,           // 源代币账户
            recipientAtaAddress,       // 目标代币账户
            publicKey!,    // 所有者
            Number(amount)  // 金额（假设代币精度为6）
        );
    }

    const createSolTransferInstruction = async (toPublicKey: PublicKey, amount: string) => {
        const balance = await connection.getBalance(publicKey!);
        if (balance < Number(amount) * LAMPORTS_PER_SOL) {
            toast.error("Insufficient balance");
            return;
        }

        return SystemProgram.transfer({
            fromPubkey: publicKey!,
            toPubkey: toPublicKey,
            lamports: Number(amount) * LAMPORTS_PER_SOL
        });
    }

    const payment = async (currency: Currency, toPublicKey: PublicKey, amount: string, memo: string) => {
        const instructions: TransactionInstruction[] = [];
        if (currency === Currency.SOL) {
            const solTransferInstruction = await createSolTransferInstruction(toPublicKey, amount);
            if (solTransferInstruction) {
                instructions.push(solTransferInstruction);
            }
        } else {
            const tokenTransferInstruction = await createTokenTransferInstruction(currency, toPublicKey, amount);
            if (tokenTransferInstruction) {
                instructions.push(tokenTransferInstruction);
            }
        }

        if (instructions.length === 0) {
            return;
        }

        instructions.push(createMemoInstruction(memo));
        
        const latestBlockhash = await connection.getLatestBlockhash();

        const tx = new Transaction().add(...instructions);
        const signature = await sendTransaction(tx, connection, {
            ...latestBlockhash,
            skipPreflight: true,
        });

        return {
            signature,
            latestBlockhash,
        };
    }

    return { payment };
}

export default usePayment;
