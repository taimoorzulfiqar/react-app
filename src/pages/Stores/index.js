import React from "react";

import { Stack, Img, Line, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const StoresPage = () => {
  const navigate = useNavigate();

  function handleNavigate161() {
    navigate("/recoveries");
  }
  function handleNavigate162() {
    navigate("/signin");
  }
  function handleNavigate163() {
    navigate("/user");
  }
  function handleNavigate167() {
    navigate("/storesshort");
  }
  function handleNavigate168() {
    navigate("/signin");
  }
  function handleNavigate169() {
    navigate("/user");
  }
  function handleNavigate170() {
    navigate("/store");
  }
  function handleNavigate171() {
    navigate("/maindashboard");
  }
  function handleNavigate172() {
    navigate("/deliverymen");
  }
  function handleNavigate173() {
    navigate("/mainloadform");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-[auto] sm:pr-[15px] md:pr-[26px] pr-[39px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1401px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[815px] relative w-[22%]">
            <Stack className="absolute h-[815px] right-[1%] sm:w-[100%] w-[99%]">
              <div
                className="common-pointer absolute bg-bluegray_100 sm:h-[23px] md:h-[29px] h-[42px] right-[6%] top-[5%] sm:w-[22px] md:w-[28px] w-[42px]"
                onClick={handleNavigate167}
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
                      onClick={handleNavigate169}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[18px] md:mb-[24px] mb-[35px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate168}
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
                    onClick={handleNavigate171}
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
                    onClick={handleNavigate172}
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
                  <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[99%]">
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
                    onClick={handleNavigate173}
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
                    onClick={handleNavigate161}
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
          <div className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
            <div className="flex flex-col font-poppins items-center justify-start md:mr-[17px] mr-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[13px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Img
                    src="images/img_laptop.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="laptop"
                  />
                  <Text
                    className="flex-grow font-semibold ml-[13px] sm:ml-[6px] md:ml-[8px] text-black_900"
                    as="h5"
                    variant="h5"
                  >
                    Stores
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold font-urbanist min-w-[20%] sm:ml-[457px] md:ml-[590px] ml-[858px] sm:mt-[27px] md:mt-[35px] mt-[51px] text-[16px] text-center text-white_A700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
              variant="OutlineBlack9003f"
            >
              Add New Store
            </Button>
            <List
              className="font-urbanist sm:gap-[12px] md:gap-[16px] gap-[24px] grid min-h-[auto] ml-[11px] sm:ml-[5px] md:ml-[7px] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:w-[100%] w-[83%]"
              orientation="vertical"
            >
              <div
                className="common-pointer bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] rounded-radius24 shadow-bs5 w-[100%]"
                onClick={handleNavigate170}
              >
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <div className="bg-black_900_1e flex flex-col sm:h-[28px] md:h-[36px] h-[52px] items-center justify-start sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 sm:w-[27px] md:w-[35px] w-[52px]">
                    <Button
                      className="flex sm:h-[20px] md:h-[25px] h-[36px] items-center justify-center rounded-radius50 sm:w-[19px] md:w-[24px] w-[36px]"
                      size="mdIcn"
                      variant="icbGradientBlack901Bluegray901"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="flex items-center justify-center"
                        alt="location"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                      <Text className="text-gray_901 w-[auto]" variant="body2">
                        Jamal Store
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
                <Img
                  src="images/img_ticket.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="ticket"
                />
              </div>
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] rounded-radius24 shadow-bs5 w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <div className="bg-black_900_1e flex flex-col sm:h-[28px] md:h-[36px] h-[52px] items-center justify-start sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 sm:w-[27px] md:w-[35px] w-[52px]">
                    <Button
                      className="flex sm:h-[20px] md:h-[25px] h-[36px] items-center justify-center rounded-radius50 sm:w-[19px] md:w-[24px] w-[36px]"
                      size="mdIcn"
                      variant="icbGradientBlack901Bluegray901"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="flex items-center justify-center"
                        alt="location One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                      <Text className="text-gray_901 w-[auto]" variant="body2">
                        Kamal Store
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
                <Img
                  src="images/img_ticket.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="ticket One"
                />
              </div>
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] rounded-radius24 shadow-bs5 w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <div className="bg-black_900_1e flex flex-col sm:h-[28px] md:h-[36px] h-[52px] items-center justify-start sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 sm:w-[27px] md:w-[35px] w-[52px]">
                    <Button
                      className="flex sm:h-[20px] md:h-[25px] h-[36px] items-center justify-center rounded-radius50 sm:w-[19px] md:w-[24px] w-[36px]"
                      size="mdIcn"
                      variant="icbGradientBlack901Bluegray901"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="flex items-center justify-center"
                        alt="location Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="flex flex-col items-center justify-start ml-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                      <Text className="text-gray_901 w-[auto]" variant="body2">
                        {" "}
                        Super Store
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
                <Img
                  src="images/img_ticket.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="ticket Two"
                />
              </div>
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] rounded-radius24 shadow-bs5 w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <div className="bg-black_900_1e flex flex-col sm:h-[28px] md:h-[36px] h-[52px] items-center justify-start sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 sm:w-[27px] md:w-[35px] w-[52px]">
                    <Button
                      className="flex sm:h-[20px] md:h-[25px] h-[36px] items-center justify-center rounded-radius50 sm:w-[19px] md:w-[24px] w-[36px]"
                      size="mdIcn"
                      variant="icbGradientBlack901Bluegray901"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="flex items-center justify-center"
                        alt="location Three"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                      <Text className="text-gray_901 w-[auto]" variant="body2">
                        Town Square
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
                <Img
                  src="images/img_ticket.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="ticket Three"
                />
              </div>
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] rounded-radius24 shadow-bs5 w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <div className="bg-black_900_1e flex flex-col sm:h-[28px] md:h-[36px] h-[52px] items-center justify-start sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 sm:w-[27px] md:w-[35px] w-[52px]">
                    <Button
                      className="flex sm:h-[20px] md:h-[25px] h-[36px] items-center justify-center rounded-radius50 sm:w-[19px] md:w-[24px] w-[36px]"
                      size="mdIcn"
                      variant="icbGradientBlack901Bluegray901"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="flex items-center justify-center"
                        alt="location Four"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                      <Text className="text-gray_901 w-[auto]" variant="body2">
                        Local Store
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
                <Img
                  src="images/img_ticket.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="ticket Four"
                />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoresPage;
