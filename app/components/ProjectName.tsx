interface ProjectNameProps {
  children: string;
}

export default function ProjectName(props: ProjectNameProps) {
  const { children } = props;
  return (
    <p className="!my-0">
      <strong>{children}</strong>
    </p>
  );
}
