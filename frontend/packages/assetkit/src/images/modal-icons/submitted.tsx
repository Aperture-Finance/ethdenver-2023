import { SvgProps } from '..';

export const SubmittedIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="155"
      height="155"
      viewBox="0 0 155 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter={`url(#${props.id}_submitted_filter0)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M77.5003 8C115.884 8 147 39.1162 147 77.5003C147 113.548 119.556 143.183 84.4231 146.658V77.7362L91.514 84.8271C92.8169 86.1297 94.5693 86.8545 96.4111 86.8545C98.2504 86.8545 100.005 86.128 101.305 84.8271C104.009 82.1223 104.009 77.7389 101.305 75.0346L82.3943 56.1255C79.6928 53.4239 75.3083 53.4242 72.6065 56.1255L53.6941 75.0346C50.9904 77.7378 50.9906 82.1236 53.6941 84.8271C56.3975 87.5305 60.7834 87.5308 63.4868 84.8271L70.5761 77.7367V146.658C35.4433 143.182 8 113.547 8 77.5003C8 39.1162 39.1165 8 77.5003 8Z"
          fill={`url(#${props.id}_submitted_paint0)`}
        />
      </g>
      <defs>
        <filter
          id={`${props.id}_submitted_filter0`}
          x="0"
          y="0"
          width="155"
          height="154.658"
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
            result="effect1_dropShadow_909_29201"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_909_29201"
            result="shape"
          />
        </filter>
        <linearGradient
          id={`${props.id}_submitted_paint0`}
          x1="20.4576"
          y1="118.534"
          x2="127.768"
          y2="28.6691"
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
