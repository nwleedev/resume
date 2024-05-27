interface DividerProps {
  sub?: boolean;
}

export default function Divider(props: DividerProps) {
  const { sub = false } = props;
  const className = !sub
    ? "border border-black !my-3"
    : "border-gray-400 !my-2";
  return <hr className={className} />;
}
