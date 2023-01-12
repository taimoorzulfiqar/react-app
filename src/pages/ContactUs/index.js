import React from "react";

import { Stack, Text, Input, TextArea, Button, Img } from "components";
import { useNavigate } from "react-router-dom";

const ContactUsPage = () => {
  const navigate = useNavigate();

  function handleNavigate305() {
    navigate("/successcontact");
  }
  function handleNavigate306() {
    navigate("/");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-worksans h-[800px] mx-[auto] sm:p-[15px] md:p-[25px] p-[37px] relative w-[100%]">
        <div className="absolute bg-white_A700 sm:h-[4px] md:h-[5px] h-[7px] inset-x-[0] max-w-[1260px] mx-[auto] sm:pl-[15px] sm:pr-[15px] top-[16%] w-[100%]"></div>
        <div className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start max-w-[1090px] my-[auto] sm:pl-[15px] sm:pr-[15px] right-[5%] w-[100%]">
          <Text
            className="md:ml-[124px] ml-[181px] sm:ml-[96px] text-black_900 w-[auto]"
            as="h4"
            variant="h4"
          >
            Contact Us
          </Text>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[2px] md:mt-[3px] mt-[5px] w-[100%]">
            <div className="flex flex-col items-center justify-start sm:mt-[39px] md:mt-[51px] mt-[75px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_603 text-gray_603 tracking-ls036 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                wrapClassName="w-[100%]"
                type="text"
                name="TextField"
                placeholder="Full Name"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_603 text-gray_603 tracking-ls036 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                wrapClassName="md:mt-[14px] mt-[21px] sm:mt-[11px] w-[100%]"
                type="email"
                name="TextField One"
                placeholder="Email"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_603 text-gray_603 tracking-ls036 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                wrapClassName="md:mt-[14px] mt-[21px] sm:mt-[11px] w-[100%]"
                type="number"
                name="TextField Two"
                placeholder="Phone"
              ></Input>
              <TextArea
                className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-[18px] placeholder:text-gray_603 text-gray_603 tracking-ls036 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                name="TextField Three"
                placeholder="Message "
              ></TextArea>
              <Button
                className="items-center justify-center md:mt-[27px] min-w-[43%] mt-[40px] sm:mt-[21px] text-center w-[max-content]"
                onClick={handleNavigate305}
                shape="RoundedBorder12"
                size="lg"
                variant="Outline"
              >
                <div className="common-pointer bg-white_A700 cursor-pointer font-semibold min-w-[43%] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_603 tracking-ls048 md:tracking-ls11 sm:tracking-ls11">
                  <div className="items-center justify-center md:mt-[27px] min-w-[43%] mt-[40px] sm:mt-[21px] text-center w-[max-content]">
                    Submit
                  </div>
                </div>
              </Button>
            </div>
            <Img
              src="images/img_undrawmailsen.png"
              className="max-w-[100%] sm:w-[100%] w-[41%]"
              alt="undrawMailsen"
            />
          </div>
        </div>
        <div className="absolute bg-light_blue_800 flex flex-col h-[max-content] inset-y-[0] items-center justify-end left-[3%] max-w-[135px] my-[auto] sm:p-[15px] md:p-[16px] p-[24px] sm:pl-[15px] sm:pr-[15px] rounded-radius24 w-[100%]">
          <Img
            src="images/img_image29.png"
            className="max-w-[100%] sm:mt-[100px] md:mt-[129px] mt-[188px] sm:w-[100%] w-[97%]"
            alt="imageTwentyNine"
          />
          <Img
            src="images/img_group.svg"
            className="common-pointer max-w-[100%] mb-[13px] sm:mb-[6px] md:mb-[8px] md:mt-[119px] mt-[174px] sm:mt-[92px] w-[29%]"
            onClick={handleNavigate306}
            alt="Group"
          />
        </div>
      </Stack>
    </>
  );
};

export default ContactUsPage;
