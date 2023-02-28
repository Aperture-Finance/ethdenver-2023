import { SvgProps } from '..';

export const CheckedIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="18"
        height="18"
        rx="3"
        fill={`url(#${props.id}_checked_paint0)`}
      />
      <path
        d="M5 9L8.375 12L14 6"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id={`${props.id}_checked_paint0`}
          x1="1.61321"
          y1="14.3491"
          x2="15.5377"
          y2="2.71698"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B182FF" />
          <stop offset="0.588542" stopColor="#59C1FB" />
          <stop offset="1" stopColor="#0EF7F8" />
        </linearGradient>
      </defs>
    </svg>
  );
};
