import React from "react";

import {
  Stack,
  Img,
  Line,
  Text,
  Button,
  CheckBox,
  List,
  SelectBox,
} from "components";
import { useNavigate } from "react-router-dom";

const DeliverymenShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate205() {
    navigate("/deliverymanshort");
  }
  function handleNavigate206() {
    navigate("/deliverymanshort");
  }
  function handleNavigate210() {
    navigate("/maindashboardshort");
  }
  function handleNavigate211() {
    navigate("/storesshort");
  }
  function handleNavigate212() {
    navigate("/mainloadformshort");
  }
  function handleNavigate213() {
    navigate("/recoveriesshort");
  }
  function handleNavigate214() {
    navigate("/deliverymanshort");
  }
  function handleNavigate215() {
    navigate("/deliverymanshort");
  }
  function handleNavigate217() {
    navigate("/deliverymen");
  }
  function handleNavigate218() {
    navigate("/usershort");
  }
  function handleNavigate219() {
    navigate("/signin");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] sm:pr-[15px] md:pr-[61px] pr-[90px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1350px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[817px] relative w-[11%]">
            <div
              className="common-pointer absolute bg-bluegray_100 sm:h-[20px] md:h-[26px] h-[37px] right-[12%] top-[5%] w-[29%]"
              onClick={handleNavigate217}
            ></div>
            <aside className="absolute md:hidden sm:hidden w-[100%]">
              <div className="">
                <div className="bg-light_blue_800 flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[17px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Img
                      src="images/img_salesflologow.png"
                      className="max-w-[100%] sm:w-[100%] w-[45%]"
                      alt="salesflologow"
                    />
                    <div className="flex flex-col items-center justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                      <Line className="bg-white_A700 h-[3px] w-[100%]" />
                      <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                      <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start sm:mb-[21px] md:mb-[27px] mb-[40px] md:mt-[110px] mt-[161px] sm:mt-[85px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate210}
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="settings"
                      />
                    </Stack>
                    <Stack className="bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_user.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="user"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate211}
                    >
                      <Img
                        src="images/img_mobile.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="mobile"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate212}
                    >
                      <Img
                        src="images/img_file.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="file"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate213}
                    >
                      <Img
                        src="images/img_refresh.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="refresh"
                      />
                    </Stack>
                    <Img
                      src="images/img_user.svg"
                      className="common-pointer sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] md:ml-[12px] ml-[18px] sm:ml-[9px] md:mt-[123px] mt-[179px] sm:mt-[95px] sm:w-[12px] md:w-[15px] w-[23px]"
                      onClick={handleNavigate218}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate219}
                      alt="folder"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </Stack>
          <div className="flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
            <div className="flex flex-col items-center justify-start ml-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                  <Img
                    src="images/img_user_18X18.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:mt-[2px] md:mt-[3px] mt-[5px] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="user Two"
                  />
                  <Text
                    className="flex-grow font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] text-black_900"
                    as="h5"
                    variant="h5"
                  >
                    Deliverymen
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]" />
              </div>
            </div>
            <div className="bg-light_blue_800 flex flex-col font-lato items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start pt-[1px] px-[1px] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[24px] ml-[35px] mt-[3px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                  <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] sm:w-[100%] w-[68%]">
                    <Img
                      src="images/img_grid.svg"
                      className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="grid"
                    />
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:ml-[3px] ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                      <Text
                        className="flex-grow text-bluegray_600 tracking-ls011 md:tracking-ls1 sm:tracking-ls1"
                        variant="body8"
                      >
                        Sheet
                      </Text>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="overflowmenu"
                      />
                    </div>
                  </div>
                  <Stack className="bg-light_blue_800 h-[24px] sm:ml-[2px] md:ml-[3px] ml-[5px] sm:p-[4px] md:p-[5px] p-[8px] relative rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[29%]">
                    <Img
                      src="images/img_plus.svg"
                      className="absolute h-[8px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[4px] md:w-[5px] w-[8px]"
                      alt="plus"
                    />
                  </Stack>
                </div>
                <Button
                  className="flex items-center justify-center mb-[4px] md:ml-[390px] min-w-[6%] ml-[568px] mt-[1px] sm:ml-[302px] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_icon_table.svg"
                      className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                      alt="icon / table"
                    />
                  }
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillBlue50"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[11px] text-bluegray_600 tracking-ls011 md:tracking-ls1 sm:tracking-ls1">
                    Table
                  </div>
                </Button>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mb-[3px] md:ml-[6px] ml-[9px] sm:mx-[0] p-[4px] sm:px-[0] rounded-radius4 sm:w-[100%] w-[6%]">
                  <Img
                    src="images/img_menu_16X16.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="menu"
                  />
                  <Text
                    className="flex-grow mx-[4px] text-blue_50 tracking-ls011 md:tracking-ls1 sm:tracking-ls1"
                    variant="body8"
                  >
                    Filter
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[6px] ml-[9px] sm:mx-[0] my-[1px] sm:px-[0] rounded-radius4 sm:w-[100%] w-[19%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] p-[4px] sm:px-[0] rounded-radius4 sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_computer.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="computer"
                    />
                    <Text
                      className="flex-grow sm:ml-[2px] md:ml-[3px] ml-[5px] text-blue_50 tracking-ls011 md:tracking-ls1 sm:tracking-ls1"
                      variant="body8"
                    >
                      Group
                    </Text>
                  </div>
                  <Button
                    className="flex items-center justify-center min-w-[27%] ml-[2px] my-[1px] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="images/img_icon_sort.svg"
                        className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                        alt="icon / sort"
                      />
                    }
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillBlue50"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[11px] text-bluegray_600 tracking-ls011 md:tracking-ls1 sm:tracking-ls1">
                      Sort
                    </div>
                  </Button>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[2px] sm:mx-[0] p-[4px] sm:px-[0] rounded-radius4 sm:w-[100%] w-[41%]">
                    <Img
                      src="images/img_share.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="share"
                    />
                    <Text
                      className="flex-grow mx-[4px] text-blue_50 tracking-ls011 md:tracking-ls1 sm:tracking-ls1"
                      variant="body8"
                    >
                      Customize
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center md:ml-[42px] ml-[62px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
              <CheckBox
                className="font-bold sm:pl-[15px] md:pl-[16px] pl-[24px] text-[13px] text-gray_900_87 tracking-ls013 md:tracking-ls1 sm:tracking-ls1"
                inputClassName="h-[16px] mr-[5px] w-[16px]"
                name="Name"
                label="Name"
                variant="OutlineBluegray400"
              ></CheckBox>
              <Text
                className="font-bold sm:ml-[133px] md:ml-[172px] ml-[250px] text-gray_900_87 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Contact
              </Text>
              <Text
                className="font-bold md:ml-[128px] ml-[186px] sm:ml-[99px] text-gray_900_87 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Company name
              </Text>
              <Text
                className="font-bold sm:ml-[27px] md:ml-[35px] ml-[52px] text-gray_900_87 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Recent activity
              </Text>
              <Text
                className="font-bold sm:ml-[35px] md:ml-[45px] ml-[66px] text-gray_900_87 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Role
              </Text>
            </div>
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] mx-[auto] md:p-[12px] sm:p-[15px] p-[18px] sm:w-[100%] w-[94%]">
              <div className="border-2 border-bluegray_102 border-solid md:h-[12px] h-[16px] sm:h-[9px] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius4 md:w-[11px] w-[16px] sm:w-[8px]"></div>
              <div className="flex flex-col justify-start sm:mb-[2px] md:mb-[3px] mb-[5px] md:ml-[16px] ml-[24px] sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[5px] md:pr-[3px] pr-[5px] sm:px-[0] sm:w-[100%] w-[22%]">
                <Text
                  className="text-bluegray_800 tracking-ls015 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body4"
                >
                  Hassan Saleem
                </Text>
              </div>
              <Text
                className="font-normal sm:ml-[31px] md:ml-[41px] ml-[60px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                0300-1234567
              </Text>
              <Text
                className="font-normal ml-[144px] sm:ml-[76px] md:ml-[99px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Nestle
              </Text>
              <Text
                className="font-normal ml-[106px] sm:ml-[56px] md:ml-[72px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                5 Minutes ago
              </Text>
              <Text
                className="font-normal sm:ml-[38px] md:ml-[50px] ml-[73px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Deliveryman
              </Text>
            </div>
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start mt-[1px] sm:mx-[0] mx-[auto] md:p-[11px] sm:p-[15px] p-[17px] sm:w-[100%] w-[94%]">
              <CheckBox
                className="font-medium sm:mb-[3px] md:mb-[4px] mb-[7px] sm:ml-[3px] md:ml-[4px] ml-[7px] sm:pl-[15px] md:pl-[16px] pl-[24px] text-[15px] text-bluegray_800 tracking-ls015 md:tracking-ls1 sm:tracking-ls1"
                inputClassName="h-[16px] mr-[5px] w-[16px]"
                name="OmerFarooq"
                label="Omer Farooq"
                size="sm"
              ></CheckBox>
              <Text
                className="font-normal sm:ml-[104px] md:ml-[135px] ml-[197px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                0300-1234567
              </Text>
              <Text
                className="font-normal ml-[144px] sm:ml-[76px] md:ml-[99px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                EBM
              </Text>
              <Text
                className="font-normal ml-[110px] sm:ml-[58px] md:ml-[75px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                14 Minutes ago
              </Text>
              <Text
                className="font-normal sm:ml-[38px] md:ml-[49px] ml-[72px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Deliveryman
              </Text>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start md:ml-[42px] ml-[62px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
              <CheckBox
                className="font-medium sm:pl-[15px] md:pl-[16px] pl-[24px] text-[15px] text-bluegray_800 tracking-ls015 md:tracking-ls1 sm:tracking-ls1"
                inputClassName="h-[16px] mr-[5px] w-[16px]"
                name="TaimoorZulfiqa"
                label="Taimoor Zulfiqar"
                size="sm"
              ></CheckBox>
              <Text
                className="common-pointer font-normal md:ml-[120px] ml-[175px] sm:ml-[93px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
                onClick={handleNavigate215}
              >
                0300-1234567
              </Text>
              <Text
                className="common-pointer font-normal ml-[144px] sm:ml-[76px] md:ml-[99px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
                onClick={handleNavigate205}
              >
                Redbdull
              </Text>
              <Text
                className="common-pointer font-normal sm:ml-[50px] md:ml-[64px] ml-[94px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
                onClick={handleNavigate214}
              >
                6 Hours ago
              </Text>
              <Text
                className="common-pointer font-normal sm:ml-[45px] md:ml-[58px] ml-[85px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
                onClick={handleNavigate206}
              >
                Deliveryman
              </Text>
            </div>
            <List
              className="font-lato gap-[1px] grid min-h-[auto] sm:ml-[20px] md:ml-[26px] ml-[38px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:w-[100%] w-[94%]"
              orientation="vertical"
            >
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start md:p-[12px] sm:p-[15px] p-[18px] w-[100%]">
                <CheckBox
                  className="font-medium sm:mb-[3px] md:mb-[4px] mb-[6px] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:pl-[15px] md:pl-[16px] pl-[24px] text-[15px] text-bluegray_800 tracking-ls015 md:tracking-ls1 sm:tracking-ls1"
                  inputClassName="h-[16px] mr-[5px] w-[16px]"
                  name="TahaQadir"
                  label="Taha Qadir"
                  size="sm"
                ></CheckBox>
                <Text
                  className="font-normal sm:ml-[112px] md:ml-[145px] ml-[212px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  0300-1234567
                </Text>
                <Text
                  className="font-normal ml-[144px] sm:ml-[76px] md:ml-[99px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  Dalda
                </Text>
                <Text
                  className="font-normal ml-[110px] sm:ml-[58px] md:ml-[75px] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  Dec 14, 2020
                </Text>
                <Text
                  className="font-normal sm:ml-[41px] md:ml-[52px] ml-[77px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  Deliveryman
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start md:p-[12px] sm:p-[15px] p-[18px] w-[100%]">
                <CheckBox
                  className="font-medium sm:mb-[3px] md:mb-[4px] mb-[6px] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:pl-[15px] md:pl-[16px] pl-[24px] text-[15px] text-bluegray_800 tracking-ls015 md:tracking-ls1 sm:tracking-ls1"
                  inputClassName="h-[16px] mr-[5px] w-[16px]"
                  name="TaimoorKhan"
                  label="Taimoor Khan"
                  size="sm"
                ></CheckBox>
                <Text
                  className="font-normal sm:ml-[102px] md:ml-[132px] ml-[193px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  0300-1234567
                </Text>
                <Text
                  className="font-normal ml-[144px] sm:ml-[76px] md:ml-[99px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  Redbull
                </Text>
                <Text
                  className="font-normal ml-[101px] sm:ml-[53px] md:ml-[69px] mt-[2px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  Dec 12, 2020
                </Text>
                <Text
                  className="font-normal sm:ml-[40px] md:ml-[52px] ml-[76px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  Deliveryman
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start md:p-[12px] sm:p-[15px] p-[18px] w-[100%]">
                <CheckBox
                  className="font-medium sm:mb-[3px] md:mb-[4px] mb-[6px] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:pl-[15px] md:pl-[16px] pl-[24px] text-[15px] text-bluegray_800 tracking-ls015 md:tracking-ls1 sm:tracking-ls1"
                  inputClassName="h-[16px] mr-[5px] w-[16px]"
                  name="TuryalNeeshat"
                  label="Turyal Neeshat"
                  size="sm"
                ></CheckBox>
                <Text
                  className="font-normal md:ml-[126px] ml-[184px] sm:ml-[98px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  0300-1234567
                </Text>
                <Text
                  className="font-normal ml-[144px] sm:ml-[76px] md:ml-[99px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  NFL
                </Text>
                <Text
                  className="font-normal ml-[119px] sm:ml-[63px] md:ml-[81px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  Dec 11, 2020
                </Text>
                <Text
                  className="font-normal sm:ml-[41px] md:ml-[52px] ml-[77px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  Deliveryman
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start md:p-[12px] sm:p-[15px] p-[18px] w-[100%]">
                <CheckBox
                  className="font-medium sm:mb-[3px] md:mb-[4px] mb-[6px] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:pl-[15px] md:pl-[16px] pl-[24px] text-[15px] text-bluegray_800 tracking-ls015 md:tracking-ls1 sm:tracking-ls1"
                  inputClassName="h-[16px] mr-[5px] w-[16px]"
                  name="OmerFarooq One"
                  label="Omer Farooq"
                  size="sm"
                ></CheckBox>
                <Text
                  className="font-normal sm:ml-[104px] md:ml-[135px] ml-[197px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  0300-1234567
                </Text>
                <Text
                  className="font-normal ml-[144px] sm:ml-[76px] md:ml-[99px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  NFL
                </Text>
                <Text
                  className="font-normal ml-[119px] sm:ml-[63px] md:ml-[81px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  Dec 9, 2020
                </Text>
                <Text
                  className="font-normal sm:ml-[45px] md:ml-[58px] ml-[85px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body6"
                >
                  Deliveryman
                </Text>
              </div>
            </List>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start md:ml-[42px] ml-[62px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
              <CheckBox
                className="font-medium sm:pl-[15px] md:pl-[16px] pl-[24px] text-[15px] text-bluegray_800 tracking-ls015 md:tracking-ls1 sm:tracking-ls1"
                inputClassName="h-[16px] mr-[5px] w-[16px]"
                name="TaimoorZulfiqa One"
                label="Taimoor Zulfiqar"
                size="sm"
              ></CheckBox>
              <Text
                className="font-normal md:ml-[120px] ml-[175px] sm:ml-[93px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                0300-1234567
              </Text>
              <Text
                className="font-normal ml-[144px] sm:ml-[76px] md:ml-[99px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Redbull
              </Text>
              <Text
                className="font-normal ml-[100px] sm:ml-[53px] md:ml-[68px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Dec 6, 2020
              </Text>
              <Text
                className="font-normal sm:ml-[45px] md:ml-[58px] ml-[85px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Deliveryman
              </Text>
            </div>
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] mx-[auto] md:p-[12px] sm:p-[15px] p-[18px] sm:w-[100%] w-[94%]">
              <CheckBox
                className="font-medium sm:mb-[3px] md:mb-[4px] mb-[6px] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:pl-[15px] md:pl-[16px] pl-[24px] text-[15px] text-bluegray_800 tracking-ls015 md:tracking-ls1 sm:tracking-ls1"
                inputClassName="h-[16px] mr-[5px] w-[16px]"
                name="HassanSaleem One"
                label="Hassan Saleem"
                size="sm"
              ></CheckBox>
              <Text
                className="font-normal md:ml-[127px] ml-[185px] sm:ml-[98px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                0300-1234567
              </Text>
              <Text
                className="font-normal ml-[144px] sm:ml-[76px] md:ml-[99px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Shan
              </Text>
              <Text
                className="font-normal ml-[115px] sm:ml-[61px] md:ml-[79px] mt-[4px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Nov 30, 2020
              </Text>
              <Text
                className="font-normal sm:ml-[40px] md:ml-[52px] ml-[76px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_600 tracking-ls013 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Deliveryman
              </Text>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start justify-end ml-[auto] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
              <Text
                className="font-normal not-italic text-bluegray_301 tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                Rows per page:
              </Text>
              <SelectBox
                className="font-normal md:ml-[17px] ml-[25px] sm:mx-[0] not-italic text-[13px] text-bluegray_700 tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[6%]"
                placeholderClassName="text-bluegray_700"
                name="Group416"
                placeholder="8"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_bluegray_301.svg"
                    className="w-[6px] mr-[0] sm:w-[3px] md:w-[4px] max-w-[100%]"
                    alt="Vector"
                  />
                }
              ></SelectBox>
              <Text
                className="font-normal sm:ml-[37px] md:ml-[48px] ml-[71px] not-italic text-bluegray_301 tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body6"
              >
                1-8 of 16
              </Text>
              <Img
                src="images/img_arrowleft.svg"
                className="max-w-[100%] sm:ml-[17px] md:ml-[22px] ml-[32px] mt-[3px] w-[2%]"
                alt="arrowleft"
              />
              <Img
                src="images/img_arrowright.svg"
                className="max-w-[100%] sm:ml-[15px] md:ml-[20px] ml-[30px] mt-[3px] w-[2%]"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliverymenShortPage;
