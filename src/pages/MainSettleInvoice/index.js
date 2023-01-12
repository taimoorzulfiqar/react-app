import React from "react";

import { Stack, Img, Line, Text, Button, SelectBox, Input } from "components";
import { useNavigate } from "react-router-dom";

const MainSettleInvoicePage = () => {
  const navigate = useNavigate();

  function handleNavigate54() {
    navigate("/maindashboard");
  }
  function handleNavigate55() {
    navigate("/deliverymen");
  }
  function handleNavigate56() {
    navigate("/stores");
  }
  function handleNavigate57() {
    navigate("/mainloadform");
  }
  function handleNavigate58() {
    navigate("/recoveries");
  }
  function handleNavigate59() {
    navigate("/user");
  }
  function handleNavigate60() {
    navigate("/recoveriesstores");
  }
  function handleNavigate65() {
    navigate("/");
  }
  function handleNavigate66() {
    navigate("/mainsettleinvoiceshort");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] sm:pr-[15px] md:pr-[44px] pr-[65px] w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1375px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[815px] relative w-[23%]">
            <Stack className="absolute h-[815px] right-[2%] sm:w-[100%] w-[98%]">
              <div className="absolute bg-bluegray_100 sm:h-[24px] md:h-[31px] h-[44px] right-[6%] top-[5%] sm:w-[23px] md:w-[30px] w-[44px]"></div>
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
                        <div
                          className="common-pointer absolute bg-bluegray_100 sm:h-[20px] md:h-[25px] h-[36px] w-[100%]"
                          onClick={handleNavigate66}
                        ></div>
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
                      className="sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:mt-[112px] md:mt-[145px] mt-[212px] sm:w-[12px] md:w-[15px] w-[23px]"
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[20px] md:mb-[26px] mb-[38px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate65}
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
                  <div
                    className="common-pointer bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mt-[112px] mt-[164px] sm:mt-[87px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[99%]"
                    onClick={handleNavigate54}
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
                    onClick={handleNavigate55}
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
                    onClick={handleNavigate56}
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
                    onClick={handleNavigate57}
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
                    onClick={handleNavigate58}
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
                    onClick={handleNavigate59}
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
              onClick={handleNavigate60}
              size="lgIcn"
              variant="icbOutlineGray100"
            >
              <Img
                src="images/img_arrowleft_gray_903.svg"
                className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                alt="arrowleft"
              />
            </Button>
            <div className="bg-white_A700 border-2 border-gray_700 border-solid flex flex-col font-roboto sm:h-[239px] md:h-[309px] h-[448px] items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] mx-[auto] sm:p-[15px] md:px-[15px] px-[22px] sm:w-[238px] md:w-[308px] w-[448px]">
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
                          alt="file"
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
                          alt="file One"
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
                    name="Group288"
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
                    name="Group287"
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

export default MainSettleInvoicePage;
