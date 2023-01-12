import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlinePink3003f: "bg-white_A700 shadow-bs1",
  OutlineGray602: "border border-gray_602 border-solid",
};
const shapes = {
  RoundedBorder12: "rounded-radius12",
  RoundedBorder4: "rounded-radius4",
};
const sizes = {
  sm: "md:p-[10px] p-[15px] sm:p-[7px]",
  md: "md:p-[15px] p-[23px] sm:px-[15px] sm:py-[12px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder12", "RoundedBorder4"]),
  variant: PropTypes.oneOf(["OutlinePink3003f", "OutlineGray602"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder12",
  variant: "OutlinePink3003f",
  size: "md",
};

export { Input };
