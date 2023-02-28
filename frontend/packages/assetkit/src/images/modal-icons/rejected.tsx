import { SvgProps } from '..';

export const RejectedIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M60 0C27.0445 0 0 27.0445 0 60C0 92.9555 27.0445 120 60 120C92.9555 120 120 92.9555 120 60C120 27.0445 92.9555 0 60 0ZM67.0312 88.125C67.0312 92.0011 63.8761 95.1562 60 95.1562C56.1239 95.1562 52.9688 92.0011 52.9688 88.125V52.9688C52.9688 49.0927 56.1239 45.9375 60 45.9375C63.8761 45.9375 67.0312 49.0927 67.0312 52.9688V88.125ZM60 38.9062C56.1239 38.9062 52.9688 35.7511 52.9688 31.875C52.9688 27.9989 56.1239 24.8438 60 24.8438C63.8761 24.8438 67.0312 27.9989 67.0312 31.875C67.0312 35.7511 63.8761 38.9062 60 38.9062Z"
        fill={`url(#${props.id}_paint0_linear_97_1413)`}
      />
      <defs>
        <linearGradient
          id={`${props.id}_paint0_linear_97_1413`}
          x1="60"
          y1="0"
          x2="60"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C2B2FF" />
          <stop offset="1" stopColor="#E44C4C" />
        </linearGradient>
      </defs>
    </svg>
  );
};
