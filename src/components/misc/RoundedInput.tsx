export type InputValue = React.InputHTMLAttributes<HTMLInputElement>['value'];

function onChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>,
    setAState: React.Dispatch<React.SetStateAction<InputValue>>
) {
    setAState(event.target.value);
}

interface RoundedInputOptions {
    [key: string]: unknown;
}
interface RoundedInputRequiredProps {
    onChange: React.Dispatch<React.SetStateAction<InputValue>>;
    value: React.InputHTMLAttributes<HTMLInputElement>['value'];
}
type RoundedInputProps = RoundedInputOptions & RoundedInputRequiredProps;

export default function (props: RoundedInputProps) {
    return (
        <input
            type="text"
            className="bg-gray-200 rounded-md"
            {...props}
            onChange={(e) => onChangeHandler(e, props.onChange)}
            reian-testid="rounded-input"
        />
    );
}
