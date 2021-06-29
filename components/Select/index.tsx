import {ChangeEventHandler, FunctionComponent} from "react";

type Select = {
    name: string,
    options: string[],
    value: number
    onChange: ChangeEventHandler<HTMLSelectElement>
}

const Select: FunctionComponent<Select> = ({name, options, value, onChange}) => {



    const selectOptions = options.map((option, i) => (
        <option key={`${name}-${i}`} selected={i === value}>{option}</option>))

    return (
        <select id={name} name={name} onChange={onChange}
                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
            {selectOptions}
        </select>
    )
}

export default Select;
