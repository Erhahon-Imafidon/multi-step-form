import { useField } from 'formik';
import React, { forwardRef } from 'react';

interface IAppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const AppInput = forwardRef<HTMLInputElement, IAppInputProps>(
    ({ label, ...props }, ref) => {
        const [field, meta] = useField(props);

        return (
            <div className="flex-1 flex flex-col gap-y-3">
                <label
                    className="text-Blueish-950 text-sm font-medium"
                    htmlFor={props.id || props.name}
                >
                    {label}
                </label>
                <div className="h-12 w-full flex items-center ">
                    <input
                        className={`w-full h-full border border-Greyish-500 focus:border-transparent  focus:outline-none focus:ring-1 ${meta.error ? 'focus:ring-Redish-500' : 'focus:ring-Purpleish-600'} text-Blueish-950 placeholder:text-base px-4 rounded-lg placeholder:text-Greyish-500 font-medium`}
                        {...field}
                        {...props}
                        ref={ref}
                    />
                </div>
                {meta.touched && meta.error ? (
                    <div className="text-Redish-500 text-xs font-bold">{meta.error}</div>
                ) : null}
            </div>
        );
    }
);
export default AppInput;
