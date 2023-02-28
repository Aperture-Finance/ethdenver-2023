import { SvgProps } from '..';

export const SearchIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${props.id}_search_clip0)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.757 13.9902L19.6344 17.8663C19.9499 18.1825 20.0728 18.643 19.9567 19.0743C19.8406 19.5056 19.5033 19.8422 19.0717 19.9574C18.6402 20.0725 18.18 19.9487 17.8645 19.6325L13.9896 15.7576C11.3372 17.741 7.79235 18.0568 4.83114 16.5736C1.86994 15.0903 -4.21985e-06 12.0622 0 8.75034C6.48415e-06 4.94494 2.4596 1.57588 6.0841 0.416549C9.70861 -0.742778 13.6668 0.573493 15.8753 3.67251C18.0837 6.77152 18.0359 10.9426 15.757 13.9902ZM3.26422 11.9002C4.40036 13.8468 6.49662 15.0309 8.75031 14.999V15.0003C12.202 15.0003 15.0001 12.2021 15.0001 8.75044C15.0001 5.29876 12.202 2.50063 8.75031 2.50063C6.49662 2.46875 4.40036 3.65282 3.26422 5.59943C2.12807 7.54604 2.12807 9.95359 3.26422 11.9002Z"
          fill="#CAD2D8"
        />
      </g>
      <defs>
        <clipPath id={`${props.id}_search_clip0`}>
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
