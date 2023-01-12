import React from "react";

import { Stack, Img, Line, Text, Grid, List } from "components";
import { useNavigate } from "react-router-dom";

const RecoveriesPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/recoveriesloadform");
  }
  function handleNavigate1() {
    navigate("/deliverymen");
  }
  function handleNavigate2() {
    navigate("/signin");
  }
  function handleNavigate3() {
    navigate("/user");
  }
  function handleNavigate4() {
    navigate("/maindashboard");
  }
  function handleNavigate5() {
    navigate("/stores");
  }
  function handleNavigate6() {
    navigate("/mainloadform");
  }
  function handleNavigate7() {
    navigate("/signin");
  }
  function handleNavigate8() {
    navigate("/user");
  }
  function handleNavigate9() {
    navigate("/recoveriesstores");
  }
  function handleNavigate18() {
    navigate("/recoveriesshort");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] sm:pr-[15px] md:pr-[44px] pr-[65px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1375px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[815px] relative w-[23%]">
            <Stack className="absolute h-[815px] right-[1%] sm:w-[100%] w-[99%]">
              <div
                className="common-pointer absolute bg-bluegray_100 sm:h-[23px] md:h-[29px] h-[42px] right-[6%] top-[5%] sm:w-[22px] md:w-[28px] w-[42px]"
                onClick={handleNavigate18}
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
                      onClick={handleNavigate1}
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
                      onClick={handleNavigate8}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[18px] md:mb-[24px] mb-[35px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate7}
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
                    onClick={handleNavigate4}
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
                    onClick={handleNavigate5}
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
                    onClick={handleNavigate6}
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
                  <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[99%]">
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[11px] md:ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
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
                    Recoveries
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-col font-rubik justify-start sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                <Text
                  className="font-bold font-roboto text-gray_905 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Stores
                </Text>
                <Text
                  className="font-lato font-semibold sm:ml-[425px] md:ml-[549px] ml-[799px] text-black_900 tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body3"
                >
                  1-8 of 16
                </Text>
                <Img
                  src="images/img_arrowleft_black_900.svg"
                  className="max-w-[100%] sm:ml-[17px] md:ml-[22px] ml-[33px] w-[1%]"
                  alt="arrowleft"
                />
                <Img
                  src="images/img_arrowright_black_900.svg"
                  className="max-w-[100%] sm:ml-[15px] md:ml-[20px] ml-[30px] w-[1%]"
                  alt="arrowright"
                />
              </div>
              <Grid className="gap-[12px] sm:gap-[6px] md:gap-[8px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[93%]">
                <div
                  className="common-pointer bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]"
                  onClick={handleNavigate9}
                >
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jamal Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 17, 000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Kamal Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 4000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Nice Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 2500
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jamal Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jamshed Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 7000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Afzal Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Super Store
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jamal Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
              </Grid>
            </div>
            <div className="flex flex-col font-dmsans justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                <Text
                  className="font-bold font-roboto text-gray_905 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Load Forms
                </Text>
                <Text
                  className="font-lato font-semibold sm:ml-[396px] md:ml-[512px] ml-[744px] text-black_900 tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body3"
                >
                  1-8 of 16
                </Text>
                <Img
                  src="images/img_arrowleft_black_900.svg"
                  className="max-w-[100%] sm:ml-[17px] md:ml-[22px] ml-[33px] w-[1%]"
                  alt="arrowleft One"
                />
                <Img
                  src="images/img_arrowright_black_900.svg"
                  className="max-w-[100%] sm:ml-[15px] md:ml-[20px] ml-[30px] w-[1%]"
                  alt="arrowright One"
                />
              </div>
              <List
                className="md:gap-[12px] gap-[18px] sm:gap-[9px] grid min-h-[auto] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[93%]"
                orientation="vertical"
              >
                <div
                  className="common-pointer bg-orange_200 flex flex-col items-center justify-end md:p-[12px] sm:p-[15px] p-[18px] rounded-radius12 w-[100%]"
                  onClick={handleNavigate}
                >
                  <div className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:px-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-bold mb-[3px] text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Load Form 0001
                      </Text>
                      <Text
                        className="font-bold sm:mt-[4px] md:mt-[5px] mt-[8px] text-black_900 w-[auto]"
                        variant="body1"
                      >
                        PKR 14,650
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                      <div className="flex flex-col items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                        <Text
                          className="font-normal not-italic text-gray_601 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Date Settled 12/12/22
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-red_A700 w-[auto]"
                        variant="body3"
                      >
                        Amount Credited
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-orange_200 flex flex-col items-center justify-end md:p-[12px] sm:p-[15px] p-[18px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:px-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Load Form 0001
                      </Text>
                      <Text
                        className="font-bold sm:mt-[2px] md:mt-[3px] mt-[5px] text-black_900 w-[auto]"
                        variant="body1"
                      >
                        PKR 3,000
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                      <div className="flex flex-col items-center justify-start mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                        <Text
                          className="font-normal not-italic text-gray_601 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Date Settled 12/12/22
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-red_A700 w-[auto]"
                        variant="body3"
                      >
                        Amount Credited
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecoveriesPage;
