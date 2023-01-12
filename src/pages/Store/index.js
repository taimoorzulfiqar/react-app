import React from "react";

import { Stack, Img, Line, Text, List } from "components";
import { useNavigate } from "react-router-dom";

const StorePage = () => {
  const navigate = useNavigate();

  function handleNavigate40() {
    navigate("/recoveries");
  }
  function handleNavigate41() {
    navigate("/signin");
  }
  function handleNavigate42() {
    navigate("/user");
  }
  function handleNavigate47() {
    navigate("/storeshort");
  }
  function handleNavigate48() {
    navigate("/signin");
  }
  function handleNavigate49() {
    navigate("/user");
  }
  function handleNavigate50() {
    navigate("/maindashboard");
  }
  function handleNavigate51() {
    navigate("/deliverymen");
  }
  function handleNavigate52() {
    navigate("/stores");
  }
  function handleNavigate53() {
    navigate("/mainloadform");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-[auto] sm:pr-[15px] md:pr-[26px] pr-[39px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1401px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[815px] relative w-[22%]">
            <Stack className="absolute h-[815px] right-[1%] sm:w-[100%] w-[99%]">
              <div
                className="common-pointer absolute bg-bluegray_100 sm:h-[18px] md:h-[23px] h-[32px] right-[8%] top-[5%] w-[13%]"
                onClick={handleNavigate47}
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
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius8 sm:w-[100%] w-[98%]">
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
                      onClick={handleNavigate49}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[18px] md:mb-[24px] mb-[35px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate48}
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
                    onClick={handleNavigate50}
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
                  <div
                    className="common-pointer bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius8 sm:w-[100%] w-[99%]"
                    onClick={handleNavigate51}
                  >
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
                    onClick={handleNavigate52}
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
                    onClick={handleNavigate53}
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
                    onClick={handleNavigate40}
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
          <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
            <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[15px] ml-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                  <Img
                    src="images/img_laptop.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="laptop"
                  />
                  <Text
                    className="flex-grow font-semibold md:ml-[12px] ml-[18px] sm:ml-[9px] text-black_900"
                    as="h5"
                    variant="h5"
                  >
                    {"Stores > Jamal Store"}
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-rubik items-center justify-between sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                    <div className="bg-white_A700 flex flex-col justify-end sm:pt-[15px] md:pt-[16px] pt-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
                      <div className="flex flex-col justify-start md:ml-[16px] ml-[24px] md:mr-[45px] mr-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                        <Text
                          className="bg-teal_300_26 border border-solid border-teal_300 flex items-center sm:p-[15px] md:px-[14px] px-[21px] rounded-radius50 text-teal_300 tracking-ls1 w-[72px]"
                          as="h6"
                          variant="h6"
                        >
                          JS
                        </Text>
                        <div className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                          <Text
                            className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Jamal Store
                          </Text>
                        </div>
                      </div>
                      <div className="bg-teal_300 border border-solid border-teal_300 h-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] rounded-bl-[12px] rounded-br-[12px] rounded-tl-[0] rounded-tr-[0] w-[100%]"></div>
                    </div>
                  </div>
                  <div className="bg-blue_300 flex flex-col mb-[12px] sm:mb-[6px] md:mb-[8px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 sm:w-[100%] w-[31%]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="arrowdown"
                    />
                    <div className="flex flex-col justify-start mb-[4px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                      <Text
                        className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        29k
                      </Text>
                      <Text
                        className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body3"
                      >
                        Total Sales
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue_400 flex flex-col mb-[12px] sm:mb-[6px] md:mb-[8px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 sm:w-[100%] w-[31%]">
                    <Img
                      src="images/img_videocamera.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="videocamera"
                    />
                    <div className="flex flex-col justify-start mb-[4px] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <Text
                        className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        PKR -17, 000
                      </Text>
                      <Text
                        className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body3"
                      >
                        Store Balance
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col justify-end sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] md:pt-[10px] pt-[15px] sm:pt-[7px] md:px-[10px] px-[15px] sm:px-[7px] rounded-radius12 sm:w-[100%] w-[96%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[6px] ml-[9px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[99%]">
                    <Text
                      className="my-[2px] text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Total Sales
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[48px] ml-[70px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Text
                        className="flex-grow font-normal not-italic text-gray_601 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                        variant="body5"
                      >
                        2021
                      </Text>
                      <Img
                        src="images/img_arrowdown_16X16.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="arrowdown One"
                      />
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[108px] ml-[157px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] py-[3px] sm:w-[100%] w-[20%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <div className="bg-gray_902 sm:h-[5px] md:h-[6px] h-[8px] my-[2px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                        <Text
                          className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-gray_601 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Credit
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] md:ml-[13px] ml-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                        <div className="bg-teal_300 sm:h-[5px] md:h-[6px] h-[8px] my-[2px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                        <Text
                          className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-gray_601 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Debit
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] mr-[auto] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                    <Img
                      src="images/img_arrowdown_24X24.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="arrowdown Two"
                    />
                    <Text
                      className="flex-grow font-normal ml-[2px] mt-[4px] not-italic text-pink_400 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      variant="body3"
                    >
                      <span className="text-pink_400 text-[16px] font-rubik font-medium">
                        9%
                      </span>
                      <span className="text-pink_400 text-[16px] font-rubik">
                        {" "}
                      </span>
                      <span className="text-gray_601 text-[16px] font-rubik">
                        from last year
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[6px] ml-[9px] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[99%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between py-[3px] w-[100%]">
                      <div className="flex flex-col items-end mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[4%]">
                        <Text
                          className="font-normal not-italic text-gray_400 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          10k
                        </Text>
                        <div className="flex flex-col justify-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                          <Text
                            className="font-normal not-italic text-gray_400 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body5"
                          >
                            8k
                          </Text>
                          <Text
                            className="font-normal sm:mt-[22px] md:mt-[29px] mt-[43px] not-italic text-gray_400 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body5"
                          >
                            6k
                          </Text>
                          <Text
                            className="font-normal sm:mt-[22px] md:mt-[28px] mt-[42px] not-italic text-gray_400 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body5"
                          >
                            4k
                          </Text>
                          <Text
                            className="font-normal ml-[1px] sm:mt-[22px] md:mt-[29px] mt-[43px] not-italic text-gray_400 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body5"
                          >
                            2k
                          </Text>
                          <Text
                            className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mt-[22px] md:mt-[29px] mt-[43px] not-italic text-gray_400 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body5"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                      <Stack
                        className="bg-cover bg-no-repeat h-[286px] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] relative sm:w-[100%] w-[95%]"
                        style={{
                          backgroundImage: "url('images/img_group48.svg')",
                        }}
                      >
                        <Img
                          src="images/img_linechart_279X580.svg"
                          className="absolute h-[279px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[92%]"
                          alt="lineChart"
                        />
                      </Stack>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Text
                        className="mb-[1px] not-italic text-gray_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        variant="body7"
                      >
                        FEB
                      </Text>
                      <Text
                        className="mb-[1px] sm:ml-[19px] md:ml-[24px] ml-[36px] not-italic text-gray_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        variant="body7"
                      >
                        MAR
                      </Text>
                      <Text
                        className="mb-[1px] sm:ml-[18px] md:ml-[24px] ml-[35px] not-italic text-gray_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        variant="body7"
                      >
                        APR
                      </Text>
                      <Text
                        className="mb-[1px] sm:ml-[18px] md:ml-[24px] ml-[35px] not-italic text-gray_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        variant="body7"
                      >
                        MAY
                      </Text>
                      <Text
                        className="sm:ml-[18px] md:ml-[24px] ml-[35px] mt-[1px] not-italic text-gray_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        variant="body7"
                      >
                        JUN
                      </Text>
                      <Text
                        className="sm:ml-[19px] md:ml-[24px] ml-[36px] mt-[1px] not-italic text-gray_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        variant="body7"
                      >
                        JUL
                      </Text>
                      <Text
                        className="mb-[1px] sm:ml-[19px] md:ml-[24px] ml-[36px] not-italic text-gray_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        variant="body7"
                      >
                        AUG
                      </Text>
                      <Text
                        className="mb-[1px] sm:ml-[19px] md:ml-[24px] ml-[36px] not-italic text-gray_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        variant="body7"
                      >
                        SEP
                      </Text>
                      <Text
                        className="mb-[1px] sm:ml-[19px] md:ml-[25px] ml-[37px] not-italic text-gray_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        variant="body7"
                      >
                        OCT
                      </Text>
                      <Text
                        className="mb-[1px] sm:ml-[18px] md:ml-[24px] ml-[35px] not-italic text-gray_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        variant="body7"
                      >
                        NOV
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col sm:mx-[0] md:my-[12px] my-[18px] sm:my-[9px] sm:pl-[15px] md:pl-[16px] pl-[24px] sm:pt-[15px] md:pt-[16px] pt-[24px] rounded-radius12 sm:w-[100%] w-[27%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end mt-[4px] sm:px-[0] w-[100%]">
                  <Text
                    className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Latest Sales
                  </Text>
                  <Text
                    className="font-normal ml-[116px] sm:ml-[61px] md:ml-[79px] mt-[2px] not-italic text-gray_601 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    see all
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:px-[0] w-[100%]">
                  <Stack className="h-[179px] relative w-[100%]">
                    <div className="absolute backdrop-opacity-[0.5] bg-gray_400_99 blur-[50.00px] bottom-[0] sm:h-[21px] md:h-[27px] h-[39px] right-[0] rounded-radius8 sm:w-[100%] w-[81%]"></div>
                    <div className="absolute bg-gradient2  flex flex-col p-[1px] rounded-radius8 w-[100%] ">
                      <div className="absolute bg-white_A700 border-solid flex flex-col justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius8 top-[0]">
                        <Img
                          src="images/img_location_24X24.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="location"
                        />
                        <div className="flex flex-col justify-start mb-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[33%]">
                          <div className="flex flex-col justify-start sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[93%]">
                            <Text
                              className="font-medium text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Milkpak
                            </Text>
                            <div className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                              <Text
                                className="font-normal not-italic text-gray_601 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body5"
                              >
                                Nestle
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="font-medium mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_601 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body3"
                          >
                            PKR 128
                          </Text>
                        </div>
                      </div>
                    </div>
                  </Stack>
                  <List
                    className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid min-h-[auto] sm:mt-[3px] md:mt-[4px] mt-[6px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="bg-gradient2  flex flex-col p-[1px] rounded-radius8 w-[100%] ">
                      <div className="bg-white_A700 border-solid flex flex-col justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius8">
                        <Img
                          src="images/img_location_24X24.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="location One"
                        />
                        <div className="flex flex-col justify-start mb-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[35%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                            <Text
                              className="font-medium text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Omore
                            </Text>
                            <div className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                              <Text
                                className="font-medium text-gray_601 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body5"
                              >
                                Olpers
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="font-medium mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_601 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body3"
                          >
                            PKR 200
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-col p-[1px] rounded-radius8 w-[100%] ">
                      <div className="bg-white_A700 border-solid flex flex-col justify-end md:p-[15px] sm:p-[15px] p-[23px] rounded-radius8">
                        <Img
                          src="images/img_location_24X24.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[1px] mt-[1px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="location Two"
                        />
                        <div className="flex flex-col justify-start ml-[1px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[34%]">
                          <div className="flex flex-col justify-start sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                            <Text
                              className="font-medium text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Nido
                            </Text>
                            <div className="flex flex-col items-center justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                              <Text
                                className="font-medium text-gray_601 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body5"
                              >
                                Nestle
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="font-medium mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_601 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body3"
                          >
                            PKR 200
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorePage;
