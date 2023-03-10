import { SvgProps } from '..';

export const MimIcon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
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
      <rect width="40" height="40" fill={`url(#${props.id}_mim_pattern0)`} />
      <defs>
        <pattern
          id={`${props.id}_mim_pattern0`}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref={`#${props.id}_mim_image0`}
            transform="translate(-0.0823529 -0.0823529) scale(0.00588235)"
          />
        </pattern>
        <image
          id={`${props.id}_mim_image0`}
          width="200"
          height="200"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
