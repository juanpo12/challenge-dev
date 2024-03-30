

/**
 * Renders a select dropdown with the given options and allows the user to set the selected value.
 *
 * @param {Object} options - An array of options to populate the select dropdown
 * @param {Function} setValue - A callback function to set the selected value
 * @param {string} className - Additional CSS class for styling
 * @param {...any} props - Any additional props to be spread on the select element
 * @return {JSX.Element} A select dropdown element
 */
const Select = ({options, value, setValue, className, placeholder,...props}) => {

    return (
        <select onChange={(e) => setValue(e.target.value)} value={value}  className={`${className} w-full border border-violet-600 p-1 rounded-lg`} {...props}>
            <option value="">{placeholder}</option>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default Select
