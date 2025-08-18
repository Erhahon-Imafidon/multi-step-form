import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variants?: 'next' | 'confirm';
}

const AppButton = ({ children, variants = 'next', ...rest }: IButton) => {
    return (
        <button
            {...rest}
            className={clsx(
                'w-30 py-3 text-center rounded-lg text-white cursor-pointer',
                {
                    'bg-Blueish-950': variants === 'next',
                    'bg-Purpleish-600': variants === 'confirm',
                }
            )}
        >
            {children}
        </button>
    );
};
export default AppButton;
