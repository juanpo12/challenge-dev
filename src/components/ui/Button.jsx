
/**
 * Renders a button component with specified children, onClick function, className, and additional props.
 *
 * @param {Object} props - An object containing children, onClick, className, and other props
 * @return {JSX.Element} A button element with specified properties
 */
const Button = ({ children, onClick, className, ...props }) => {

    return (
        <button
            className={`${className} bg-violet-600/60 p-2 rounded-xl hover:cursor-pointer hover:scale-105`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button