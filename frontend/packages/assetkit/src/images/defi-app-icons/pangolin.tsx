import { SvgProps } from '..';

export const PangolinIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${props.id}_pangolin_clip_path)`}>
        <path
          d="M18.1739 0.00406061L15.479 0.00195312L16.2781 2.46592L11.2012 6.1487L15.2205 9.07235L19.9918 5.61099L18.1739 0.00406061Z"
          fill="#FFC800"
        />
        <path
          d="M3.71047 2.45764L4.51077 0.00211073L1.82519 0L0 5.60481L4.76593 9.07251L8.79061 6.15307L3.71047 2.45764Z"
          fill="#E1AA00"
        />
        <path
          d="M9.53351 2.96981L5.45505 0.00292969L4.76758 2.11475L9.53351 5.58244L9.53561 5.58138V2.9677L9.53351 2.96981Z"
          fill="#E1AA00"
        />
        <path
          d="M14.5359 0.00585938L10.4521 2.96747V5.58115L15.2213 2.1219L14.5359 0.00585938Z"
          fill="#FFC800"
        />
        <path
          d="M4.77706 10.1745L4.76758 10.2051L9.53351 13.6739L9.53561 13.6717V6.72266L4.77706 10.1745Z"
          fill="#E1AA00"
        />
        <path
          d="M15.2097 10.176L10.4574 6.71777L10.4521 6.72199V13.6711L15.2213 10.2118L15.2097 10.176Z"
          fill="#FFC800"
        />
        <path
          d="M9.53246 14.7834L5.65328 11.9609L4.76758 14.6811L9.53351 18.1488L9.53561 18.1467V14.7813L9.53246 14.7834Z"
          fill="#E1AA00"
        />
        <path
          d="M14.3377 11.9629L10.4521 14.7822V18.1476L15.2213 14.6883L14.3377 11.9629Z"
          fill="#FFC800"
        />
      </g>
      <defs>
        <clipPath id={`${props.id}_pangolin_clip_path`}>
          <rect width="20" height="18.145" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
