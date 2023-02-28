import { SvgProps } from '..';

export const ColorLogo: React.FC<React.PropsWithChildren<SvgProps>> = (
  props
) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="71 61 98 88"
      {...props}
    >
      <g clipPath={`url(#${props.id}_color_logo_clip0)`}>
        <path
          d="M79.4047 121.469C79.4047 121.469 79.5311 121.932 79.7839 122.783C80.0493 123.634 80.4663 124.86 81.1488 126.374C82.4885 129.365 85.0036 133.495 89.4019 137.049C93.7369 140.615 99.9804 143.369 106.982 144.069C110.521 144.445 114.11 144.332 117.776 143.769C121.39 143.218 125.081 142.155 128.493 140.766C131.944 139.351 135.23 137.562 138.212 135.497C141.258 133.395 143.9 131.117 146.288 128.627C148.677 126.124 150.623 123.596 152.317 120.931C153.96 118.328 155.237 115.725 156.184 113.259C157.12 110.832 157.777 108.404 158.131 106.414C158.51 104.349 158.662 102.547 158.699 101.07C158.763 98.1171 158.485 96.4777 158.485 96.4777L168.937 95.6643C168.937 95.6643 169.139 97.8918 168.785 101.721C168.596 103.623 168.242 105.926 167.572 108.466C166.889 111.082 165.941 113.772 164.576 116.713C163.224 119.617 161.467 122.595 159.319 125.523C157.208 128.402 154.592 131.33 151.71 133.945C148.829 136.573 145.467 139.064 141.979 141.116C138.427 143.218 134.61 144.97 130.629 146.284C126.61 147.598 122.553 148.462 118.433 148.812C114.351 149.163 110.192 149 106.376 148.324C98.6281 146.998 91.9296 143.456 87.4555 139.214C82.9309 134.984 80.5674 130.354 79.3668 127.088C78.7601 125.448 78.4062 124.109 78.1914 123.208C78.0018 122.307 77.9007 121.819 77.9007 121.819L79.4047 121.469Z"
          fill={`url(#${props.id}_color_logo_paint0)`}
        ></path>
        <path
          d="M149.41 102.847C149.41 102.847 149.6 101.471 149.461 99.1808C149.322 96.8907 148.74 93.5494 146.781 90.1831C145.758 88.4812 144.557 86.9169 142.775 85.4402C141.119 84.0261 139.072 82.8122 136.835 81.8987C134.598 80.9851 132.133 80.397 129.593 80.1342C128.329 80.0215 127.04 79.9465 125.751 79.984C125.119 79.984 124.499 80.0466 123.766 80.0841C123.122 80.1592 122.54 80.1967 121.896 80.3094C116.777 81.0227 111.911 83.025 108.006 85.6529C106.022 86.992 104.366 88.4061 102.913 89.9829C101.51 91.4971 100.334 93.1239 99.4243 94.6632C97.6043 97.7667 96.7702 100.62 96.4163 102.597C96.0624 104.587 96.0624 105.726 96.0624 105.726L86.8235 104.862C86.8235 104.862 86.9878 103.26 87.7335 100.57C88.4792 97.9044 89.9579 94.1751 92.7005 90.3833C94.0655 88.4812 95.7085 86.5915 97.7181 84.802C99.6644 83.05 102.003 81.3731 104.48 80.0341C109.472 77.2934 115.387 75.4789 121.39 75.1785C122.123 75.1285 122.945 75.1285 123.69 75.116C124.348 75.141 125.119 75.141 125.877 75.2036C127.368 75.2787 128.847 75.5039 130.288 75.7667C133.182 76.3298 135.963 77.2684 138.452 78.5449C140.942 79.8338 143.141 81.4106 144.949 83.2627C146.705 84.9897 148.108 87.1421 149.018 89.0693C150.876 93.0614 151.142 96.7155 151.066 99.1683C151.028 100.395 150.914 101.383 150.813 102.034C150.712 102.672 150.661 103.01 150.661 103.01L149.41 102.847Z"
          fill={`url(#${props.id}_color_logo_paint1)`}
        ></path>
        <path
          d="M160.267 88.9067C160.267 88.9067 160.115 88.4687 159.837 87.6302C159.546 86.8168 159.079 85.6154 158.333 84.1763C156.88 81.3105 154.238 77.3435 149.916 73.8521C145.631 70.3731 139.64 67.4198 132.828 66.4812C129.378 65.9806 125.902 65.9556 122.325 66.4311C118.774 66.9067 115.26 67.8578 111.911 69.2468C105.2 71.9874 99.2852 76.3925 94.7606 81.2855C90.2107 86.1911 86.9752 91.5847 85.0668 96.3652C84.5739 97.579 84.1947 98.6928 83.8282 99.8816C83.4996 100.958 83.2342 102.022 83.0193 103.023C82.5896 105.025 82.3874 106.764 82.3115 108.191C82.1599 111.044 82.3874 112.621 82.3874 112.621L71.0126 113.122C71.0126 113.122 70.8862 110.882 71.417 107.102C71.6825 105.225 72.1374 102.96 72.8831 100.47C73.2623 99.2309 73.7046 97.9294 74.2607 96.5529C74.7663 95.2889 75.3982 93.8498 76.0933 92.4607C78.8991 86.8168 83.1836 80.8725 88.8963 75.6166C94.5837 70.3731 101.762 65.893 109.674 63.3526C113.617 62.0762 117.75 61.2753 121.82 61.0625C125.864 60.8373 129.997 61.1877 133.713 62.0386C141.296 63.703 147.628 67.4948 151.976 71.637C156.361 75.8168 158.801 80.2343 160.115 83.4004C160.772 84.9897 161.151 86.2787 161.404 87.1672C161.619 88.0557 161.745 88.5187 161.745 88.5187L160.267 88.9067Z"
          fill={`url(#${props.id}_color_logo_paint2)`}
        ></path>
        <path
          d="M134.231 112.183C134.231 112.183 134.572 111.445 135.154 110.156C135.305 109.83 135.47 109.48 135.634 109.092C135.76 108.717 135.899 108.304 136.051 107.878C136.329 106.965 136.569 105.926 136.721 104.787C137.024 102.51 136.885 99.7815 135.786 97.2786C134.724 94.7883 132.601 92.6609 129.997 91.6097C127.394 90.5209 124.436 90.4208 121.858 90.984C119.204 91.5471 117.03 92.6984 115.298 93.9498C113.605 95.1888 112.429 96.5027 111.684 97.4538C110.938 98.4174 110.584 99.0056 110.584 99.0056L105.112 95.1512C105.112 95.1512 105.68 94.4004 106.818 93.2365C107.968 92.0727 109.7 90.5209 112.139 89.1194C114.515 87.7553 117.687 86.5289 121.125 86.2035C124.588 85.8531 128.443 86.3913 131.729 88.2183C135.04 90.0079 137.467 93.1364 138.427 96.3401C139.426 99.5687 139.185 102.685 138.591 105.125C138.288 106.364 137.909 107.453 137.505 108.391C137.264 108.917 137.138 109.217 136.873 109.718C136.658 110.081 136.456 110.419 136.266 110.731C135.546 111.945 135.128 112.646 135.128 112.646L134.231 112.183Z"
          fill={`url(#${props.id}_color_logo_paint3)`}
        ></path>
        <path
          d="M92.2708 111.47C92.2708 111.47 92.2834 111.795 92.2961 112.408C92.3214 112.997 92.3719 113.848 92.5489 114.936C92.8775 117.089 93.699 120.192 95.7844 123.258C96.7828 124.747 98.2362 126.337 99.8414 127.576C101.497 128.877 103.469 129.966 105.642 130.742C107.816 131.505 110.18 131.981 112.606 132.106C114.995 132.256 117.535 132.018 119.924 131.543C124.765 130.554 129.315 128.414 132.992 125.724C133.928 125.06 134.787 124.347 135.621 123.634L136.86 122.507L137.922 121.431C139.337 119.929 140.538 118.403 141.511 116.914C143.457 113.948 144.544 111.245 145.1 109.33C145.669 107.415 145.808 106.314 145.808 106.314L153.631 107.916C153.631 107.916 153.315 109.367 152.393 111.77C151.483 114.16 149.84 117.439 147.186 120.843C145.859 122.545 144.291 124.259 142.471 125.899C141.991 126.312 141.511 126.737 141.018 127.15C140.538 127.526 140.057 127.901 139.565 128.289C138.528 129.052 137.454 129.803 136.316 130.491C131.792 133.282 126.357 135.334 120.708 136.06C117.864 136.398 115.046 136.448 112.24 136.073C109.459 135.722 106.767 134.972 104.341 133.883C101.914 132.794 99.7402 131.367 97.9708 129.728C96.1256 128.051 94.8112 126.324 93.7622 124.497C91.6894 120.881 91.0954 117.452 90.9311 115.136C90.8426 113.973 90.8553 113.034 90.8806 112.408C90.9185 111.795 90.9311 111.482 90.9311 111.482L92.2708 111.47Z"
          fill={`url(#${props.id}_color_logo_paint4)`}
        ></path>
        <path
          d="M117.182 100.657C117.182 100.657 116.145 101.458 115.21 103.06C114.275 104.599 113.769 107.177 114.945 108.792C115.45 109.505 116.272 110.043 117.118 110.231C117.321 110.281 117.573 110.318 117.738 110.331C118.117 110.381 118.142 110.356 118.395 110.356C118.812 110.343 119.204 110.281 119.57 110.193C121.024 109.83 121.833 109.167 121.833 109.167L124.234 113.635C124.234 113.635 123.842 113.822 123.134 114.06C122.427 114.298 121.39 114.586 120.088 114.648C119.444 114.673 118.736 114.661 117.99 114.536C117.662 114.486 117.106 114.361 116.891 114.285C116.461 114.16 116.12 114.035 115.716 113.847C114.199 113.159 112.783 111.883 112.063 110.193C111.368 108.604 111.406 106.802 111.81 105.4C112.215 103.961 112.935 102.822 113.643 101.971C114.351 101.108 115.058 100.532 115.564 100.144C116.082 99.7564 116.385 99.5938 116.385 99.5938L117.182 100.657Z"
          fill={`url(#${props.id}_color_logo_paint5)`}
        ></path>
        <path
          d="M124.6 109.781C124.6 109.781 125.624 108.98 126.446 107.39C126.85 106.602 127.166 105.613 127.179 104.612C127.217 103.599 126.926 102.585 126.357 101.822C125.801 101.058 124.992 100.57 124.158 100.357C123.766 100.257 123.286 100.195 122.92 100.195C122.515 100.195 122.136 100.245 121.782 100.307C120.367 100.608 119.583 101.208 119.583 101.208L117.321 96.5155C117.321 96.5155 117.712 96.3528 118.433 96.1651C119.153 95.9774 120.202 95.7646 121.491 95.7771C122.136 95.7897 122.831 95.8522 123.551 96.0149C124.31 96.1901 124.992 96.4154 125.751 96.8033C127.204 97.5291 128.518 98.8181 129.188 100.357C129.871 101.884 129.921 103.561 129.58 104.938C129.251 106.339 128.582 107.465 127.912 108.304C127.242 109.142 126.547 109.718 126.054 110.081C125.548 110.444 125.258 110.606 125.258 110.606L124.6 109.781Z"
          fill={`url(#${props.id}_color_logo_paint6)`}
        ></path>
        <path
          d="M104.341 100.395C104.341 100.395 102.344 103.448 101.725 106.264C101.105 109.08 100.296 114.498 104.631 119.529C104.631 119.529 108.777 124.86 117.321 124.91C117.321 124.91 123.147 125.248 129.542 121.744C129.542 121.744 133.877 119.316 136.076 116.763L130.44 112.046C130.44 112.046 127.988 115.587 123.45 117.815C123.45 117.815 116.929 121.444 110.584 118.803C110.584 118.803 104.783 117.001 103.747 109.518C103.747 109.518 103.368 104.187 105.402 100.87L104.341 100.395Z"
          fill={`url(#${props.id}_color_logo_paint7)`}
        ></path>
      </g>
      <defs>
        <linearGradient
          id={`${props.id}_color_logo_paint0`}
          x1="78"
          y1="122.46"
          x2="164.634"
          y2="95.3877"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07D5D8"></stop>
          <stop offset="0.6369" stopColor="#6E6EFF"></stop>
          <stop offset="1" stopColor="#6E35FF"></stop>
        </linearGradient>
        <linearGradient
          id={`${props.id}_color_logo_paint1`}
          x1="150.8"
          y1="102.905"
          x2="91.3006"
          y2="105.711"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07D5D8"></stop>
          <stop offset="0.6369" stopColor="#6E6EFF"></stop>
          <stop offset="1" stopColor="#6E35FF"></stop>
        </linearGradient>
        <linearGradient
          id={`${props.id}_color_logo_paint2`}
          x1="161.3"
          y1="88.238"
          x2="76.7697"
          y2="113.256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07D5D8"></stop>
          <stop offset="0.6369" stopColor="#6E6EFF"></stop>
          <stop offset="1" stopColor="#6E35FF"></stop>
        </linearGradient>
        <linearGradient
          id={`${props.id}_color_logo_paint3`}
          x1="135.4"
          y1="112.682"
          x2="108.247"
          y2="97.061"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07D5D8"></stop>
          <stop offset="0.6369" stopColor="#6E6EFF"></stop>
          <stop offset="1" stopColor="#6E35FF"></stop>
        </linearGradient>
        <linearGradient
          id={`${props.id}_color_logo_paint4`}
          x1="90.6"
          y1="111.984"
          x2="149.393"
          y2="107.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07D5D8"></stop>
          <stop offset="0.6369" stopColor="#6E6EFF"></stop>
          <stop offset="1" stopColor="#6E35FF"></stop>
        </linearGradient>
        <linearGradient
          id={`${props.id}_color_logo_paint5`}
          x1="116.5"
          y1="100.111"
          x2="123.409"
          y2="112.037"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07D5D8"></stop>
          <stop offset="0.6369" stopColor="#6E6EFF"></stop>
          <stop offset="1" stopColor="#6E35FF"></stop>
        </linearGradient>
        <linearGradient
          id={`${props.id}_color_logo_paint6`}
          x1="124.9"
          y1="109.889"
          x2="118.672"
          y2="99.3702"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07D5D8"></stop>
          <stop offset="0.6369" stopColor="#6E6EFF"></stop>
          <stop offset="1" stopColor="#6E35FF"></stop>
        </linearGradient>
        <linearGradient
          id={`${props.id}_color_logo_paint7`}
          x1="105.3"
          y1="100.111"
          x2="133.188"
          y2="114.987"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07D5D8"></stop>
          <stop offset="0.6369" stopColor="#6E6EFF"></stop>
          <stop offset="1" stopColor="#6E35FF"></stop>
        </linearGradient>
        <clipPath id={`${props.id}_color_logo_clip0`}>
          <rect
            width="98"
            height="88"
            fill="white"
            transform="translate(71 61)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};
