const StarIcon = ({
  width = 30,
  height = 30,
}: {
  width?: number | string;
  height?: number | string;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 5.75L8.855 7.4925C8.01 9.7775 7.5875 10.92 6.75375 11.7538C5.92 12.5875 4.7775 13.01 2.4925 13.855L0.75 14.5L2.4925 15.145C4.7775 15.99 5.92 16.4138 6.75375 17.2463C7.5875 18.0788 8.01 19.2225 8.855 21.5075L9.5 23.25L10.145 21.5075C10.99 19.2225 11.4137 18.08 12.2462 17.2463C13.0787 16.4125 14.2225 15.99 16.5075 15.145L18.25 14.5L16.5075 13.855C14.2225 13.01 13.08 12.5875 12.2462 11.7538C11.4125 10.92 10.99 9.7775 10.145 7.4925L9.5 5.75ZM19.5 0.75L19.2237 1.49625C18.8612 2.47625 18.68 2.96625 18.3238 3.3225C17.9663 3.68 17.4763 3.86125 16.4963 4.2225L15.75 4.5L16.4975 4.77625C17.4762 5.13875 17.9663 5.32 18.3225 5.67625C18.68 6.03375 18.8612 6.52375 19.2225 7.50375L19.5 8.25L19.7763 7.50375C20.1388 6.52375 20.32 6.03375 20.6762 5.6775C21.0337 5.32 21.5237 5.13875 22.5037 4.7775L23.25 4.5L22.5025 4.22375C21.5238 3.86125 21.0337 3.68 20.6775 3.32375C20.32 2.96625 20.1388 2.47625 19.7775 1.49625L19.5 0.75Z"
        stroke="url(#paint0_linear_1_1003)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_1003"
          x1="-23.625"
          y1="28.875"
          x2="1.70477"
          y2="-27.0287"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A59FC3" />
          <stop offset="0.215" stopColor="#542B81" />
          <stop offset="0.515" stopColor="#DC379F" />
          <stop offset="0.73" stopColor="#F3A199" />
          <stop offset="0.92" stopColor="#FAF6E8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StarIcon;
