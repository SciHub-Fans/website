import { truncateAddress } from '@/lib/utils';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { LogOut, WalletIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

const ConnectWallet = () => {
    const { setVisible: setModalVisible } = useWalletModal();
    const { buttonState, onConnect, onDisconnect, publicKey } = useWalletMultiButton({
        onSelectWallet() {
            setModalVisible(true);
        },
    });
    
    const handleConnect = () => {
        switch (buttonState) {
            case 'no-wallet':
                setModalVisible(true);
                break;
            case 'has-wallet':
                if (onConnect) {
                    onConnect();
                }
                break;
        }
    }

    if (buttonState === 'connected') {
        return (
            <motion.button
                className='relative flex justify-center items-center gap-2 [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] px-5 py-4 rounded-[215.5px] overflow-hidden'
                onClick={onDisconnect}
                whileHover="hover"
                initial="initial"
            >
                <motion.div
                    className="flex items-center gap-2"
                    variants={{
                        initial: { y: 0 },
                        hover: { y: -40 }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <WalletIcon className='w-5 h-5' />
                    {truncateAddress(publicKey?.toString() || '')}
                </motion.div>
                
                <motion.div
                    className="flex items-center gap-2 absolute text-[#EB2E30]"
                    variants={{
                        initial: { y: 40 },
                        hover: { y: 0 }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <LogOut className='w-5 h-5' />
                    Disconnect
                </motion.div>
            </motion.button>
        )
    }

    return (
        <button
            className='flex justify-center items-center gap-2.5 self-stretch bg-white hover:bg-gray-100 text-black px-6 py-4 rounded-[44px]'
            onClick={handleConnect}
        >
            Connect Wallet
        </button>
    )
};

export default ConnectWallet;
