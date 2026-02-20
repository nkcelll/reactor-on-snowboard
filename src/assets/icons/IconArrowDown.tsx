type IconArrowDownProps = {
  width?: number;
  height?: number;
  id?: string;
  className?: string;
};

export default function IconArrowDown({
  width = 20,
  height = 20,
  id,
  className = ""
}: IconArrowDownProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      id={id}
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}