interface RoundedButtonOptions {
    [key: string]: unknown;
}
interface RoundedButtonRequiredProps {
    onClick?: () => void;
    children: React.ReactNode;
}

type RoundedButtonProps = RoundedButtonOptions & RoundedButtonRequiredProps;

export default function (props: RoundedButtonProps) {
    return (
        <button {...props} className="border-2 p-2 rounded-md cursor-pointer">
            {props.children}
        </button>
    );
}
