import { SvgProps } from '..';

export const GoToArrowIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="33"
      height="34"
      viewBox="0 0 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${props.id}_go_to_arrow_clip0)`}>
        <rect
          y="0.5"
          width="33"
          height="33"
          rx="16.5"
          fill={`url(#${props.id}_go_to_arrow_paint0)`}
        />
        <path
          d="M14.0252 11.2246L21.4502 17.4121L14.0252 23.5996"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id={`${props.id}_go_to_arrow_paint0`}
          x1="2.95755"
          y1="26.8066"
          x2="28.4858"
          y2="5.48113"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B182FF" />
          <stop offset="0.588542" stopColor="#59C1FB" />
          <stop offset="1" stopColor="#0EF7F8" />
        </linearGradient>
        <clipPath id={`${props.id}_go_to_arrow_clip0`}>
          <rect
            width="33"
            height="33"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
