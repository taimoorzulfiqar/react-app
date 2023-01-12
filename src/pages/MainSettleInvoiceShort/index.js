import React from "react";

import { Stack, Line, Img, Text, Button, SelectBox, Input } from "components";
import { useNavigate } from "react-router-dom";

const MainSettleInvoiceShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate61() {
    navigate("/recoveriesshort");
  }
  function handleNavigate62() {
    navigate("/recoveriesstoresshort");
  }
  function handleNavigate67() {
    navigate("/mainsettleinvoice");
  }
  function handleNavigate68() {
    navigate("/");
  }
  function handleNavigate69() {
    navigate("/usershort");
  }
  function handleNavigate70() {
    navigate("/maindashboardshort");
  }
  function handleNavigate71() {
    navigate("/deliverymenshort");
  }
  function handleNavigate72() {
    navigate("/storesshort");
  }
  function handleNavigate73() {
    navigate("/mainloadformshort");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-start mx-[auto] w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1228px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[834px] relative w-[13%]">
            <Stack className="absolute h-[817px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[97%]">
              <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] right-[11%] top-[5%] sm:w-[100%] w-[70%]">
                <div className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                  <Line className="bg-white_A700 h-[3px] w-[100%]" />
                  <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                  <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                </div>
                <div
                  className="common-pointer bg-bluegray_100 sm:h-[24px] md:h-[31px] h-[45px] sm:w-[23px] md:w-[30px] w-[45px]"
                  onClick={handleNavigate67}
                ></div>
              </div>
              <aside className="absolute md:hidden sm:hidden inset-[0] justify-center m-[auto] sm:w-[100%] w-[97%]">
                <div className="">
                  <div className="bg-light_blue_800 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                      <Img
                        src="images/img_salesflologow.png"
                        className="max-w-[100%] sm:w-[100%] w-[49%]"
                        alt="salesflologow"
                      />
                      <div className="flex flex-col items-center justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                        <Line className="bg-white_A700 h-[3px] w-[100%]" />
                        <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                        <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start sm:mb-[18px] md:mb-[24px] mb-[35px] sm:mt-[103px] md:mt-[133px] mt-[194px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                      <Stack className="bg-bluegray_900 h-[48px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]">
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
                      <Stack className="bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="mobile"
                        />
                      </Stack>
                      <Stack className="bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_menu.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="menu"
                        />
                      </Stack>
                      <Img
                        src="images/img_user.svg"
                        className="common-pointer sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] md:ml-[12px] ml-[18px] sm:ml-[9px] sm:mt-[107px] md:mt-[139px] mt-[202px] sm:w-[12px] md:w-[15px] w-[23px]"
                        onClick={handleNavigate69}
                        alt="user One"
                      />
                      <Img
                        src="images/img_folder.svg"
                        className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                        onClick={handleNavigate68}
                        alt="folder"
                      />
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="absolute md:hidden sm:hidden w-[100%]">
                <div className="">
                  <div className="bg-light_blue_800 flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[17px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Img
                        src="images/img_salesflologow.png"
                        className="max-w-[100%] sm:w-[100%] w-[45%]"
                        alt="salesflologow One"
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
                        onClick={handleNavigate70}
                      >
                        <Img
                          src="images/img_settings.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="settings One"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate71}
                      >
                        <Img
                          src="images/img_user.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="user Two"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate72}
                      >
                        <Img
                          src="images/img_mobile.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="mobile One"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate73}
                      >
                        <Img
                          src="images/img_file.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="file"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate61}
                      >
                        <Img
                          src="images/img_refresh.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="refresh"
                        />
                      </Stack>
                      <Img
                        src="images/img_user.svg"
                        className="sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] md:ml-[12px] ml-[18px] sm:ml-[9px] md:mt-[123px] mt-[179px] sm:mt-[95px] sm:w-[12px] md:w-[15px] w-[23px]"
                        alt="user Three"
                      />
                      <Img
                        src="images/img_folder.svg"
                        className="sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                        alt="folder One"
                      />
                    </div>
                  </div>
                </div>
              </aside>
            </Stack>
            <aside className="absolute bottom-[0] md:hidden sm:hidden w-[100%]">
              <div className="">
                <div className="bg-light_blue_800 flex flex-col items-center justify-center md:p-[13px] sm:p-[15px] p-[19px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_salesflologow.png"
                      className="max-w-[100%] sm:w-[100%] w-[43%]"
                      alt="salesflologow Two"
                    />
                    <Stack className="h-[37px] mb-[1px] sm:mt-[4px] md:mt-[5px] mt-[8px] relative w-[37%]">
                      <div className="absolute bottom-[11%] flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[12%] sm:w-[100%] w-[71%]">
                        <Line className="bg-white_A700 h-[3px] w-[100%]" />
                        <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                        <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                      </div>
                      <div className="absolute bg-bluegray_100 sm:h-[20px] md:h-[26px] h-[37px] w-[100%]"></div>
                    </Stack>
                  </div>
                  <div className="flex flex-col justify-start sm:mb-[19px] md:mb-[24px] mb-[36px] md:mt-[121px] mt-[176px] sm:mt-[93px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                    <Img
                      src="images/img_settings.svg"
                      className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] ml-[3px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="settings Two"
                    />
                    <Img
                      src="images/img_user.svg"
                      className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] ml-[3px] sm:mt-[21px] md:mt-[27px] mt-[40px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="user Four"
                    />
                    <Img
                      src="images/img_mobile.svg"
                      className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] ml-[3px] sm:mt-[21px] md:mt-[27px] mt-[40px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="mobile Two"
                    />
                    <Img
                      src="images/img_file.svg"
                      className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] ml-[3px] sm:mt-[21px] md:mt-[27px] mt-[40px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="file One"
                    />
                    <Img
                      src="images/img_refresh.svg"
                      className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] ml-[3px] sm:mt-[21px] md:mt-[27px] mt-[40px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="refresh One"
                    />
                    <Img
                      src="images/img_user.svg"
                      className="sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:mt-[103px] md:mt-[133px] mt-[194px] sm:w-[12px] md:w-[15px] w-[23px]"
                      alt="user Five"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] ml-[3px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      alt="folder Two"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </Stack>
          <div className="flex flex-col justify-start md:ml-[21px] ml-[31px] sm:mt-[21px] md:mt-[28px] mt-[41px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
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
            <Button
              className="common-pointer flex sm:h-[25px] md:h-[32px] h-[46px] items-center justify-center sm:ml-[10px] md:ml-[13px] ml-[20px] sm:mt-[21px] md:mt-[27px] mt-[40px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
              onClick={handleNavigate62}
              size="lgIcn"
              variant="icbOutlineGray100"
            >
              <Img
                src="images/img_arrowleft_gray_903.svg"
                className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                alt="arrowleft"
              />
            </Button>
            <div className="bg-white_A700 border-2 border-gray_700 border-solid flex flex-col font-roboto sm:h-[239px] md:h-[309px] h-[448px] items-center justify-start sm:ml-[168px] md:ml-[218px] ml-[317px] sm:mr-[149px] md:mr-[193px] mr-[281px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:p-[15px] md:px-[15px] px-[22px] sm:w-[238px] md:w-[308px] w-[448px]">
              <div className="flex flex-col justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mr-[11px] md:mr-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <div className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Button
                        className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="icbCircleBorder23"
                        size="lgIcn"
                        variant="icbFillLightblue100"
                      >
                        <Img
                          src="images/img_file_44X44.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="file Two"
                        />
                      </Button>
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        variant="body5"
                      >
                        IN456
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                      <Button
                        className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="icbCircleBorder23"
                        size="lgIcn"
                        variant="icbFillLightblue100"
                      >
                        <Img
                          src="images/img_file_44X44.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="file Three"
                        />
                      </Button>
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        variant="body5"
                      >
                        IN430
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Rs. 3,000
                    </Text>
                    <div className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] w-[100%]">
                      <Text
                        className="font-semibold text-gray_500 w-[auto]"
                        variant="body9"
                      >
                        Remaining Amount
                      </Text>
                      <Text
                        className="font-medium sm:ml-[14px] md:ml-[18px] ml-[27px] sm:mt-[21px] md:mt-[27px] mt-[40px] text-black_900 w-[auto]"
                        variant="body5"
                      >
                        Rs. 2,000
                      </Text>
                      <Text
                        className="font-semibold sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 w-[auto]"
                        variant="body9"
                      >
                        Remaining Amount
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="sm:ml-[25px] md:ml-[33px] ml-[48px] sm:mt-[21px] md:mt-[27px] mt-[40px] not-italic text-gray_701 w-[auto]"
                  variant="body7"
                >
                  Recovery Method
                </Text>
                <div className="flex flex-col justify-start md:ml-[22px] ml-[32px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                  <SelectBox
                    className="font-normal font-roboto sm:mx-[0] not-italic text-[16px] text-bluegray_802 sm:w-[100%] w-[85%]"
                    placeholderClassName="text-bluegray_802"
                    name="Group272"
                    placeholder="Select"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_7X12.svg"
                        className="w-[12px] mr-[18px] sm:mr-[9px] sm:w-[6px] md:mr-[12px] md:w-[8px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineGray602"
                  ></SelectBox>
                  <Text
                    className="font-roboto md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_701 w-[auto]"
                    variant="body7"
                  >
                    Amount Recovered
                  </Text>
                  <Input
                    className="font-normal font-roboto not-italic p-[0] text-[16px] placeholder:text-bluegray_802 text-bluegray_802 w-[100%]"
                    wrapClassName="md:mt-[4px] mt-[6px] sm:mt-[3px] sm:mx-[0] sm:w-[100%] w-[85%]"
                    name="Group271"
                    placeholder="Enter amount"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="OutlineGray602"
                  ></Input>
                  <Button
                    className="cursor-pointer font-bold font-urbanist min-w-[53%] ml-[134px] sm:ml-[71px] md:ml-[92px] sm:mt-[23px] md:mt-[30px] mt-[44px] text-[16px] text-center text-white_A700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    variant="OutlineBlack9003f_2"
                  >
                    Settle
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSettleInvoiceShortPage;
