import { SvgProps } from '..';

export const WrongNetworkIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="133"
      height="132"
      viewBox="0 0 133 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter={`url(#${props.id}_wrong_network_filter0)`}>
        <path
          d="M66.5 8C34.643 8 8.5 34.143 8.5 66C8.5 97.857 34.643 124 66.5 124C98.357 124 124.5 97.857 124.5 66C124.5 34.143 98.357 8 66.5 8ZM73.2969 93.1875C73.2969 96.9344 70.2469 99.9844 66.5 99.9844C62.7531 99.9844 59.7031 96.9344 59.7031 93.1875V59.2031C59.7031 55.4562 62.7531 52.4062 66.5 52.4062C70.2469 52.4062 73.2969 55.4562 73.2969 59.2031V93.1875ZM66.5 45.6094C62.7531 45.6094 59.7031 42.5594 59.7031 38.8125C59.7031 35.0656 62.7531 32.0156 66.5 32.0156C70.2469 32.0156 73.2969 35.0656 73.2969 38.8125C73.2969 42.5594 70.2469 45.6094 66.5 45.6094Z"
          fill={`url(#${props.id}_wrong_network_paint0)`}
        />
      </g>
      <defs>
        <filter
          id={`${props.id}_wrong_network_filter0`}
          x="0.5"
          y="0"
          width="132"
          height="132"
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
            result="effect1_dropShadow_1453_4581"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1453_4581"
            result="shape"
          />
        </filter>
        <linearGradient
          id={`${props.id}_wrong_network_paint0`}
          x1="116.632"
          y1="8"
          x2="14.6002"
          y2="124.224"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C2B3FF" />
          <stop offset="1" stopColor="#E44C4C" />
        </linearGradient>
      </defs>
    </svg>
  );
};
