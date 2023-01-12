import React from "react";
const variantClasses = {
  h1: "font-normal md:text-[48px] sm:text-[48px] text-[64px]",
  h2: "font-medium sm:text-[42px] md:text-[48px] text-[56px]",
  h3: "font-normal sm:text-[21px] md:text-[27px] text-[40px]",
  h4: "font-semibold sm:text-[32px] md:text-[34px] text-[36px]",
  h5: "sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "font-medium sm:text-[18px] md:text-[20px] text-[22px]",
  body1: "text-[20px]",
  body2: "font-bold text-[18px]",
  body3: "text-[16px]",
  body4: "font-medium text-[15px]",
  body5: "text-[14px]",
  body6: "text-[13px]",
  body7: "font-normal text-[12px]",
  body8: "font-medium text-[11px]",
  body9: "text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
