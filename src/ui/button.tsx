"use client";

import { $Button } from "./button.styled";

export type ButtonVariant = 'default' | 'success';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    variant?: ButtonVariant;
    onClick?: () => void;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (
    { type = 'button', variant = 'default', children, ...props }
) => {
    return (
        <$Button 
            $variant={variant} 
            type={type} 
            { ...props }
        >
            {children}
        </$Button>
    );
};
