import { SvgProps } from '..';

export const RejectIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="13.75"
        cy="14"
        r="13.75"
        fill={`url(#${props.id}_reject_paint0)`}
      />
      <path
        d="M9.04275 19.3679C8.77306 19.3836 8.50783 19.2939 8.30299 19.1178C7.899 18.7114 7.899 18.0551 8.30299 17.6487L17.149 8.8027C17.5691 8.40952 18.2285 8.43138 18.6216 8.85156C18.9772 9.23153 18.9979 9.81555 18.6702 10.2197L9.77208 19.1178C9.56988 19.2914 9.30891 19.3809 9.04275 19.3679Z"
        fill="#201F2F"
      />
      <path
        d="M17.8781 19.3679C17.6048 19.3667 17.3428 19.2583 17.1488 19.0658L8.30278 10.2197C7.92851 9.78267 7.9794 9.12491 8.41646 8.7506C8.80655 8.41655 9.38185 8.41655 9.77191 8.7506L18.67 17.5966C19.0901 17.9899 19.1118 18.6493 18.7185 19.0693C18.7029 19.086 18.6867 19.1022 18.67 19.1178C18.4521 19.3073 18.1654 19.3979 17.8781 19.3679Z"
        fill="#201F2F"
      />
      <defs>
        <linearGradient
          id={`${props.id}_reject_paint0`}
          x1="13.75"
          y1="0.25"
          x2="13.75"
          y2="27.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CCB9FF" />
          <stop offset="1" stopColor="#FF6A6A" />
        </linearGradient>
      </defs>
    </svg>
  );
};
