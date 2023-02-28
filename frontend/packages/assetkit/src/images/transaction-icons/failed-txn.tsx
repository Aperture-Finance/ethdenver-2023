import { SvgProps } from '..';

export const FailedTxnIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="7.5"
        cy="8.4375"
        r="7.5"
        fill={`url(#${props.id}_failed_paint0)`}
      />
      <path
        d="M4.75505 12.807C4.55977 12.8183 4.36772 12.7534 4.21939 12.6259C3.92687 12.3316 3.92687 11.8564 4.21939 11.5621L10.6248 5.15671C10.929 4.87201 11.4064 4.88784 11.6911 5.19209C11.9486 5.46722 11.9636 5.89011 11.7263 6.18279L5.28316 12.6259C5.13675 12.7516 4.94778 12.8163 4.75505 12.807Z"
        fill="#201F2F"
      />
      <path
        d="M11.153 12.8069C10.9551 12.8061 10.7654 12.7275 10.6249 12.5881L4.2195 6.18271C3.94849 5.86623 3.98533 5.38995 4.30181 5.11892C4.58427 4.87703 5.00085 4.87703 5.28329 5.11892L11.7264 11.5243C12.0306 11.8091 12.0463 12.2865 11.7615 12.5907C11.7502 12.6028 11.7385 12.6145 11.7264 12.6258C11.5686 12.763 11.361 12.8286 11.153 12.8069Z"
        fill="#201F2F"
      />
      <defs>
        <linearGradient
          id={`${props.id}_failed_paint0`}
          x1="13.9826"
          y1="0.937501"
          x2="0.788821"
          y2="15.9665"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8B3FF" />
          <stop offset="1" stopColor="#FF6A6A" />
        </linearGradient>
      </defs>
    </svg>
  );
};
