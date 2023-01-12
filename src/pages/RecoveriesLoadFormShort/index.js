import React from "react";

import { Stack, Line, Img, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const RecoveriesLoadFormShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate238() {
    navigate("/mainsettleinvoiceshort");
  }
  function handleNavigate244() {
    navigate("/maindashboardshort");
  }
  function handleNavigate245() {
    navigate("/deliverymenshort");
  }
  function handleNavigate246() {
    navigate("/storesshort");
  }
  function handleNavigate247() {
    navigate("/mainloadformshort");
  }
  function handleNavigate248() {
    navigate("/recoveriesshort");
  }
  function handleNavigate249() {
    navigate("/recoveriesshort");
  }
  function handleNavigate250() {
    navigate("/recoveriesloadform");
  }
  function handleNavigate251() {
    navigate("/usershort");
  }
  function handleNavigate252() {
    navigate("/signin");
  }
  function handleNavigate253() {
    navigate("/usershort");
  }
  function handleNavigate254() {
    navigate("/signin");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] md:pr-[147px] sm:pr-[15px] pr-[215px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1225px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[817px] relative w-[12%]">
            <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] right-[13%] top-[5%] sm:w-[100%] w-[68%]">
              <div className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                <Line className="bg-white_A700 h-[3px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
              </div>
              <div
                className="common-pointer bg-bluegray_100 sm:h-[19px] md:h-[25px] h-[35px] mb-[3px] sm:w-[100%] w-[40%]"
                onClick={handleNavigate250}
              ></div>
            </div>
            <aside className="absolute md:hidden sm:hidden inset-[0] justify-center m-[auto] sm:w-[100%] w-[99%]">
              <div className="">
                <div className="bg-light_blue_800 flex flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between ml-[auto] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                    <Img
                      src="images/img_salesflologow.png"
                      className="max-w-[100%] sm:w-[100%] w-[48%]"
                      alt="salesflologow"
                    />
                    <Stack className="h-[37px] mb-[3px] sm:mt-[4px] md:mt-[5px] mt-[8px] relative w-[39%]">
                      <div className="absolute bottom-[11%] flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[12%] sm:w-[100%] w-[71%]">
                        <Line className="bg-white_A700 h-[3px] w-[100%]" />
                        <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                        <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                      </div>
                      <div className="absolute bg-bluegray_100 sm:h-[20px] md:h-[26px] h-[37px] w-[100%]"></div>
                    </Stack>
                  </div>
                  <div className="flex flex-col justify-start sm:mb-[21px] md:mb-[27px] mb-[40px] sm:mt-[103px] md:mt-[134px] mt-[195px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
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
                        src="images/img_file.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="file"
                      />
                    </Stack>
                    <Img
                      src="images/img_user.svg"
                      className="common-pointer sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] md:ml-[12px] ml-[18px] sm:ml-[9px] sm:mt-[107px] md:mt-[139px] mt-[202px] sm:w-[12px] md:w-[15px] w-[23px]"
                      onClick={handleNavigate253}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate254}
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
                      onClick={handleNavigate244}
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="settings One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate245}
                    >
                      <Img
                        src="images/img_user.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="user Two"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate246}
                    >
                      <Img
                        src="images/img_mobile.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="mobile One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate247}
                    >
                      <Img
                        src="images/img_file.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="file One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate248}
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
          <div className="flex flex-col items-center justify-start md:ml-[22px] ml-[33px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
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
                onClick={handleNavigate249}
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mr-[17px] mr-[26px] sm:mx-[0] my-[0] sm:px-[0] sm:w-[100%] w-[97%]">
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
                    PKR 3,000
                  </Text>
                  <Text
                    className="font-semibold ml-[106px] sm:ml-[56px] md:ml-[72px] text-black_900 w-[auto]"
                    variant="body5"
                  >
                    PKR 0
                  </Text>
                </div>
                <Line className="self-center w-[100%] h-[3px] bg-bluegray_100" />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] w-[100%]">
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] w-[100%]">
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] w-[100%]">
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
                  onClick={handleNavigate238}
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

export default RecoveriesLoadFormShortPage;
