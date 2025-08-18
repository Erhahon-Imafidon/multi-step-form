import { useField } from 'formik';
import React, { forwardRef } from 'react';

interface IAppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const AppInput = forwardRef<HTMLInputElement, IAppInputProps>(
    ({ label, ...props }, ref) => {
        const [field, meta] = useField(props);

        return (
            <div className="flex-1 text-xl flex flex-col gap-y-3">
                <label className="text-Blueish-950 text-sm font-medium" htmlFor={props.id || props.name}>
                    {label}
                </label>
                <div className="h-12 w-full flex items-center rounded-big ">
                    <input
                        className="w-full h-full border border-Greyish-500 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-hero-bg text-Greyish-500 placeholder:text-base px-4 rounded-lg placeholder:text-Greyish-500"
                        {...field}
                        {...props}
                        ref={ref}
                    />
                </div>
                {meta.touched && meta.error ? (
                    <div className="text-red-500 text-xs">{meta.error}</div>
                ) : null}
            </div>
        );
    }
);
export default AppInput;
