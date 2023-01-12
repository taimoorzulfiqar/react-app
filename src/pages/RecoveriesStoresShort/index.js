import React from "react";

import { Stack, Line, Img, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const RecoveriesStoresShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate88() {
    navigate("/storesshort");
  }
  function handleNavigate89() {
    navigate("/mainloadformshort");
  }
  function handleNavigate90() {
    navigate("/recoveriesshort");
  }
  function handleNavigate91() {
    navigate("/recoveriesshort");
  }
  function handleNavigate92() {
    navigate("/mainsettleinvoiceshort");
  }
  function handleNavigate95() {
    navigate("/usershort");
  }
  function handleNavigate96() {
    navigate("/signin");
  }
  function handleNavigate97() {
    navigate("/usershort");
  }
  function handleNavigate98() {
    navigate("/signin");
  }
  function handleNavigate99() {
    navigate("/maindashboardshort");
  }
  function handleNavigate100() {
    navigate("/deliverymenshort");
  }
  function handleNavigate106() {
    navigate("/recoveriesstores");
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
                onClick={handleNavigate106}
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
                      onClick={handleNavigate97}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate98}
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
                      onClick={handleNavigate99}
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="settings One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate100}
                    >
                      <Img
                        src="images/img_user.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="user Two"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate88}
                    >
                      <Img
                        src="images/img_mobile.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="mobile One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate89}
                    >
                      <Img
                        src="images/img_file.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="file One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate90}
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
                onClick={handleNavigate91}
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] md:pr-[5px] pr-[8px] sm:px-[0] sm:py-[4px] md:py-[5px] py-[8px] sm:w-[100%] w-[5%]">
                      <div className="border border-gray_900_23 border-solid sm:h-[13px] md:h-[17px] h-[24px] rounded-radius6 sm:w-[12px] md:w-[16px] w-[24px]"></div>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[12px] md:ml-[8px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[61%]">
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
                    <div className="flex flex-col justify-start ml-[107px] md:ml-[73px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                      <Text
                        className="sm:ml-[36px] md:ml-[46px] ml-[68px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
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
                    <div className="flex flex-col justify-start md:ml-[64px] ml-[94px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Text
                        className="sm:ml-[43px] md:ml-[55px] ml-[81px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
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
                    <div className="flex flex-col items-end justify-start md:ml-[59px] ml-[87px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
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
                    <div className="flex flex-col items-end justify-start md:ml-[58px] ml-[85px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Text
                        className="text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        PKR 3,000
                      </Text>
                      <Text
                        className="mr-[1px] mt-[2px] text-red_A702 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
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
                    <div className="flex flex-col items-center justify-start ml-[12px] md:ml-[8px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[62%]">
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
                    <div className="flex flex-col justify-start md:ml-[65px] ml-[95px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Text
                        className="sm:ml-[42px] md:ml-[55px] ml-[80px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
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
                  onClick={handleNavigate92}
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

export default RecoveriesStoresShortPage;
