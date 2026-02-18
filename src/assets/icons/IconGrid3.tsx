export default function IconGrid3({ width = 24, height = 20,  }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" y1="4" x2="6" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="18" y1="4" x2="18" y2="20" />
    </svg>
  );
}
