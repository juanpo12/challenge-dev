const Modal = ({ children, setIsOpen, isOpen }) => {


    return (
        <>
        {isOpen && (
            <div
                className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
                onClick={() => setIsOpen(false)}
            >
                <div
                    className="bg-violet-600/70 p-4 rounded-xl"
                    onClick={(e) => e.stopPropagation()} 
                >
                    {children}
                </div>
            </div>
        )}
    </>
    )
}

export default Modal
