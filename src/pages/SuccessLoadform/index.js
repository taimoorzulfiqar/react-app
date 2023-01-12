import React from "react";

import { Text, Img } from "components";
import { useNavigate } from "react-router-dom";

const SuccessLoadformPage = () => {
  const navigate = useNavigate();

  function handleNavigate164() {
    navigate("/mainloadform");
  }

  return (
    <>
      <div
        className="common-pointer bg-white_A700 flex flex-col font-roboto items-center justify-start mx-[auto] md:p-[153px] sm:p-[15px] p-[223px] shadow-bs3 w-[100%]"
        onClick={handleNavigate164}
      >
        <Text
          className="not-italic text-orange_A200 w-[auto]"
          as="h1"
          variant="h1"
        >
          Success!
        </Text>
        <Img
          src="images/img_successiconco.png"
          className="md:h-[120px] h-[173px] sm:h-[93px] max-w-[173px] sm:mb-[47px] md:mb-[61px] mb-[90px] ml-[auto] mr-[auto] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:pl-[15px] sm:pr-[15px] w-[100%] md:w-[119px] sm:w-[92px]"
          alt="successiconco"
        />
      </div>
    </>
  );
};

export default SuccessLoadformPage;
