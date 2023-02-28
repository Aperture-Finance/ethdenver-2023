import { SvgProps } from '..';

export const PendingTxnIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.91649 8.42609C5.14631 8.16246 4.9591 7.75084 4.60935 7.75084H3.56219C3.55537 7.64723 3.55156 7.54281 3.55156 7.43752C3.55156 4.82849 5.67412 2.70593 8.28312 2.70593C9.53691 2.70593 10.6782 3.19627 11.5257 3.99505L13.0023 2.26763C11.7097 1.08518 10.0463 0.4375 8.28312 0.4375C6.41336 0.4375 4.65551 1.16565 3.33338 2.48775C2.01128 3.80988 1.28313 5.56772 1.28313 7.43749C1.28313 7.54232 1.28575 7.64674 1.29031 7.7508H0.408282C0.0585295 7.7508 -0.128712 8.16243 0.101137 8.42606L2.09087 10.7084L2.5088 11.1878L4.00932 9.46659L4.91649 8.42609Z"
        fill={`url(#${props.id}_pending_txn_paint0)`}
      />
      <path
        d="M16.4649 7.09472L14.9809 5.39241L14.0573 4.33301L12.7386 5.84558L11.6496 7.09472C11.4198 7.35835 11.607 7.76998 11.9567 7.76998H13.0027C12.8316 10.2245 10.7802 12.1693 8.28295 12.1693C7.19283 12.1693 6.18776 11.7985 5.38685 11.1768L3.91016 12.9043C5.14724 13.8978 6.67349 14.4377 8.28298 14.4377C10.1527 14.4377 11.9106 13.7096 13.2327 12.3875C14.4762 11.144 15.1941 9.51499 15.2751 7.77001H16.1578C16.5075 7.76998 16.6947 7.35835 16.4649 7.09472Z"
        fill={`url(#${props.id}_pending_txn_paint1)`}
      />
      <defs>
        <linearGradient
          id={`${props.id}_pending_txn_paint0`}
          x1="1.62529"
          y1="11.1878"
          x2="13.6971"
          y2="6.75328"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E56FF" />
          <stop offset="0.6369" stopColor="#9A73EE" />
          <stop offset="1" stopColor="#BB9BFF" />
        </linearGradient>
        <linearGradient
          id={`${props.id}_pending_txn_paint1`}
          x1="5.49214"
          y1="14.4377"
          x2="17.1421"
          y2="10.0061"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E56FF" />
          <stop offset="0.6369" stopColor="#9A73EE" />
          <stop offset="1" stopColor="#BB9BFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
