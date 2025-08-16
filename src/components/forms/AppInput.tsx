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
                <label className="sr-only" htmlFor={props.id || props.name}>
                    {label}
                </label>
                <div className="h-12 md:h-15 w-full flex items-center rounded-big bg-input-bg">
                    <input
                        className="w-full h-full border border-content-bod focus:border-transparent focus:outline-none focus:ring-1 focus:ring-hero-bg placeholder:text-xl px-5 rounded-big placeholder:text-placeholder"
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
