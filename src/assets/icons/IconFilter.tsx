type IconFilterProps = {
  width?: number;
  height?: number;
  color?: string;
};

export default function IconFilter({ width = 16, height = 16, color = 'currentColor' }: IconFilterProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={color}
    >
      <path d="M0 3H16V1H0V3Z" />
      <path d="M2 7H14V5H2V7Z" />
      <path d="M4 11H12V9H4V11Z" />
      <path d="M10 15H6V13H10V15Z" />
    </svg>
  );
}