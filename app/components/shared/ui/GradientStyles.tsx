export const gradientStyle = {
  background:
    "linear-gradient(93deg, #a59fc3 -82.63%, #542b81 -36.76%, #dc379f 27.24%, #f3a199 73.1%, #faf6e8 113.63%)",
};

export const textGradientStyle = {
  ...gradientStyle,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export const borderGradient = {
  backgroundImage: `linear-gradient(white, white), linear-gradient(92.35deg, #a59fc3 -94.27%, #542b81 -42.42%, #dc379f 29.93%, #f3a199 81.78%, #faf6e8 127.6%)`,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};
