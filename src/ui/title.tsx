interface TitleProps {
    tag: "h1" | "h2" | "h3";
    className?: string;
    children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ tag, children, ...props }) => {
    const Tag = tag;
    return <Tag {...props}>{children}</Tag>
};
