"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return <input 
        type="text" 
        className={`w-full p-4 text-base font-normal leading-5 h-14 ${className}`} 
        { ...props }
    />
};
