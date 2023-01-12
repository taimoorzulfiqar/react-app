import React from "react";

import { Stack, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const LandingPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate93() {
    navigate("/signin");
  }
  function handleNavigate94() {
    navigate("/signup");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-roboto h-[800px] mx-[auto] sm:pl-[15px] md:pl-[25px] pl-[37px] sm:py-[15px] md:py-[25px] py-[37px] relative w-[100%]">
        <Stack className="absolute bottom-[12%] h-[530px] max-w-[1184px] sm:pl-[15px] sm:pr-[15px] right-[0] w-[100%]">
          <Img
            src="images/img_undrawvaultre.png"
            className="absolute h-[530px] max-w-[100%] right-[0] sm:w-[100%] w-[67%]"
            alt="undrawVaultre"
          />
          <div className="absolute flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] top-[15%] sm:w-[100%] w-[36%]">
            <Text
              className="leading-[normal] sm:mx-[0] text-black_900 sm:w-[100%] w-[95%]"
              as="h2"
              variant="h2"
            >
              Take charge of your finances
            </Text>
            <Text
              className="font-normal leading-[normal] sm:mt-[29px] md:mt-[38px] mt-[56px] not-italic text-black_900 w-[100%]"
              variant="body1"
            >
              Keep track of all your sales and easily record transactions
            </Text>
          </div>
          <div
            className="common-pointer absolute bottom-[22%] flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between left-[1%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]"
            onClick={handleNavigate93}
          >
            <Button
              className="cursor-pointer font-normal min-w-[50%] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
              shape="RoundedBorder5"
              size="xl"
              variant="FillLightblue800"
            >
              LOGIN
            </Button>
            <Text
              className="common-pointer font-normal not-italic text-light_blue_800 w-[auto]"
              variant="body1"
              onClick={handleNavigate94}
            >
              SIGN UP
            </Text>
          </div>
        </Stack>
        <Stack className="absolute h-[726px] inset-[0] justify-center m-[auto] max-w-[1327px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="absolute bottom-[0] h-[684px] inset-x-[0] mx-[auto] sm:w-[100%] w-[97%]">
            <div className="absolute bg-white_A700 sm:h-[4px] md:h-[5px] h-[7px] inset-x-[0] mx-[auto] top-[5%] sm:w-[100%] w-[99%]"></div>
            <div className="absolute backdrop-opacity-[0.5] bg-light_blue_800_99 blur-[60.00px] sm:h-[365px] md:h-[471px] h-[684px] rounded-radius24 w-[7%]"></div>
          </Stack>
          <div className="absolute bg-light_blue_800 flex flex-col h-[max-content] inset-y-[0] items-center justify-end left-[0] sm:mx-[0] my-[auto] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius24 sm:w-[100%] w-[11%]">
            <Img
              src="images/img_image29.png"
              className="max-w-[100%] sm:mt-[100px] md:mt-[129px] mt-[188px] sm:w-[100%] w-[97%]"
              alt="imageTwentyNine"
            />
            <Img
              src="images/img_vector.svg"
              className="max-w-[100%] md:mb-[10px] mb-[15px] sm:mb-[7px] md:mt-[114px] mt-[166px] sm:mt-[88px] sm:w-[100%] w-[40%]"
              alt="Vector"
            />
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default LandingPagePage;
