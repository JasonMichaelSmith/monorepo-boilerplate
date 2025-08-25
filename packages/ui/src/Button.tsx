import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick: () => void;
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`btn btn-${variant} btn-${size} ${className}`}
        >
            {children}
        </button>
    );
};
