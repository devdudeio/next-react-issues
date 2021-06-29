import PropTypes from "prop-types";
import {FunctionComponent, ChangeEventHandler} from 'react';


type Input = {
    id: string,
    value: string,
    name: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    placeholder: string,
}

const Input: FunctionComponent<Input> = ({id, value, name, onChange, placeholder, ...props}): JSX.Element =>

    <input id={id}
           name={name}
           value={value}
           onChange={onChange}
           placeholder={placeholder}
           className="block w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
           type="search"
           {...props}
    />

Input.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default Input;