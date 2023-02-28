import { SvgProps } from '..';

export const BusdIcon: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 336.41 337.42"
      {...props}
    >
      <title>Asset 1</title>
      <g id={`${props.id}_layer2`} data-name="Layer 2">
        <g id={`${props.id}_layer1`} data-name="Layer 1">
          <path
            fill="#f0b90b"
            stroke="#f0b90b"
            d="M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z"
          />
          <path
            fill="#f0b90b"
            stroke="#f0b90b"
            d="M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z"
          />
          <path
            fill="#f0b90b"
            stroke="#f0b90b"
            d="M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z"
          />
          <path
            fill="#f0b90b"
            stroke="#f0b90b"
            d="M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z"
          />
        </g>
      </g>
    </svg>
  );
};
