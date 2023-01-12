import React from "react";

import { Stack, Img, Line, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const LoadFormOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate281() {
    navigate("/user");
  }
  function handleNavigate282() {
    navigate("/mainloadform");
  }
  function handleNavigate287() {
    navigate("/user");
  }
  function handleNavigate288() {
    navigate("/maindashboard");
  }
  function handleNavigate289() {
    navigate("/stores");
  }
  function handleNavigate290() {
    navigate("/mainloadform");
  }
  function handleNavigate291() {
    navigate("/recoveries");
  }
  function handleNavigate292() {
    navigate("/signin");
  }
  function handleNavigate297() {
    navigate("/loadform1short");
  }
  function handleNavigate298() {
    navigate("/deliverymen");
  }
  function handleNavigate299() {
    navigate("/signin");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] sm:pr-[15px] md:pr-[44px] pr-[65px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1375px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[815px] relative w-[23%]">
            <Stack className="absolute h-[815px] right-[1%] sm:w-[100%] w-[99%]">
              <div
                className="common-pointer absolute bg-bluegray_100 sm:h-[23px] md:h-[30px] h-[43px] right-[6%] top-[5%] w-[15%]"
                onClick={handleNavigate297}
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
                      onClick={handleNavigate298}
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
                      onClick={handleNavigate287}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[18px] md:mb-[24px] mb-[35px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate299}
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
                    onClick={handleNavigate288}
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
                    onClick={handleNavigate289}
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
                    onClick={handleNavigate290}
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
                    onClick={handleNavigate291}
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
          <div className="flex flex-col justify-start md:ml-[17px] ml-[26px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[13px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                  <Img
                    src="images/img_menu_18X18.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="menu Two"
                  />
                  <Text
                    className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-black_900"
                    as="h5"
                    variant="h5"
                  >
                    {"Load Form > Load Form 0001"}
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[30px] ml-[44px] sm:mt-[24px] md:mt-[31px] mt-[46px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
              <Button
                className="common-pointer flex sm:h-[25px] md:h-[32px] h-[46px] items-center justify-center rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                onClick={handleNavigate282}
                size="lgIcn"
                variant="icbOutlineGray100"
              >
                <Img
                  src="images/img_arrowleft_gray_903.svg"
                  className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                  alt="arrowleft"
                />
              </Button>
              <Stack className="bg-deep_orange_50 border-2 border-black_900 border-solid h-[514px] sm:ml-[17px] md:ml-[22px] ml-[32px] sm:mt-[11px] md:mt-[14px] mt-[21px] p-[1px] relative sm:w-[100%] w-[91%]">
                <Stack className="absolute h-[512px] inset-[0] justify-center m-[auto] w-[100%]">
                  <Line className="absolute bg-black_900 sm:h-[273px] md:h-[353px] h-[512px] left-[17%] w-[2px]" />
                  <div className="absolute bottom-[9%] flex flex-col items-center justify-start top-[10%] w-[100%]">
                    <Line className="bg-black_900 h-[2px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[27px] md:mt-[35px] mt-[51px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[26px] md:mt-[34px] mt-[50px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[26px] md:mt-[33px] mt-[49px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[27px] md:mt-[35px] mt-[51px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[27px] md:mt-[35px] mt-[51px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[26px] md:mt-[33px] mt-[49px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[25px] md:mt-[33px] mt-[48px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[25px] md:mt-[33px] mt-[48px] rotate-[-180deg] w-[100%]" />
                  </div>
                </Stack>
                <Line className="absolute bg-black_900 sm:h-[273px] md:h-[352px] h-[511px] inset-y-[0] left-[36%] my-[auto] w-[2px]" />
                <Line className="absolute bg-black_900 sm:h-[272px] md:h-[351px] h-[510px] inset-y-[0] my-[auto] right-[44%] w-[2px]" />
                <Line className="absolute bg-black_900 sm:h-[273px] md:h-[352px] h-[511px] inset-y-[0] my-[auto] right-[23%] w-[2px]" />
                <List
                  className="absolute sm:gap-[20px] md:gap-[26px] gap-[38px] grid inset-y-[0] left-[2%] min-h-[auto] my-[auto] w-[34%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body3"
                      >
                        Store Name
                      </Text>
                      <Text
                        className="font-semibold sm:ml-[16px] md:ml-[21px] ml-[31px] mt-[1px] text-black_900 w-[auto]"
                        variant="body3"
                      >
                        Invoice Number
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
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
                        IN456
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
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
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
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
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[12px] md:ml-[8px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
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
                    </div>
                  </div>
                  <div className="flex flex-col sm:h-[116px] md:h-[149px] h-[216px] items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        Jamshed Store
                      </Text>
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        IN451
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
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
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[16px] md:mt-[21px] mt-[31px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-semibold mt-[1px] text-black_900 w-[auto]"
                        variant="body5"
                      >
                        Jamshed Store
                      </Text>
                      <Text
                        className="font-semibold mb-[1px] text-black_900 w-[auto]"
                        variant="body5"
                      >
                        IN478
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        Jamal Store
                      </Text>
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        IN480
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        Kamal Store
                      </Text>
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        IN479
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[38%] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[17%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    variant="body3"
                  >
                    Invoice Amount
                  </Text>
                  <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 4,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[19px] md:mt-[24px] mt-[36px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 6,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 5,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[20px] md:mt-[26px] mt-[38px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,650
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[23px] mt-[34px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[32px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 10,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[32px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 20,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[33px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start sm:mx-[0] my-[auto] sm:px-[0] right-[24%] sm:w-[100%] w-[19%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    variant="body3"
                  >
                    Amount Collected
                  </Text>
                  <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 0
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[19px] md:mt-[24px] mt-[36px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 5,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 4,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[20px] md:mt-[26px] mt-[38px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 2,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[23px] mt-[34px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[32px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 7,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[32px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 15,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[33px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start sm:mx-[0] my-[auto] sm:px-[0] right-[2%] sm:w-[100%] w-[18%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    variant="body3"
                  >
                    Amount Credited
                  </Text>
                  <div className="flex flex-col justify-start md:ml-[19px] ml-[29px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 1,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[19px] md:mt-[24px] mt-[36px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 1,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 1,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[20px] md:mt-[26px] mt-[38px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 1,650
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[23px] mt-[34px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 0
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[16px] md:mt-[21px] mt-[31px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[33px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 5,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[33px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 0
                    </Text>
                  </div>
                </div>
              </Stack>
            </div>
            <div className="flex flex-col items-center justify-start ml-[123px] md:ml-[84px] sm:mt-[20px] md:mt-[26px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Text
                  className="font-semibold mb-[1px] text-black_900 w-[auto]"
                  variant="body3"
                >
                  Total Invoice Amount
                </Text>
                <Text
                  className="font-semibold text-black_900 w-[auto]"
                  variant="body3"
                >
                  Deliveryman Expense
                </Text>
                <Text
                  className="font-semibold mb-[1px] text-black_900 w-[auto]"
                  variant="body3"
                >
                  Amount Collected
                </Text>
              </div>
              <Stack className="h-[24px] sm:mt-[3px] md:mt-[4px] mt-[6px] relative w-[100%]">
                <Line className="absolute bg-black_900 h-[2px] top-[4%] w-[100%]" />
                <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between left-[8%] sm:mx-[0] sm:px-[0] right-[7%] sm:w-[100%] w-[85%]">
                  <Text
                    className="font-semibold mt-[2px] text-black_900 w-[auto]"
                    variant="body3"
                  >
                    PKR 60,000
                  </Text>
                  <Line className="bg-black_900 sm:h-[13px] md:h-[17px] h-[24px] w-[2px]" />
                  <Text
                    className="font-semibold mt-[2px] text-black_900 w-[auto]"
                    variant="body3"
                  >
                    PKR 5,000
                  </Text>
                  <Line className="bg-black_900 sm:h-[13px] md:h-[17px] h-[24px] w-[2px]" />
                  <Text
                    className="font-semibold mt-[2px] text-black_900 w-[auto]"
                    variant="body3"
                  >
                    PKR 52,000
                  </Text>
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadFormOnePage;
