const CerebrumLogo = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    style={{ height: "2.75em" }}
    {...props}
  >
    <defs>
      <radialGradient
        id="a"
        cx={24.323}
        cy={103.366}
        r={204.365}
        gradientTransform="translate(57.84 46.622) scale(1.0691)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.317} stopColor="#63f" />
        <stop offset={0.338} stopColor="#6634ff" stopOpacity={0.962} />
        <stop offset={0.528} stopColor="#673aff" stopOpacity={0.625} />
        <stop offset={0.696} stopColor="#683fff" stopOpacity={0.357} />
        <stop offset={0.835} stopColor="#6942ff" stopOpacity={0.164} />
        <stop offset={0.941} stopColor="#6944ff" stopOpacity={0.045} />
        <stop offset={1} stopColor="#6945ff" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="c"
        cx={152.954}
        cy={104.245}
        r={79.257}
        gradientTransform="translate(-.462 -4.31) scale(1.0876)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#e97656" />
        <stop offset={0.262} stopColor="#ff26e2" />
        <stop offset={0.683} stopColor="#aa32ff" />
        <stop offset={0.958} stopColor="#3cc8f5" />
      </radialGradient>
      <linearGradient
        id="b"
        x1={2.781}
        y1={150.053}
        x2={286.493}
        y2={150.053}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6945ff" />
        <stop offset={1} stopColor="#2592fb" />
      </linearGradient>
    </defs>
    <path
      d="M218.849 150.053a68.587 68.587 0 0 0-5.027-25.818l72.67-29.414a147.608 147.608 0 0 1-.904 112.67l-72.178-30.584a68.592 68.592 0 0 0 5.439-26.854Z"
      fill="url(#a)"
    />
    <path
      d="M198.694 198.711a68.814 68.814 0 0 1-112.444-22.84l-.16.065.087-.179a68.908 68.908 0 0 1 .385-52.6l.1.043a68.824 68.824 0 0 1 127.16 1.035l72.671-29.415a147.257 147.257 0 0 0-271.994-2.238l-.11-.046a147.607 147.607 0 0 0-.86 112.67l.151.039-.101.04a147.257 147.257 0 0 0 272.009 2.205l-72.178-30.583a68.925 68.925 0 0 1-14.716 21.804Z"
      fill="url(#b)"
    />
    <path
      d="M86.25 176.49a68.897 68.897 0 0 0 36.517 37.373l2.973 9.772 74.054 4.282a10.205 10.205 0 0 0 10.794-10.188v-33.964H228.3l-10.204-43.26-2.627-11.143q-.748-2.29-1.647-4.51a68.838 68.838 0 0 0-127.16-1.034l-.1-.043a68.914 68.914 0 0 0-.384 52.6Z"
      fill="#fff"
    />
    <path
      d="M164.632 218.34c-8.242-3.152-15.382-7.05-18.232-11.647-4.883-7.876-4.997 4.239-4.642 12.041.147 3.248.376 5.75.376 5.75l59.67 3.45s-20.768-3.32-37.172-9.594Z"
      fill="#d1d3d4"
    />
    <circle
      cx={182.133}
      cy={155.514}
      r={8.484}
      transform="rotate(-17.634 182.132 155.514)"
    />
    <path
      d="M185.557 124.915a12.405 12.405 0 0 0-2.143-5.165 44.364 44.364 0 0 0-79.005 37.05 44.898 44.898 0 0 0 3.687 9.466c.123.233.255.456.392.672a9.402 9.402 0 0 0 16.507-1.456c.362-.842.735-1.691 1.121-2.54 4.229-9.295 10.03-18.477 21.199-17.4a50.828 50.828 0 0 0 19.779-2.026 57.751 57.751 0 0 0 12.27-5.393 12.87 12.87 0 0 0 6.193-13.208Z"
      fill="url(#c)"
    />
  </svg>
);

export default CerebrumLogo;
