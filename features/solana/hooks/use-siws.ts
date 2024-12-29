import { useWallet } from "@solana/wallet-adapter-react";
import { Payload, SIWS } from "@web3auth/sign-in-with-solana";
import bs58 from "bs58";

const useSiws = () => {
    const { publicKey, signMessage } = useWallet();
    const statement = "Sign in with Solana to the app.";

    // Generate a message for signing
    // The nonce is generated on the server side
    async function createSolanaMessage() {
        const payload = new Payload();
        // Domain and origin
        const domain = window.location.host;
        const origin = window.location.origin;
        payload.domain = domain;

        payload.address = publicKey!.toString();
        payload.uri = origin;
        payload.statement = statement;
        payload.version = "1";
        payload.chainId = 1;

        const message = new SIWS({ payload });

        // we need the nonce for verification so getting it in a global variable
        const messageText = message.prepareMessage();
        const messageEncoded = new TextEncoder().encode(messageText);
        const signature = await signMessage!(messageEncoded);
        return {
            signature: bs58.encode(signature),
            message: messageText,
            payload,
        };
    }

    return {
        createSolanaMessage,
    };
}

export default useSiws;
