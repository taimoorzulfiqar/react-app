import React from "react";

import {
  Stack,
  Img,
  Line,
  Text,
  List,
  RadioGroup,
  Radio,
  Button,
} from "components";
import { useNavigate } from "react-router-dom";

const MainDashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate255() {
    navigate("/signin");
  }
  function handleNavigate256() {
    navigate("/user");
  }
  function handleNavigate257() {
    navigate("/user");
  }
  function handleNavigate258() {
    navigate("/deliverymen");
  }
  function handleNavigate259() {
    navigate("/stores");
  }
  function handleNavigate260() {
    navigate("/mainloadform");
  }
  function handleNavigate261() {
    navigate("/recoveries");
  }
  function handleNavigate267() {
    navigate("/maindashboardshort");
  }
  function handleNavigate268() {
    navigate("/");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] sm:pr-[15px] md:pr-[44px] pr-[65px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1375px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[815px] relative w-[23%]">
            <Stack className="absolute h-[815px] right-[2%] sm:w-[100%] w-[98%]">
              <div
                className="common-pointer absolute bg-bluegray_100 sm:h-[24px] md:h-[31px] h-[44px] right-[6%] top-[5%] sm:w-[23px] md:w-[30px] w-[44px]"
                onClick={handleNavigate267}
              ></div>
              <aside className="absolute md:hidden sm:hidden w-[100%]">
                <div className="">
                  <div className="bg-light_blue_800 flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[17px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Img
                        src="images/img_image29_53X182.png"
                        className="max-w-[100%] sm:w-[100%] w-[71%]"
                        alt="imageTwentyNine"
                      />
                      <Stack className="h-[36px] relative w-[17%]">
                        <div className="absolute bottom-[11%] flex flex-col items-center justify-start left-[10%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                          <Line className="bg-white_A700 h-[3px] w-[100%]" />
                          <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                          <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                        </div>
                        <div className="absolute bg-bluegray_100 sm:h-[20px] md:h-[25px] h-[36px] w-[100%]"></div>
                      </Stack>
                    </div>
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mt-[125px] mt-[182px] sm:mt-[96px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[97%]">
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
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius8 sm:w-[100%] w-[97%]">
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
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[97%]">
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
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[97%]">
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
                      onClick={handleNavigate257}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[20px] md:mb-[26px] mb-[38px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate268}
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
                      alt="imageThirty"
                    />
                    <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                      <Line className="bg-white_A700 h-[3px] w-[100%]" />
                      <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                      <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                    </div>
                  </div>
                  <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mt-[112px] mt-[164px] sm:mt-[87px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[99%]">
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
                    onClick={handleNavigate258}
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
                    onClick={handleNavigate259}
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
                    onClick={handleNavigate260}
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
                    onClick={handleNavigate261}
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
                    className="common-pointer sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] md:mt-[118px] mt-[172px] sm:mt-[91px] sm:w-[12px] md:w-[15px] w-[23px]"
                    onClick={handleNavigate256}
                    alt="user Three"
                  />
                  <Img
                    src="images/img_folder.svg"
                    className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[12px] md:mb-[15px] mb-[23px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                    onClick={handleNavigate255}
                    alt="folder One"
                  />
                </div>
              </div>
            </aside>
          </Stack>
          <div className="flex flex-col items-center md:ml-[13px] ml-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
            <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                  <Img
                    src="images/img_settings_18X18.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="settings Two"
                  />
                  <Text
                    className="flex-grow font-semibold ml-[11px] sm:ml-[5px] md:ml-[7px] text-black_900"
                    as="h5"
                    variant="h5"
                  >
                    Dashboard
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-col font-inter justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <div className="bg-blue_200 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius16 sm:w-[100%] w-[23%]">
                  <div className="flex flex-col justify-start sm:mb-[13px] md:mb-[17px] mb-[26px] mt-[2px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      variant="body5"
                    >
                      Sales
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        721K
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] p-[2px] sm:px-[0] rounded-radius4 sm:w-[100%] w-[44%]">
                        <Img
                          src="images/img_cursor.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="cursor"
                        />
                        <Text
                          className="flex-grow font-normal ml-[4px] not-italic text-gray_900"
                          variant="body5"
                        >
                          +11.01%
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:gap-[20px] md:gap-[26px] gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:w-[100%] w-[75%]"
                  orientation="horizontal"
                >
                  <div className="bg-bluegray_101 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius16 w-[100%]">
                    <div className="flex flex-col justify-start sm:mb-[13px] md:mb-[17px] mb-[26px] mt-[2px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        variant="body5"
                      >
                        Credit Collection
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                        <Text
                          className="font-semibold text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          367K
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mx-[0] p-[2px] sm:px-[0] rounded-radius4 sm:w-[100%] w-[37%]">
                          <Text
                            className="flex-grow not-italic text-gray_900"
                            variant="body7"
                          >
                            +9.15%
                          </Text>
                          <Img
                            src="images/img_cursor.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="cursor One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_300 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius16 w-[100%]">
                    <div className="flex flex-col justify-start sm:mb-[13px] md:mb-[17px] mb-[26px] mt-[2px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        variant="body5"
                      >
                        Recoveries
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                        <Text
                          className="font-semibold text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          239K
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mx-[0] p-[2px] sm:px-[0] rounded-radius4 sm:w-[100%] w-[38%]">
                          <Text
                            className="flex-grow not-italic text-gray_900"
                            variant="body7"
                          >
                            -0.56%
                          </Text>
                          <Img
                            src="images/img_checkmark.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo_100 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius16 w-[100%]">
                    <div className="flex flex-col justify-start sm:mb-[11px] md:mb-[14px] mb-[21px] mt-[2px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        variant="body5"
                      >
                        New Orders
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]">
                        <Text
                          className="font-semibold mt-[1px] text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          1,156
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mx-[0] p-[2px] sm:px-[0] rounded-radius4 sm:w-[100%] w-[37%]">
                          <Text
                            className="flex-grow not-italic text-gray_900"
                            variant="body7"
                          >
                            -1.48%
                          </Text>
                          <Img
                            src="images/img_checkmark.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="checkmark One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                  <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                    <Text
                      className="font-semibold text-gray_900 w-[auto]"
                      variant="body5"
                    >
                      Revenue
                    </Text>
                  </div>
                  <Line className="bg-black_900_33 sm:h-[11px] md:h-[14px] h-[20px] w-[1px]" />
                  <RadioGroup
                    className="flex sm:w-[100%] w-[80%]"
                    name="radiogrouptext four"
                  >
                    <Radio
                      value="CurrentWeekPKR58211"
                      className="font-normal not-italic text-[12px] text-gray_900"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogrouptext four"
                      label="Current Week PKR 58211"
                    ></Radio>
                    <Radio
                      value="PreviousWeekPKR68768"
                      className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-[12px] text-gray_900"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogrouptext four"
                      label="Previous Week PKR 68768"
                    ></Radio>
                  </RadioGroup>
                </div>
                <Button
                  className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:ml-[184px] md:ml-[238px] ml-[346px] sm:w-[14px] md:w-[19px] w-[28px]"
                  shape="icbRoundedBorder8"
                  size="smIcn"
                >
                  <Img
                    src="images/img_dotsthreeoutlin.svg"
                    className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                    alt="DotsThreeOutlin"
                  />
                </Button>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[4%]">
                      <div className="flex flex-col justify-start mb-[1px] w-[100%]">
                        <Text
                          className="not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          36K
                        </Text>
                        <Text
                          className="ml-[1px] sm:mt-[22px] md:mt-[28px] mt-[42px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          27K
                        </Text>
                        <Text
                          className="ml-[2px] sm:mt-[22px] md:mt-[29px] mt-[43px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          18K
                        </Text>
                        <Text
                          className="sm:ml-[3px] md:ml-[4px] ml-[7px] sm:mt-[22px] md:mt-[29px] mt-[43px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          9K
                        </Text>
                        <Text
                          className="md:ml-[10px] ml-[15px] sm:ml-[7px] sm:mt-[22px] md:mt-[29px] mt-[43px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-end sm:mx-[0] md:pt-[11px] pt-[16px] sm:pt-[8px] sm:px-[0] sm:w-[100%] w-[95%]">
                      <Line className="bg-black_900_0c h-[1px] w-[100%]" />
                      <Stack className="h-[105px] sm:mt-[18px] md:mt-[24px] mt-[35px] relative w-[100%]">
                        <div className="absolute flex flex-col items-center justify-start top-[18%] w-[100%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <Line className="bg-black_900_0c h-[1px] w-[100%]" />
                            <Line className="bg-black_900_0c h-[1px] sm:mt-[28px] md:mt-[37px] mt-[54px] w-[100%]" />
                          </div>
                        </div>
                        <Img
                          src="images/img_group427318832.svg"
                          className="absolute h-[105px] left-[2%] max-w-[100%] right-[6%] sm:w-[100%] w-[93%]"
                          alt="Group427318832"
                        />
                      </Stack>
                      <Line className="bg-black_900_0c h-[1px] sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]" />
                      <Line className="bg-black_900_33 h-[1px] sm:mt-[28px] md:mt-[37px] mt-[54px] w-[100%]" />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] p-[2px] w-[100%]">
                        <Text
                          className="sm:ml-[18px] md:ml-[24px] ml-[35px] my-[1px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          Mon
                        </Text>
                        <Text
                          className="my-[1px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          Tue
                        </Text>
                        <Text
                          className="my-[1px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          Wed
                        </Text>
                        <Text
                          className="my-[1px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          Thu
                        </Text>
                        <Text
                          className="mb-[1px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          Fri
                        </Text>
                        <Text
                          className="my-[1px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          Sat
                        </Text>
                        <Text
                          className="sm:mr-[19px] md:mr-[24px] mr-[36px] my-[1px] not-italic text-black_900_66 w-[auto]"
                          variant="body7"
                        >
                          Sun
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-semibold ml-[2px] sm:mt-[38px] md:mt-[50px] mt-[73px] text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    Top Selling Products
                  </Text>
                </div>
                <div className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Text
                    className="font-semibold text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    Total Sales
                  </Text>
                  <Stack className="h-[152px] sm:ml-[38px] md:ml-[49px] ml-[72px] mt-[3px] relative sm:w-[100%] w-[65%]">
                    <Img
                      src="images/img_group427318836.svg"
                      className="absolute h-[152px] max-w-[100%] right-[0] sm:w-[100%] w-[96%]"
                      alt="Group427318836"
                    />
                    <Text
                      className="absolute bg-black_900_cc bottom-[18%] left-[0] not-italic pl-[4px] md:pr-[14px] sm:pr-[15px] pr-[21px] sm:py-[3px] md:py-[4px] py-[6px] rounded-radius4 text-white_A700 w-[60px]"
                      variant="body7"
                    >
                      30.8%
                    </Text>
                  </Stack>
                  <div className="md:ml-[29px] ml-[43px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] overflow-x-auto sm:px-[0] sm:w-[100%] w-[82%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pb-[12px] sm:pb-[6px] md:pb-[8px] w-[100%]">
                      <RadioGroup
                        className="sm:w-[100%] w-[52%]"
                        name="radiogrouptext six"
                      >
                        <Radio
                          value="OrderBooker"
                          className="font-normal not-italic text-[12px] text-gray_900 w-[100%]"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogrouptext six"
                          label="Order Booker"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="Web"
                          className="font-normal sm:mr-[26px] md:mr-[34px] mr-[50px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-gray_900"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogrouptext six"
                          label="Web"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="SpotSelling"
                          className="font-normal sm:mr-[4px] md:mr-[5px] mr-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-gray_900"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogrouptext six"
                          label="Spot Selling"
                        ></Radio>
                        <Radio
                          value="Other"
                          className="font-normal sm:mr-[22px] md:mr-[29px] mr-[43px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-gray_900"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogrouptext six"
                          label="Other"
                          size="sm"
                        ></Radio>
                      </RadioGroup>
                      <div className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                        <Text
                          className="not-italic text-gray_900 w-[auto]"
                          variant="body7"
                        >
                          PKR 300.56
                        </Text>
                        <Text
                          className="md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-gray_900 w-[auto]"
                          variant="body7"
                        >
                          PKR 135.18
                        </Text>
                        <Text
                          className="md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-gray_900 w-[auto]"
                          variant="body7"
                        >
                          PKR 48.96
                        </Text>
                        <Text
                          className="md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-gray_900 w-[auto]"
                          variant="body7"
                        >
                          PKR 154.02
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="gap-[0] grid min-h-[auto] ml-[2px] mt-[4px] sm:w-[100%] w-[83%]"
                orientation="vertical"
              >
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                  <div className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[6px] sm:px-[0] py-[10px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[26%]">
                    <Text
                      className="mb-[1px] not-italic text-black_900_66 w-[auto]"
                      variant="body7"
                    >
                      Name
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[6px] sm:px-[0] py-[10px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mb-[1px] not-italic text-black_900_66 w-[auto]"
                      variant="body7"
                    >
                      Price
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[7px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[7px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mt-[3px] not-italic text-black_900_66 w-[auto]"
                      variant="body7"
                    >
                      Quantity
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[6px] sm:px-[0] py-[10px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mb-[1px] not-italic text-black_900_66 w-[auto]"
                      variant="body7"
                    >
                      Amount
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                  <div className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[6px] sm:px-[0] py-[10px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[26%]">
                    <Text
                      className="mb-[1px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      Nestle Nido
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[6px] sm:px-[0] py-[10px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mb-[1px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      PKR 79.49
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[6px] sm:px-[0] py-[10px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mb-[1px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      82
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[7px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[7px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mt-[3px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      PKR 6,518.18
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                  <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[7px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[7px] sm:w-[100%] w-[26%]">
                    <Text
                      className="mt-[3px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      Milkpak
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[6px] sm:px-[0] py-[10px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mb-[1px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      PKR 128.50
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[6px] sm:px-[0] py-[10px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mb-[1px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      37
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[7px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[7px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mt-[3px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      PKR 4,754.50
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                  <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[7px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[7px] sm:w-[100%] w-[26%]">
                    <Text
                      className="mt-[3px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      Olpers
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[6px] sm:px-[0] py-[10px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mb-[1px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      PKR 39.99
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[6px] sm:px-[0] py-[10px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mb-[1px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      64
                    </Text>
                  </div>
                  <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[7px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[7px] sm:w-[100%] w-[25%]">
                    <Text
                      className="mt-[3px] not-italic text-gray_900 w-[auto]"
                      variant="body7"
                    >
                      PKR 2,559.36
                    </Text>
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

export default MainDashboardPage;
