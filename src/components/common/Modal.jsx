import React from 'react'
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { X } from 'lucide-react'

const Modal = ({ open, toggleOpen, children }) => {
    return (
        <Dialog transition open={open} onClose={toggleOpen} className="relative z-50 transition duration-300 ease-out data-closed:opacity-0">
            <DialogBackdrop className="fixed inset-0 bg-[#00000066]" />
            <div className=" flex w-screen items-center justify-center p-4 ">
                <DialogPanel className="fixed left-0 right-0 bottom-0 rounded-2xl shadow-lg space-y-4 border bg-white border-none pt-20 p-5">
                    <DialogTitle className="">
                        <div className="flex  justify-center">
                            <h2 className="text-5xl font-semibold text-font-primary" >Create </h2>
                            <h2 className="text-5xl font-semibold ml-2 gradient-text" >New Assistant</h2>
                        </div>
                    </DialogTitle>
                    <Description className='text-2xl text-[#6A6A6A] text-center'>Choose how you want to start building an assistant</Description>
                    <button className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100" onClick={toggleOpen}>
                        <X size={24} className="text-gray-600" />
                    </button>

                    <div className="w-full bg-white " >
                        {children}
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default Modal