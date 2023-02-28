import { SvgProps } from '..';

export const CompletedTxnIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
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
      <circle cx="7.5" cy="8.4375" r="7.5" fill="#7E51FD" />
      <path
        d="M12.4253 6.70422L7.484 11.6452C7.11809 12.0111 6.52453 12.0111 6.15828 11.6452L3.60754 9.09425C3.2415 8.72827 3.2415 8.13464 3.60754 7.76859C3.97366 7.40248 4.56718 7.40248 4.93313 7.76845L6.82134 9.65668L11.0995 5.37849C11.4656 5.01237 12.0592 5.01265 12.4252 5.37849C12.7911 5.74454 12.7911 6.33796 12.4253 6.70422Z"
        fill="white"
      />
    </svg>
  );
};
