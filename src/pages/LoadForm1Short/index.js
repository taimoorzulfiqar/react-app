import React from "react";

import { Stack, Line, Img, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const LoadForm1ShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate174() {
    navigate("/maindashboardshort");
  }
  function handleNavigate175() {
    navigate("/deliverymenshort");
  }
  function handleNavigate176() {
    navigate("/storesshort");
  }
  function handleNavigate177() {
    navigate("/mainloadform");
  }
  function handleNavigate178() {
    navigate("/recoveriesshort");
  }
  function handleNavigate179() {
    navigate("/mainloadformshort");
  }
  function handleNavigate181() {
    navigate("/loadformone");
  }
  function handleNavigate182() {
    navigate("/usershort");
  }
  function handleNavigate183() {
    navigate("/signin");
  }
  function handleNavigate184() {
    navigate("/usershort");
  }
  function handleNavigate185() {
    navigate("/signin");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] md:pr-[143px] sm:pr-[15px] pr-[208px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1232px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[817px] relative w-[12%]">
            <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] right-[12%] top-[5%] sm:w-[100%] w-[70%]">
              <div className="flex flex-col items-center justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                <Line className="bg-white_A700 h-[3px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
              </div>
              <div
                className="common-pointer bg-bluegray_100 sm:h-[21px] md:h-[27px] h-[38px] mb-[3px] sm:w-[100%] w-[41%]"
                onClick={handleNavigate181}
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
                      onClick={handleNavigate184}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate185}
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
                      onClick={handleNavigate174}
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="settings One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate175}
                    >
                      <Img
                        src="images/img_user.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="user Two"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate176}
                    >
                      <Img
                        src="images/img_mobile.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="mobile One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate177}
                    >
                      <Img
                        src="images/img_file.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="file One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate178}
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
          <div className="flex flex-col justify-start md:ml-[27px] ml-[40px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[13px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                  <Img
                    src="images/img_menu_18X18.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="menu"
                  />
                  <Text
                    className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-black_900"
                    as="h5"
                    variant="h5"
                  >
                    {"Load Form > Load Form 0001"}
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[30px] ml-[44px] sm:mt-[24px] md:mt-[31px] mt-[46px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
              <Button
                className="common-pointer flex sm:h-[25px] md:h-[32px] h-[46px] items-center justify-center rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                onClick={handleNavigate179}
                size="lgIcn"
                variant="icbOutlineGray100"
              >
                <Img
                  src="images/img_arrowleft_gray_903.svg"
                  className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                  alt="arrowleft"
                />
              </Button>
              <Stack className="bg-deep_orange_50 border-2 border-black_900 border-solid h-[514px] sm:ml-[17px] md:ml-[22px] ml-[32px] sm:mt-[11px] md:mt-[14px] mt-[21px] p-[1px] relative sm:w-[100%] w-[91%]">
                <Stack className="absolute h-[512px] inset-[0] justify-center m-[auto] w-[100%]">
                  <Line className="absolute bg-black_900 sm:h-[273px] md:h-[353px] h-[512px] left-[17%] w-[2px]" />
                  <div className="absolute bottom-[9%] flex flex-col items-center justify-start top-[10%] w-[100%]">
                    <Line className="bg-black_900 h-[2px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[27px] md:mt-[35px] mt-[51px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[26px] md:mt-[34px] mt-[50px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[26px] md:mt-[33px] mt-[49px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[27px] md:mt-[35px] mt-[51px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[27px] md:mt-[35px] mt-[51px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[26px] md:mt-[33px] mt-[49px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[25px] md:mt-[33px] mt-[48px] rotate-[-180deg] w-[100%]" />
                    <Line className="bg-black_900 h-[2px] sm:mt-[25px] md:mt-[33px] mt-[48px] rotate-[-180deg] w-[100%]" />
                  </div>
                </Stack>
                <Line className="absolute bg-black_900 sm:h-[273px] md:h-[352px] h-[511px] inset-y-[0] left-[36%] my-[auto] w-[2px]" />
                <Line className="absolute bg-black_900 sm:h-[272px] md:h-[351px] h-[510px] inset-y-[0] my-[auto] right-[44%] w-[2px]" />
                <Line className="absolute bg-black_900 sm:h-[273px] md:h-[352px] h-[511px] inset-y-[0] my-[auto] right-[23%] w-[2px]" />
                <List
                  className="absolute sm:gap-[20px] md:gap-[26px] gap-[38px] grid inset-y-[0] left-[2%] min-h-[auto] my-[auto] w-[34%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body3"
                      >
                        Store Name
                      </Text>
                      <Text
                        className="font-semibold sm:ml-[16px] md:ml-[21px] ml-[31px] mt-[1px] text-black_900 w-[auto]"
                        variant="body3"
                      >
                        Invoice Number
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
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
                        IN456
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
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
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
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
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[12px] md:ml-[8px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
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
                    </div>
                  </div>
                  <div className="flex flex-col sm:h-[116px] md:h-[149px] h-[216px] items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        Jamshed Store
                      </Text>
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        IN451
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
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
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[16px] md:mt-[21px] mt-[31px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-semibold mt-[1px] text-black_900 w-[auto]"
                        variant="body5"
                      >
                        Jamshed Store
                      </Text>
                      <Text
                        className="font-semibold mb-[1px] text-black_900 w-[auto]"
                        variant="body5"
                      >
                        IN478
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        Jamal Store
                      </Text>
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        IN480
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        Kamal Store
                      </Text>
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body5"
                      >
                        IN479
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[38%] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[17%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    variant="body3"
                  >
                    Invoice Amount
                  </Text>
                  <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 4,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[19px] md:mt-[24px] mt-[36px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 6,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 5,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[20px] md:mt-[26px] mt-[38px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,650
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[23px] mt-[34px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[32px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 10,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[32px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 20,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[33px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start sm:mx-[0] my-[auto] sm:px-[0] right-[24%] sm:w-[100%] w-[19%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    variant="body3"
                  >
                    Amount Collected
                  </Text>
                  <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 0
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[19px] md:mt-[24px] mt-[36px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 5,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 4,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[20px] md:mt-[26px] mt-[38px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 2,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[23px] mt-[34px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[32px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 7,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[32px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 15,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[33px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start sm:mx-[0] my-[auto] sm:px-[0] right-[2%] sm:w-[100%] w-[18%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    variant="body3"
                  >
                    Amount Credited
                  </Text>
                  <div className="flex flex-col justify-start md:ml-[19px] ml-[29px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 1,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[19px] md:mt-[24px] mt-[36px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 1,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 1,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[20px] md:mt-[26px] mt-[38px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 1,650
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[18px] md:mt-[23px] mt-[34px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 0
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[16px] md:mt-[21px] mt-[31px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 3,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[33px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 5,000
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[33px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      PKR 0
                    </Text>
                  </div>
                </div>
              </Stack>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[141px] md:ml-[97px] sm:mt-[20px] md:mt-[26px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
              <Text
                className="font-semibold mb-[1px] text-black_900 w-[auto]"
                variant="body3"
              >
                Total Invoice Amount
              </Text>
              <Text
                className="font-semibold sm:ml-[12px] md:ml-[16px] ml-[24px] text-black_900 w-[auto]"
                variant="body3"
              >
                Deliveryman Expense
              </Text>
              <Text
                className="font-semibold mb-[1px] md:ml-[11px] ml-[16px] sm:ml-[8px] text-black_900 w-[auto]"
                variant="body3"
              >
                Final Amount
              </Text>
            </div>
            <Stack className="h-[24px] ml-[125px] sm:ml-[66px] md:ml-[86px] sm:mt-[3px] md:mt-[4px] mt-[6px] relative sm:w-[100%] w-[51%]">
              <Line className="absolute bg-black_900 h-[2px] top-[4%] w-[100%]" />
              <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] right-[4%] sm:w-[100%] w-[84%]">
                <Text
                  className="font-semibold mt-[2px] text-black_900 w-[auto]"
                  variant="body3"
                >
                  PKR 60,000
                </Text>
                <Line className="bg-black_900 sm:h-[13px] md:h-[17px] h-[24px] sm:ml-[27px] md:ml-[35px] ml-[51px] w-[2px]" />
                <Text
                  className="font-semibold sm:ml-[28px] md:ml-[37px] ml-[54px] mt-[2px] text-black_900 w-[auto]"
                  variant="body3"
                >
                  PKR 5,000
                </Text>
                <Line className="bg-black_900 sm:h-[13px] md:h-[17px] h-[24px] sm:ml-[29px] md:ml-[37px] ml-[55px] w-[2px]" />
                <Text
                  className="font-semibold md:ml-[10px] ml-[15px] sm:ml-[7px] mt-[2px] text-black_900 w-[auto]"
                  variant="body3"
                >
                  PKR 52,000
                </Text>
              </div>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadForm1ShortPage;
