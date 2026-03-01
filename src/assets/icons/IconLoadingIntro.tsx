import '../../components/shared/loading/loading.css';

export default function IconLoadingIntro({ width = 150, height = 150 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={width}
      height={height}
      id='icon-loading-intro'
    >
      <rect
        fill="#ffffff"
        stroke="#464646"
        strokeWidth="14"
        width="30"
        height="30"
        x="25"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4s"
        />
      </rect>
      <rect
        fill="#4e4e4e"
        stroke="#838383"
        strokeWidth="14"
        width="30"
        height="30"
        x="85"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2s"
        />
      </rect>
      <rect
        fill="#222222"
        stroke="#b3b3b3"
        strokeWidth="14"
        width="30"
        height="30"
        x="145"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0s"
        />
      </rect>
    </svg>
  );
}
