import { SvgProps } from '..';

export const EllipsisIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="18"
      height="4"
      viewBox="0 0 18 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
        fill="#000000"
      />
      <path
        d="M16 4C17.1046 4 18 3.10457 18 2C18 0.89543 17.1046 0 16 0C14.8954 0 14 0.89543 14 2C14 3.10457 14.8954 4 16 4Z"
        fill="#000000"
      />
      <path
        d="M9 4C10.1046 4 11 3.10457 11 2C11 0.89543 10.1046 0 9 0C7.89543 0 7 0.89543 7 2C7 3.10457 7.89543 4 9 4Z"
        fill="#000000"
      />
    </svg>
  );
};