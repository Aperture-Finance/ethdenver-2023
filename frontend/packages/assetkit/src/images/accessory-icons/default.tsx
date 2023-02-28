import { SvgProps } from '..';

export const DefaultIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="41"
      height="34"
      viewBox="0 0 41 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40.5541 20.6274C38.5621 28.6674 30.4656 33.5549 22.4857 31.5506C14.4942 29.5464 9.63645 21.401 11.6286 13.3726C13.6205 5.33256 21.7052 0.445142 29.6968 2.4494C37.6766 4.44182 42.5462 12.5873 40.5541 20.6274Z"
        fill={`url(#${props.id}_default_paint0)`}
      />
      <g filter={`url(#${props.id}_default_filter0)`}>
        <ellipse cx="14.9091" cy="17" rx="14.9091" ry="15" fill="#2A5ADA" />
      </g>
      <defs>
        <filter
          id={`${props.id}_default_filter0`}
          x="0"
          y="0"
          width="33.8181"
          height="34"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199301 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_15418"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_15418"
            result="shape"
          />
        </filter>
        <linearGradient
          id={`${props.id}_default_paint0`}
          x1="11.1718"
          y1="1.9928"
          x2="11.1718"
          y2="31.997"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9AA4B" />
          <stop offset="1" stopColor="#F7931A" />
        </linearGradient>
      </defs>
    </svg>
  );
};
