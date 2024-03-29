

const Input = ({ type, value, setValue, placeholder, className, ...props }) => {

    return (
        <input
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className={className}
            {...props}
        />
    )
    
}

export default Input
