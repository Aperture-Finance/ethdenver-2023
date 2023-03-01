import { SvgProps } from '..';

export const FtmIcon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g clipPath={`url(#${props.id}_ftm_clip0)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.0823 40H18.9724C8.41712 39.4515 0.0273438 30.7192 0.0273438 20.0273C0.0273438 8.98165 8.98165 0.0273438 20.0273 0.0273438C30.7192 0.0273438 39.4515 8.41712 40 18.9724V21.0823C39.4696 31.2882 31.2882 39.4696 21.0823 40Z"
          fill={`url(#${props.id}_ftm_pattern0)`}
        />
      </g>
      <defs>
        <pattern
          id={`${props.id}_ftm_pattern0`}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref={`#${props.id}_ftm_image0`} transform="scale(0.005)" />
        </pattern>
        <clipPath id={`${props.id}_ftm_clip0`}>
          <rect width="40" height="40" fill="white" />
        </clipPath>
        <image
          id={`${props.id}_ftm_image0`}
          width="200"
          height="200"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};