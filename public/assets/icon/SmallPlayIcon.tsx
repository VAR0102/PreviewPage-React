const SmallPlayIcon = ({
  width = 37,
  height = 37,
}: {
  width?: number | string;
  height?: number | string;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 117 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x="-12.8" y="-12.8" width="142.6" height="142.6">
        <div></div>
      </foreignObject>
      <circle
        data-figma-bg-blur-radius="12.8"
        cx="58.5"
        cy="58.5"
        r="57"
        fill="black"
        fillOpacity="0.33"
        stroke="url(#paint0_linear_1_1237)"
        strokeWidth="3"
      />
      <path
        d="M84.5 53.6699C87.8333 55.5944 87.8333 60.4056 84.5 62.3301L48.5 83.1147C45.1667 85.0392 41 82.6336 41 78.7846L41 37.2154C41 33.3664 45.1667 30.9608 48.5 32.8853L84.5 53.6699Z"
        fill="white"
        fillOpacity="0.9"
      />
      <defs>
        <clipPath
          id="bgblur_0_1_1237_clip_path"
          transform="translate(12.8 12.8)"
        >
          <circle cx="58.5" cy="58.5" r="57" />
        </clipPath>
        <linearGradient
          id="paint0_linear_1_1237"
          x1="158.5"
          y1="117"
          x2="12.5"
          y2="-20.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.5" stopColor="#646464" />
          <stop offset="1" stopColor="#EDEDED" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SmallPlayIcon;
