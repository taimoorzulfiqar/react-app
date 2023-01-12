import React from "react";

import { Stack, Img, Line, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const RecoveriesStoresPage = () => {
  const navigate = useNavigate();

  function handleNavigate101() {
    navigate("/recoveries");
  }
  function handleNavigate102() {
    navigate("/signin");
  }
  function handleNavigate103() {
    navigate("/user");
  }
  function handleNavigate104() {
    navigate("/recoveries");
  }
  function handleNavigate105() {
    navigate("/mainsettleinvoice");
  }
  function handleNavigate107() {
    navigate("/deliverymen");
  }
  function handleNavigate108() {
    navigate("/signin");
  }
  function handleNavigate109() {
    navigate("/user");
  }
  function handleNavigate110() {
    navigate("/maindashboard");
  }
  function handleNavigate111() {
    navigate("/stores");
  }
  function handleNavigate112() {
    navigate("/mainloadform");
  }
  function handleNavigate118() {
    navigate("/recoveriesstoresshort");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] sm:pr-[15px] md:pr-[44px] pr-[65px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1375px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[815px] relative w-[23%]">
            <Stack className="absolute h-[815px] right-[1%] sm:w-[100%] w-[99%]">
              <div
                className="common-pointer absolute bg-bluegray_100 sm:h-[23px] md:h-[29px] h-[42px] right-[6%] top-[5%] sm:w-[22px] md:w-[28px] w-[42px]"
                onClick={handleNavigate118}
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
                      onClick={handleNavigate107}
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
                      onClick={handleNavigate109}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[18px] md:mb-[24px] mb-[35px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate108}
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
                    onClick={handleNavigate110}
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
                    onClick={handleNavigate111}
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
                    onClick={handleNavigate112}
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
                    onClick={handleNavigate101}
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[11px] md:ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
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
                    {"Recoveries > Stores [Jamal Store]"}
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[24px] md:mt-[31px] mt-[46px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
              <Button
                className="common-pointer flex sm:h-[25px] md:h-[32px] h-[46px] items-center justify-center rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                onClick={handleNavigate104}
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
                className="font-roboto font-semibold sm:ml-[29px] md:ml-[37px] ml-[55px] text-gray_905 w-[auto]"
                as="h5"
                variant="h5"
              >
                {" "}
                Jamal Store
              </Text>
              <Text
                className="font-bold font-urbanist sm:ml-[234px] md:ml-[303px] ml-[441px] text-red_A701 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body1"
              >
                Total Recovery: PKR 17,000
              </Text>
            </div>
            <div className="flex flex-col font-urbanist items-end justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
              <List
                className="gap-[11px] sm:gap-[5px] md:gap-[7px] grid min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <div className="bg-white_A700 flex flex-col items-center justify-start my-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius24 shadow-bs5 w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                      <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[12px] md:ml-[8px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[63%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                          <Text
                            className="text-gray_901 w-[auto]"
                            variant="body2"
                          >
                            IN456
                          </Text>
                        </div>
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Karachi, Pakistan
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start md:ml-[59px] ml-[87px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Text
                        className="text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        PKR 3,000
                      </Text>
                      <Text
                        className="mt-[2px] text-red_A702 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Remaining Recovery
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start my-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius24 shadow-bs5 w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                      <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[12px] md:ml-[8px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[63%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                          <Text
                            className="text-gray_901 w-[auto]"
                            variant="body2"
                          >
                            IN430
                          </Text>
                        </div>
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Karachi, Pakistan
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start md:ml-[60px] ml-[88px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Text
                        className="text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        PKR 2,000
                      </Text>
                      <Text
                        className="mt-[2px] text-red_A702 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Remaining Recovery
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start my-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius24 shadow-bs5 w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                      <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[12px] md:ml-[8px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[63%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                          <Text
                            className="text-gray_901 w-[auto]"
                            variant="body2"
                          >
                            IN268
                          </Text>
                        </div>
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Karachi, Pakistan
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start md:ml-[60px] ml-[88px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Text
                        className="text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        PKR 5,000
                      </Text>
                      <Text
                        className="mt-[2px] text-red_A702 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Remaining Recovery
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start my-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius24 shadow-bs5 w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                      <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[12px] md:ml-[8px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[63%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                          <Text
                            className="text-gray_901 w-[auto]"
                            variant="body2"
                          >
                            IN275
                          </Text>
                        </div>
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Karachi, Pakistan
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start md:ml-[59px] ml-[87px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Text
                        className="text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        PKR 3,000
                      </Text>
                      <Text
                        className="mt-[2px] text-red_A702 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Remaining Recovery
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start my-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius24 shadow-bs5 w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                      <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[12px] md:ml-[8px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[63%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                          <Text
                            className="text-gray_901 w-[auto]"
                            variant="body2"
                          >
                            IN350
                          </Text>
                        </div>
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Karachi, Pakistan
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start md:ml-[60px] ml-[88px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Text
                        className="text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        PKR 4,000
                      </Text>
                      <Text
                        className="mt-[2px] text-red_A702 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Remaining Recovery
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[20px] md:mt-[26px] mt-[39px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[49%] text-[16px] text-center text-white_A700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  onClick={handleNavigate105}
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

export default RecoveriesStoresPage;
