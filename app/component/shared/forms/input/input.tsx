import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputProps {
    name: string,
    type? : string,
    label: string,
    inputClassName?: string,
    errorClassName?: string,
    labelClasssName?: string
}

const Input: FC<InputProps> = ({
    name,
    label,
    type = 'text',
    inputClassName,
    labelClasssName,
    errorClassName
}) => {

    return (
    <>
        <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${labelClasssName ?? ''}`}>
            {label}
        </label>
        <Field id={name} name={name} type={type} autoComplete={name} className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm my-3 ${inputClassName ?? ''}`} />
        <ErrorMessage name={name} className={`text-red-500 text-sm ${errorClassName ?? ''}`} component="div" />
    </>
    );
}

export default Input;
