interface TagProps {
    label: string;
    icon: React.ElementType;
    outlined?: boolean;
}

export default  function Tag({ label, icon: Icon, outlined = false }: TagProps) {
    return (
        <div
            className={`
                flex items-center gap-2 self-start py-1 px-4 rounded-full text-xs uppercase
                ${outlined ? "border border-violet-500" : "border border-gradient-to-r from-violet-700 to-violet-600"}
            `}
        >
            <Icon size={15} />
            <span>{label}</span>
        </div>
    );
}
