export default function IconSendToEmail({ width = 20, height = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Envelope rectangle */}
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
      <polyline points="2,4 12,13 22,4"></polyline>
    </svg>
  );
}