import { SvgProps } from '..';

export const ConfirmationIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="122"
      height="122"
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter={`url(#${props.id}_confirmation_spinner_filter0)`}>
        <path
          d="M114 53.05C112.675 44.4375 109.363 35.825 104.062 29.2L93.4625 37.15C97.4375 42.45 100.087 48.4125 100.75 55.0375C108.7 53.7125 105.387 54.375 114 53.05Z"
          fill={`url(#${props.id}_confirmation_spinner_paint0)`}
        />
        <path
          d="M92.8 18.6C86.175 13.3 77.5625 9.325 68.95 8C67.625 16.6125 68.2875 13.3 66.9625 21.25C73.5875 21.9125 79.55 24.5625 84.85 28.5375L92.8 18.6Z"
          fill={`url(#${props.id}_confirmation_spinner_paint1)`}
        />
        <path
          d="M61 100.75C39.1375 100.75 21.25 82.8625 21.25 61C21.25 41.125 36.4875 23.9 55.7 21.25L53.7125 8C27.875 11.975 8 34.5 8 61C8 90.15 31.85 114 61 114C87.5 114 110.025 94.7875 113.337 68.2875L100.087 66.3C98.1 85.5125 80.875 100.75 61 100.75Z"
          fill={`url(#${props.id}_confirmation_spinner_paint2)`}
        />
      </g>
      <defs>
        <filter
          id={`${props.id}_confirmation_spinner_filter0`}
          x="0"
          y="0"
          width="122"
          height="122"
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
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_833_4247"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_833_4247"
            result="shape"
          />
        </filter>
        <linearGradient
          id={`${props.id}_confirmation_spinner_paint0`}
          x1="17.5"
          y1="92.5"
          x2="99.5"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E56FF" />
          <stop offset="0.588542" stopColor="#9A73EE" />
          <stop offset="1" stopColor="#BB9BFF" />
        </linearGradient>
        <linearGradient
          id={`${props.id}_confirmation_spinner_paint1`}
          x1="17.5"
          y1="92.5"
          x2="99.5"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E56FF" />
          <stop offset="0.588542" stopColor="#9A73EE" />
          <stop offset="1" stopColor="#BB9BFF" />
        </linearGradient>
        <linearGradient
          id={`${props.id}_confirmation_spinner_paint2`}
          x1="17.5"
          y1="92.5"
          x2="99.5"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E56FF" />
          <stop offset="0.588542" stopColor="#9A73EE" />
          <stop offset="1" stopColor="#BB9BFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
