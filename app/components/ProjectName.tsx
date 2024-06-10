interface ProjectNameProps {
  value?: string;
  children?: string;
}

export default function ProjectName(props: ProjectNameProps) {
  const { value, children } = props;
  return (
    <p className="!my-0 !text-[18px]">
      <strong>{value ?? children}</strong>
    </p>
  );
}
