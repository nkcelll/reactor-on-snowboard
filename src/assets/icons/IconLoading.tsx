
import '../../components/shared/loading/loading.css';
type IconLoaderProps = {
  width?: number;
  height?: number;
  color?: string;
  duration?: number; 
};

export default function IconLoading({
  width = 36,
  height = 36,
  duration = 3,
}: IconLoaderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      className='icon-loading-svg'
    >
      <style>
        {`
        .box {
          fill: ';
          transform-origin: 50% 50%;
        }

        .box:nth-child(1) { animation: box1 ${duration}s infinite; }
        .box:nth-child(2) { animation: box2 ${duration}s infinite; }
        .box:nth-child(3) { animation: box3 ${duration}s infinite; }
        .box:nth-child(4) { animation: box4 ${duration}s infinite; }
        .box:nth-child(5) { animation: box5 ${duration}s infinite; }
        .box:nth-child(6) { animation: box6 ${duration}s infinite; }
        .box:nth-child(7) { animation: box7 ${duration}s infinite; }
        .box:nth-child(8) { animation: box8 ${duration}s infinite; }
        .box:nth-child(9) { animation: box9 ${duration}s infinite; }

        @keyframes box1 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(12px,12px); }
        }

        @keyframes box2 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-12px,12px); }
        }

        @keyframes box3 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(12px,-12px); }
        }

        @keyframes box4 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-12px,-12px); }
        }

        @keyframes box5 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(12px,0); }
        }

        @keyframes box6 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-12px,0); }
        }

        @keyframes box7 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(0,12px); }
        }

        @keyframes box8 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(0,-12px); }
        }

        @keyframes box9 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(6px,6px); }
        }
        `}
      </style>

      <g>
        <rect className="box" x="13" y="1" rx="1" width="10" height="10" />
        <rect className="box" x="13" y="1" rx="1" width="10" height="10" />
        <rect className="box" x="25" y="25" rx="1" width="10" height="10" />
        <rect className="box" x="13" y="13" rx="1" width="10" height="10" />
        <rect className="box" x="13" y="13" rx="1" width="10" height="10" />
        <rect className="box" x="25" y="13" rx="1" width="10" height="10" />
        <rect className="box" x="1" y="25" rx="1" width="10" height="10" />
        <rect className="box" x="13" y="25" rx="1" width="10" height="10" />
        <rect className="box" x="25" y="25" rx="1" width="10" height="10" />
      </g>
    </svg>
  );
}