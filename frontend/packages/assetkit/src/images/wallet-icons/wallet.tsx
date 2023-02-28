import { SvgProps } from '..';

export const WalletIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
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
      <g clipPath={`url(#${props.id}_wallet_clip0)`}>
        <path d="M12.75 8.88281H14.5V12.3828H12.75V8.88281Z" fill="black" />
        <path
          d="M15.8 4.40781V2.70781C15.8 1.77026 15.0376 1.00781 14.1 1.00781H3.05C1.6441 1.00781 0.5 2.15191 0.5 3.55781V13.7578C0.5 15.6287 2.0249 16.3078 3.05 16.3078H15.8C16.7376 16.3078 17.5 15.5454 17.5 14.6078V6.10781C17.5 5.17026 16.7376 4.40781 15.8 4.40781ZM3.05 2.70781H14.1V4.40781H3.05C2.83114 4.39802 2.62449 4.30419 2.47308 4.14586C2.32168 3.98752 2.23717 3.77689 2.23717 3.55781C2.23717 3.33874 2.32168 3.1281 2.47308 2.96977C2.62449 2.81143 2.83114 2.7176 3.05 2.70781ZM15.8 14.6078H3.0602C2.6675 14.5976 2.2 14.4421 2.2 13.7578V5.95056C2.4669 6.04661 2.74995 6.10781 3.05 6.10781H15.8V14.6078Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id={`${props.id}_wallet_clip0"`}>
          <rect
            width="17"
            height="17"
            fill="black"
            transform="translate(0.5 0.157227)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
