

const Input = ({ type, value, setValue, placeholder, className, ...props }) => {

    return (
        <input
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className={`${className} rounded-full hover:border hover:border-violet-800 px-4 py-2 h-fit`}
            {...props}
        />
    )
    
}

export default Input
