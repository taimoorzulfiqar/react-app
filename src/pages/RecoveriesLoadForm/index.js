import React from "react";

import { Stack, Img, Line, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const RecoveriesLoadFormPage = () => {
  const navigate = useNavigate();

  function handleNavigate10() {
    navigate("/maindashboard");
  }
  function handleNavigate11() {
    navigate("/stores");
  }
  function handleNavigate12() {
    navigate("/mainloadform");
  }
  function handleNavigate13() {
    navigate("/recoveries");
  }
  function handleNavigate14() {
    navigate("/signin");
  }
  function handleNavigate15() {
    navigate("/user");
  }
  function handleNavigate16() {
    navigate("/recoveries");
  }
  function handleNavigate17() {
    navigate("/mainsettleinvoice");
  }
  function handleNavigate23() {
    navigate("/recoveriesloadformshort");
  }
  function handleNavigate24() {
    navigate("/deliverymen");
  }
  function handleNavigate25() {
    navigate("/signin");
  }
  function handleNavigate26() {
    navigate("/user");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] sm:pr-[15px] md:pr-[44px] pr-[65px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1375px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[815px] relative w-[23%]">
            <Stack className="absolute h-[815px] right-[1%] sm:w-[100%] w-[99%]">
              <div
                className="common-pointer absolute bg-bluegray_100 sm:h-[23px] md:h-[29px] h-[42px] right-[6%] top-[5%] sm:w-[22px] md:w-[28px] w-[42px]"
                onClick={handleNavigate23}
              ></div>
              <div className="absolute bg-bluegray_100 sm:h-[24px] md:h-[31px] h-[44px] right-[6%] top-[5%] sm:w-[23px] md:w-[30px] w-[44px]"></div>
              <aside className="absolute md:hidden sm:hidden w-[100%]">
                <div className="">
                  <div className="bg-light_blue_800 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Img
                        src="images/img_image29_53X182.png"
                        className="max-w-[100%] sm:w-[100%] w-[72%]"
                        alt="imageThirty"
                      />
                      <Stack className="h-[36px] relative w-[17%]">
                        <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[70%]">
                          <Line className="bg-white_A700 h-[3px] w-[100%]" />
                          <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                          <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                        </div>
                        <div className="absolute bg-bluegray_100 sm:h-[20px] md:h-[25px] h-[36px] w-[100%]"></div>
                      </Stack>
                    </div>
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mt-[125px] mt-[182px] sm:mt-[96px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[98%]">
                      <Img
                        src="images/img_settings.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="settings"
                      />
                      <Text
                        className="flex-grow font-semibold sm:ml-[21px] md:ml-[28px] ml-[41px] sm:mr-[35px] md:mr-[45px] mr-[66px] text-white_A700"
                        variant="body3"
                      >
                        Dashboard
                      </Text>
                    </div>
                    <div
                      className="common-pointer bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius8 sm:w-[100%] w-[98%]"
                      onClick={handleNavigate24}
                    >
                      <Img
                        src="images/img_user.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[4px] md:ml-[6px] ml-[9px] my-[3px] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="user"
                      />
                      <Text
                        className="flex-grow font-semibold sm:ml-[21px] md:ml-[28px] ml-[41px] sm:mr-[29px] md:mr-[38px] mr-[56px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700"
                        variant="body3"
                      >
                        Deliverymen
                      </Text>
                    </div>
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[98%]">
                      <Img
                        src="images/img_mobile.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="mobile"
                      />
                      <Text
                        className="flex-grow font-semibold sm:ml-[21px] md:ml-[28px] ml-[41px] mr-[105px] sm:mr-[55px] md:mr-[72px] text-white_A700"
                        variant="body3"
                      >
                        Stores
                      </Text>
                    </div>
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[98%]">
                      <Img
                        src="images/img_menu.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="menu"
                      />
                      <Text
                        className="flex-grow font-semibold sm:ml-[21px] md:ml-[28px] ml-[41px] sm:mr-[38px] md:mr-[49px] mr-[72px] text-white_A700"
                        variant="body3"
                      >
                        Load Form
                      </Text>
                    </div>
                    <Img
                      src="images/img_user.svg"
                      className="common-pointer sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:mt-[112px] md:mt-[145px] mt-[212px] sm:w-[12px] md:w-[15px] w-[23px]"
                      onClick={handleNavigate26}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[18px] md:mb-[24px] mb-[35px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate25}
                      alt="folder"
                    />
                  </div>
                </div>
              </aside>
            </Stack>
            <aside className="absolute bottom-[1%] md:hidden sm:hidden w-[100%]">
              <div className="">
                <div className="bg-light_blue_800 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="images/img_image29_53X182.png"
                      className="max-w-[100%] sm:w-[100%] w-[74%]"
                      alt="imageThirtyOne"
                    />
                    <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                      <Line className="bg-white_A700 h-[3px] w-[100%]" />
                      <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                      <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                    </div>
                  </div>
                  <div
                    className="common-pointer bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mt-[112px] mt-[164px] sm:mt-[87px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[99%]"
                    onClick={handleNavigate10}
                  >
                    <Img
                      src="images/img_settings.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="settings One"
                    />
                    <Text
                      className="flex-grow font-semibold sm:ml-[21px] md:ml-[28px] ml-[41px] sm:mr-[35px] md:mr-[45px] mr-[66px] text-white_A700"
                      variant="body3"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius8 sm:w-[100%] w-[99%]">
                    <Img
                      src="images/img_user.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[4px] md:ml-[6px] ml-[9px] my-[3px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="user Two"
                    />
                    <Text
                      className="flex-grow font-semibold sm:ml-[21px] md:ml-[28px] ml-[41px] sm:mr-[29px] md:mr-[38px] mr-[56px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700"
                      variant="body3"
                    >
                      Deliverymen
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[99%]"
                    onClick={handleNavigate11}
                  >
                    <Img
                      src="images/img_mobile.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="mobile One"
                    />
                    <Text
                      className="flex-grow font-semibold sm:ml-[21px] md:ml-[28px] ml-[41px] mr-[105px] sm:mr-[55px] md:mr-[72px] text-white_A700"
                      variant="body3"
                    >
                      Stores
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[99%]"
                    onClick={handleNavigate12}
                  >
                    <Img
                      src="images/img_menu.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="menu One"
                    />
                    <Text
                      className="flex-grow font-semibold sm:ml-[21px] md:ml-[28px] ml-[41px] sm:mr-[38px] md:mr-[49px] mr-[72px] text-white_A700"
                      variant="body3"
                    >
                      Load Form
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[99%]"
                    onClick={handleNavigate13}
                  >
                    <Img
                      src="images/img_refresh.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="refresh"
                    />
                    <Text
                      className="flex-grow font-semibold sm:ml-[20px] md:ml-[26px] ml-[39px] sm:mr-[37px] md:mr-[48px] mr-[70px] text-white_A700"
                      variant="body3"
                    >
                      Recoveries
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] md:mt-[118px] mt-[172px] sm:mt-[91px] sm:w-[12px] md:w-[15px] w-[23px]"
                    alt="user Three"
                  />
                  <Img
                    src="images/img_folder.svg"
                    className="sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[12px] md:mb-[15px] mb-[23px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                    alt="folder One"
                  />
                </div>
              </div>
            </aside>
          </Stack>
          <div className="flex flex-col items-center justify-start md:ml-[17px] ml-[26px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[11px] md:ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                  <Img
                    src="images/img_reply.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="reply"
                  />
                  <Text
                    className="flex-grow font-semibold md:ml-[10px] ml-[15px] sm:ml-[7px] text-black_900"
                    as="h5"
                    variant="h5"
                  >
                    {"Recoveries > Load Form [Load Form 0001]"}
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
              <Button
                className="common-pointer flex sm:h-[25px] md:h-[32px] h-[46px] items-center justify-center mb-[3px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                onClick={handleNavigate16}
                size="lgIcn"
                variant="icbOutlineGray100"
              >
                <Img
                  src="images/img_arrowleft_gray_903.svg"
                  className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                  alt="arrowleft"
                />
              </Button>
              <Text
                className="font-semibold sm:ml-[41px] md:ml-[53px] ml-[78px] sm:mt-[15px] md:mt-[20px] mt-[30px] text-black_900 w-[auto]"
                variant="body3"
              >
                Store Name
              </Text>
              <Text
                className="font-semibold mb-[2px] sm:ml-[16px] md:ml-[21px] ml-[31px] sm:mt-[15px] md:mt-[20px] mt-[30px] text-black_900 w-[auto]"
                variant="body3"
              >
                Invoice Number
              </Text>
              <Text
                className="font-semibold sm:ml-[11px] md:ml-[15px] ml-[22px] sm:mt-[15px] md:mt-[20px] mt-[30px] text-black_900 w-[auto]"
                variant="body3"
              >
                Invoice Amount
              </Text>
              <Text
                className="font-semibold sm:ml-[11px] md:ml-[15px] ml-[22px] sm:mt-[15px] md:mt-[20px] mt-[30px] text-black_900 w-[auto]"
                variant="body3"
              >
                Amount Collected
              </Text>
              <Text
                className="font-semibold sm:ml-[19px] md:ml-[24px] ml-[36px] sm:mt-[15px] md:mt-[20px] mt-[30px] text-black_900 w-[auto]"
                variant="body3"
              >
                Amount Credited
              </Text>
            </div>
            <Line className="bg-black_900 h-[2px] mt-[13px] sm:mt-[6px] md:mt-[8px] rotate-[-180deg] sm:w-[100%] w-[76%]" />
            <div className="flex flex-col justify-start sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
              <List
                className="gap-[12px] sm:gap-[6px] md:gap-[8px] grid min-h-[auto] sm:w-[100%] w-[88%]"
                orientation="vertical"
              >
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] w-[100%]">
                  <div className="flex flex-col sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                    <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[13px] md:ml-[17px] ml-[25px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    Jamal Store
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[41px] md:ml-[52px] ml-[77px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    IN456
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[47px] md:ml-[61px] ml-[90px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 3,000
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[51px] md:ml-[66px] ml-[97px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 0
                  </Text>
                  <Text
                    className="font-semibold ml-[136px] sm:ml-[72px] md:ml-[93px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 3,000
                  </Text>
                </div>
                <Line className="self-center w-[100%] h-[3px] bg-bluegray_100" />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:px-[0] w-[100%]">
                  <div className="flex flex-col sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                    <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[13px] md:ml-[17px] ml-[25px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    Kamal Store
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[40px] md:ml-[52px] ml-[76px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    IN457
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[48px] md:ml-[62px] ml-[91px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 4,000
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[51px] md:ml-[66px] ml-[96px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 3,000
                  </Text>
                  <Text
                    className="font-semibold ml-[106px] sm:ml-[56px] md:ml-[72px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 1,000
                  </Text>
                </div>
                <Line className="self-center w-[100%] h-[3px] bg-bluegray_100" />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:px-[0] w-[100%]">
                  <div className="flex flex-col sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                    <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[14px] md:ml-[18px] ml-[27px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    Super Store
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[42px] md:ml-[54px] ml-[79px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    IN458
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[47px] md:ml-[61px] ml-[90px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 6,000
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[51px] md:ml-[66px] ml-[97px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 5,000
                  </Text>
                  <Text
                    className="font-semibold ml-[106px] sm:ml-[56px] md:ml-[72px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 1,000
                  </Text>
                </div>
                <Line className="self-center w-[100%] h-[3px] bg-bluegray_100" />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:px-[0] w-[100%]">
                  <div className="flex flex-col sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                    <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[17px] md:ml-[22px] ml-[33px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    Nice Store
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[44px] md:ml-[57px] ml-[84px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    IN459
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[47px] md:ml-[61px] ml-[90px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 5,000
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[51px] md:ml-[66px] ml-[97px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 4,000
                  </Text>
                  <Text
                    className="font-semibold ml-[105px] sm:ml-[55px] md:ml-[72px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 1,000
                  </Text>
                </div>
              </List>
              <Stack className="h-[3px] sm:ml-[19px] md:ml-[24px] ml-[36px] sm:mt-[3px] md:mt-[4px] mt-[6px] relative sm:w-[100%] w-[90%]">
                <Line className="absolute bg-bluegray_100 h-[3px] w-[100%]" />
                <Line className="absolute bg-bluegray_100 h-[3px] w-[100%]" />
              </Stack>
              <List
                className="gap-[11px] sm:gap-[5px] md:gap-[7px] grid min-h-[auto] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[100%] w-[88%]"
                orientation="vertical"
              >
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <div className="flex flex-col sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                    <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                  </div>
                  <Text
                    className="font-semibold md:ml-[10px] ml-[15px] sm:ml-[7px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    Jamshed Store
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[35px] md:ml-[45px] ml-[66px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    IN451
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[50px] md:ml-[64px] ml-[94px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 3,650
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[51px] md:ml-[66px] ml-[97px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 2,000
                  </Text>
                  <Text
                    className="font-semibold ml-[107px] sm:ml-[56px] md:ml-[73px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 1,650
                  </Text>
                </div>
                <Line className="self-center w-[100%] h-[3px] bg-bluegray_100" />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <div className="flex flex-col sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                    <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[17px] md:ml-[22px] ml-[33px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    Nice Store
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[44px] md:ml-[57px] ml-[84px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    IN460
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[47px] md:ml-[61px] ml-[90px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 3,000
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[51px] md:ml-[66px] ml-[97px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 3,000
                  </Text>
                  <Text
                    className="font-semibold ml-[106px] sm:ml-[56px] md:ml-[72px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 0
                  </Text>
                </div>
              </List>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                <div className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                  <div className="flex flex-col justify-start sm:pr-[4px] md:pr-[5px] pr-[8px] sm:py-[4px] md:py-[5px] py-[8px] w-[100%]">
                    <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                  </div>
                  <div className="flex flex-col justify-start sm:mt-[4px] md:mt-[6px] mt-[9px] sm:pr-[4px] md:pr-[5px] pr-[8px] sm:py-[4px] md:py-[5px] py-[8px] w-[100%]">
                    <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                  </div>
                </div>
                <List
                  className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid min-h-[auto] ml-[2px] pt-[11px] sm:pt-[5px] md:pt-[7px] px-[11px] sm:px-[5px] md:px-[7px] sm:w-[100%] w-[96%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Text
                      className="font-semibold mt-[1px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Jamshed Store
                    </Text>
                    <Text
                      className="font-semibold mb-[1px] sm:ml-[35px] md:ml-[45px] ml-[66px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      IN478
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[48px] md:ml-[62px] ml-[91px] mt-[1px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 10,000
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[49px] md:ml-[63px] ml-[92px] mt-[1px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 7,000
                    </Text>
                    <Text
                      className="font-semibold mb-[1px] ml-[107px] sm:ml-[56px] md:ml-[73px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                  </div>
                  <Line className="self-center w-[100%] h-[3px] bg-bluegray_100" />
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Jamal Store
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[41px] md:ml-[52px] ml-[77px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      IN480
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[47px] md:ml-[61px] ml-[90px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 20,000
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[47px] md:ml-[61px] ml-[89px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 15,000
                    </Text>
                    <Text
                      className="font-semibold ml-[101px] sm:ml-[53px] md:ml-[69px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 5,000
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                <div className="flex flex-col sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                  <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                </div>
                <Text
                  className="font-semibold sm:ml-[13px] md:ml-[17px] ml-[25px] text-black_900 w-[auto]"
                  variant="body5"
                >
                  Kamal Store
                </Text>
                <Text
                  className="font-semibold sm:ml-[40px] md:ml-[52px] ml-[76px] text-black_900 w-[auto]"
                  variant="body5"
                >
                  IN479
                </Text>
                <Text
                  className="font-semibold sm:ml-[49px] md:ml-[63px] ml-[92px] text-black_900 w-[auto]"
                  variant="body5"
                >
                  PKR 3,000
                </Text>
                <Text
                  className="font-semibold sm:ml-[51px] md:ml-[66px] ml-[97px] text-black_900 w-[auto]"
                  variant="body5"
                >
                  PKR 3,000
                </Text>
                <Text
                  className="font-semibold ml-[106px] sm:ml-[56px] md:ml-[72px] text-black_900 w-[auto]"
                  variant="body5"
                >
                  PKR 0
                </Text>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center justify-end ml-[auto] sm:mt-[27px] md:mt-[35px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[49%] text-[16px] text-center text-white_A700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  onClick={handleNavigate17}
                  variant="OutlineBlack9003f_3"
                >
                  Settle Invoice
                </Button>
                <Button
                  className="cursor-pointer font-bold min-w-[49%] md:ml-[10px] ml-[15px] sm:ml-[7px] text-[16px] text-center text-white_A700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  variant="OutlineBlack9003f_3"
                >
                  Export to DM App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecoveriesLoadFormPage;
