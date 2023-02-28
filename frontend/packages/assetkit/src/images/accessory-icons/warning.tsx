import { SvgProps } from '..';

export const WarningIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.0002 15.95V16.4M11.0002 8.2998V12.7999V8.2998Z"
        stroke={`url(#${props.id}_warning_paint0)`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2.20839 17.315L9.51475 2.94705C10.1565 1.68432 11.8458 1.68432 12.4866 2.94705L19.7921 17.315C20.405 18.5246 19.5896 20.0006 18.3043 20.0006H3.69433C2.41 20.0006 1.59368 18.5246 2.20929 17.315H2.20839Z"
        stroke={`url(#${props.id}_warning_paint1)`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id={`${props.id}_warning_paint0`}
          x1="11.0246"
          y1="15.3875"
          x2="12.5429"
          y2="15.2396"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB3FC" />
          <stop offset="1" stopColor="#FF5757" />
        </linearGradient>
        <linearGradient
          id={`${props.id}_warning_paint1`}
          x1="2.43902"
          y1="17.7505"
          x2="19.4491"
          y2="4.33665"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB3FC" />
          <stop offset="1" stopColor="#FF5757" />
        </linearGradient>
      </defs>
    </svg>
  );
};
