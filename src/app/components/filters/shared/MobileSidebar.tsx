import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";
interface MobileSidebarProps  {
    show: boolean;
    onClose: () => void;
    children: ReactNode;
}

const MobileSidebar = ({show, onClose, children}: MobileSidebarProps) => {
    return (
        <AnimatePresence>
            {show && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose} />

                    {/* Sidebar */}
                    <motion.div
                        className="fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white z-50 shadow-lg p-4 overflow-y-auto"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 120, damping: 20  }}>
                        <div className="flex justify-end mb-4">
                            <button onClick={onClose} className="text-gray-600 hover:text-white hover:bg-[#222] cursor-pointer">
                                <IoIosCloseCircleOutline size={30} />
                            </button>
                        </div>
                        {children}
                    </motion.div>

                </>
            )}
        </AnimatePresence>
    )
}

export default MobileSidebar