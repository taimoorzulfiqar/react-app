import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder20: "rounded-radius20",
  RoundedBorder5: "rounded-radius5",
  CustomBorderLR2:
    "rounded-bl-[0] rounded-br-[2px] rounded-tl-[0] rounded-tr-[2px]",
  RoundedBorder12: "rounded-radius12",
  icbCircleBorder18: "rounded-radius18",
  icbRoundedBorder8: "rounded-radius8",
  icbCircleBorder23: "rounded-radius23",
};
const variants = {
  OutlineBlack9003f_3: "bg-blue_201 shadow-bs text-white_A700",
  FillLightblue800: "bg-light_blue_800 text-white_A700",
  FillBlue50: "bg-blue_50 text-bluegray_600",
  OutlineBlack9003f: "bg-light_blue_800 shadow-bs text-white_A700",
  FillIndigo102: "bg-indigo_102 text-indigo_900",
  OutlineBlack9003f_1: "bg-orange_A200 shadow-bs text-white_A700",
  Outline:
    "bg-gradient1  bg-white_A700 border border-solid shadow-bs2 text-gray_603",
  OutlineBlack9003f_2: "bg-indigo_400 shadow-bs text-white_A700",
  icbGradientBlack901Bluegray901: "bg-gradient ",
  icbOutlineGray100: "outline outline-[0.5px] outline-gray_100",
  icbFillLightblue100: "bg-light_blue_100",
};
const sizes = {
  sm: "p-[4px]",
  md: "p-[10px] sm:p-[5px] md:p-[6px]",
  lg: "md:p-[10px] p-[15px] sm:p-[7px]",
  xl: "md:p-[14px] p-[21px] sm:px-[15px] sm:py-[11px]",
  smIcn: "p-[4px]",
  mdIcn: "sm:p-[4px] md:p-[6px] p-[9px]",
  lgIcn: "p-[12px] sm:p-[6px] md:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder20",
    "RoundedBorder5",
    "CustomBorderLR2",
    "RoundedBorder12",
    "icbCircleBorder18",
    "icbRoundedBorder8",
    "icbCircleBorder23",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBlack9003f_3",
    "FillLightblue800",
    "FillBlue50",
    "OutlineBlack9003f",
    "FillIndigo102",
    "OutlineBlack9003f_1",
    "Outline",
    "OutlineBlack9003f_2",
    "icbGradientBlack901Bluegray901",
    "icbOutlineGray100",
    "icbFillLightblue100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder20",
  variant: "",
  size: "md",
};

export { Button };
