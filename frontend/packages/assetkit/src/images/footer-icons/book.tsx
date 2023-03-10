import { SvgProps } from '..';

export const BookIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${props.id}_book_clip0)`}>
        <path
          d="M20 16.8594V1.76562C20 1.16816 19.5223 0.6875 18.9286 0.6875H4.28571C1.91964 0.6875 0 2.61914 0 5V19.375C0 21.7559 1.91964 23.6875 4.28571 23.6875H18.9286C19.5223 23.6875 20 23.2068 20 22.6094V21.8906C20 21.5537 19.8438 21.2482 19.6027 21.0506C19.4152 20.3588 19.4152 18.3867 19.6027 17.6949C19.8438 17.5018 20 17.1963 20 16.8594ZM5.71429 6.70703C5.71429 6.55879 5.83482 6.4375 5.98214 6.4375H15.4464C15.5938 6.4375 15.7143 6.55879 15.7143 6.70703V7.60547C15.7143 7.75371 15.5938 7.875 15.4464 7.875H5.98214C5.83482 7.875 5.71429 7.75371 5.71429 7.60547V6.70703ZM5.71429 9.58203C5.71429 9.43379 5.83482 9.3125 5.98214 9.3125H15.4464C15.5938 9.3125 15.7143 9.43379 15.7143 9.58203V10.4805C15.7143 10.6287 15.5938 10.75 15.4464 10.75H5.98214C5.83482 10.75 5.71429 10.6287 5.71429 10.4805V9.58203ZM17.0268 20.8125H4.28571C3.49554 20.8125 2.85714 20.1701 2.85714 19.375C2.85714 18.5844 3.5 17.9375 4.28571 17.9375H17.0268C16.942 18.7057 16.942 20.0443 17.0268 20.8125Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={`url(#${props.id}_book_clip0)`}>
          <rect
            width="20"
            height="23"
            fill="white"
            transform="translate(0 0.6875)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
