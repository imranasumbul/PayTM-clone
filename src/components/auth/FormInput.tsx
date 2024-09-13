import { FieldValues, Path, UseFormRegister } from "react-hook-form"

interface FormInputProps<T extends FieldValues> {
    labelText: string;
    type: string;
    placeholder: string;
    name: Path<T>; // Use Path<T> for name
    register: UseFormRegister<T>;
    error?: string;
  }

export default function FormInput<T extends FieldValues>({
    labelText,
    type,
    placeholder,
    name,
    register,
    error,
  }: FormInputProps<T>){

    return (
            <>
                <label htmlFor={name} className="block mb-1 mt-5 text-sm font-medium text-blue-900 dark:text-white"> {labelText} </label>
                <input type={type} id={name} {...register(name)} className="bg-gray-50 border border-gray-300 text-blue-900 border-[0.5] text-sm rounded-lg focus:ring-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder={placeholder} />
                {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
               
            </>
        )
}