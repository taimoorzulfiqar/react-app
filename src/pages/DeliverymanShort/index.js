import React from "react";

import { Stack, Line, Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const DeliverymanShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate74() {
    navigate("/maindashboardshort");
  }
  function handleNavigate75() {
    navigate("/deliverymenshort");
  }
  function handleNavigate76() {
    navigate("/storesshort");
  }
  function handleNavigate77() {
    navigate("/mainloadformshort");
  }
  function handleNavigate78() {
    navigate("/recoveriesshort");
  }
  function handleNavigate79() {
    navigate("/usershort");
  }
  function handleNavigate80() {
    navigate("/signin");
  }
  function handleNavigate83() {
    navigate("/deliveryman");
  }
  function handleNavigate84() {
    navigate("/usershort");
  }
  function handleNavigate85() {
    navigate("/signin");
  }
  function handleNavigate86() {
    navigate("/usershort");
  }
  function handleNavigate87() {
    navigate("/signin");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-start mx-[auto] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1246px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[834px] relative w-[13%]">
            <Stack className="absolute h-[817px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[97%]">
              <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] right-[12%] top-[5%] sm:w-[100%] w-[69%]">
                <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                  <Line className="bg-white_A700 h-[3px] w-[100%]" />
                  <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                  <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                </div>
                <div
                  className="common-pointer bg-bluegray_100 sm:h-[20px] md:h-[26px] h-[37px] mb-[3px] sm:w-[19px] md:w-[25px] w-[37px]"
                  onClick={handleNavigate83}
                ></div>
              </div>
              <aside className="absolute md:hidden sm:hidden inset-[0] justify-center m-[auto] sm:w-[100%] w-[99%]">
                <div className="">
                  <div className="bg-light_blue_800 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Img
                        src="images/img_salesflologow.png"
                        className="max-w-[100%] sm:w-[100%] w-[50%]"
                        alt="salesflologow"
                      />
                      <div className="flex flex-col items-center justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                        <Line className="bg-white_A700 h-[3px] w-[100%]" />
                        <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                        <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start sm:mb-[18px] md:mb-[24px] mb-[35px] sm:mt-[103px] md:mt-[134px] mt-[195px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
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
                        onClick={handleNavigate86}
                        alt="user One"
                      />
                      <Img
                        src="images/img_folder.svg"
                        className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                        onClick={handleNavigate87}
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
                        onClick={handleNavigate74}
                      >
                        <Img
                          src="images/img_settings.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="settings One"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate75}
                      >
                        <Img
                          src="images/img_user.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="user Two"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate76}
                      >
                        <Img
                          src="images/img_mobile.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="mobile One"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate77}
                      >
                        <Img
                          src="images/img_file.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="file One"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate78}
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
                      alt="file Two"
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
          <div className="flex flex-col items-center md:ml-[17px] ml-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
            <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[11px] ml-[17px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                  <Img
                    src="images/img_user_18X18.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:mt-[2px] md:mt-[3px] mt-[5px] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="user Six"
                  />
                  <Text
                    className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-black_900"
                    as="h5"
                    variant="h5"
                  >
                    {"Deliverymen > Taimoor Zulfiqar"}
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-fontfamily items-start sm:mt-[28px] md:mt-[37px] mt-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
              <div className="sm:mx-[0] overflow-x-auto sm:px-[0] sm:w-[100%] w-[36%]">
                <Stack className="h-[264px] sm:pr-[15px] md:pr-[26px] pr-[39px] relative w-[100%]">
                  <div className="absolute flex flex-col justify-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                    <Stack className="font-poppins h-[161px] sm:ml-[11px] md:ml-[14px] ml-[21px] relative sm:w-[100%] w-[92%]">
                      <Stack className="absolute h-[161px] w-[100%]">
                        <div className="absolute bg-blue_100 flex flex-col justify-start left-[0] sm:p-[15px] md:p-[23px] p-[34px] rounded-radius14 shadow-bs4 w-[100%]">
                          <Text
                            className="font-normal sm:mb-[40px] md:mb-[52px] mb-[76px] mt-[1px] not-italic text-black_900 w-[auto]"
                            variant="body5"
                          >
                            New Orders
                          </Text>
                        </div>
                        <Line className="absolute bg-deep_purple_50 bottom-[42%] h-[1px] w-[100%]" />
                      </Stack>
                      <div className="absolute bottom-[27%] flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between left-[14%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Text
                          className="mt-[1px] not-italic text-black_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          85
                        </Text>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col font-fontfamily justify-start sm:mx-[0] sm:p-[2px] md:p-[3px] p-[5px] sm:w-[100%] w-[23%]"
                          style={{
                            backgroundImage: "url('images/img_group265.svg')",
                          }}
                        >
                          <Text
                            className="sm:mb-[4px] md:mb-[6px] mb-[9px] mt-[1px] not-italic text-black_900 w-[auto]"
                            variant="body7"
                          >
                            75%
                          </Text>
                        </div>
                      </div>
                    </Stack>
                    <Text
                      className="font-fontfamily sm:ml-[29px] md:ml-[38px] ml-[56px] mr-[128px] sm:mr-[68px] md:mr-[88px] sm:mt-[30px] md:mt-[39px] mt-[58px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Response Rate
                    </Text>
                    <Text
                      className="font-bold font-roboto mr-[127px] sm:mr-[67px] md:mr-[87px] sm:mt-[18px] md:mt-[23px] mt-[34px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Daily Sales Trend
                    </Text>
                  </div>
                  <div
                    className="absolute bottom-[17%] h-[12px] sm:h-[7px] md:h-[9px] inset-x-[0] mx-[auto] overflow-hidden sm:w-[100%] w-[79%]"
                    name="Group263"
                  >
                    <div className="w-full h-full absolute bg-deep_purple_100 rounded-[6.36px]"></div>
                    <div
                      className="h-full absolute bg-deep_purple_A400  rounded-[6.36px]"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </Stack>
              </div>
              <div className="flex flex-col items-center justify-start ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                <div className="flex flex-col justify-start sm:pb-[37px] md:pb-[48px] pb-[70px] sm:pr-[15px] md:pr-[48px] pr-[70px] w-[100%]">
                  <Stack className="h-[171px] mr-[11px] sm:mr-[5px] md:mr-[7px] relative sm:w-[100%] w-[96%]">
                    <Stack className="absolute bg-indigo_300 font-poppins h-[161px] left-[0] sm:p-[2px] md:p-[3px] p-[5px] rounded-radius14 shadow-bs4 top-[0] sm:w-[100%] w-[92%]">
                      <Img
                        src="images/img_calculator.svg"
                        className="absolute h-[24px] max-w-[100%] right-[5%] top-[9%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="calculator"
                      />
                      <Stack className="absolute bottom-[0] h-[118px] right-[4%] sm:w-[100%] w-[81%]">
                        <Stack className="absolute h-[115px] inset-y-[0] my-[auto] right-[1%] sm:w-[100%] w-[68%]">
                          <div className="absolute border-bw6 border-deep_purple_101 border-solid sm:h-[50px] md:h-[64px] h-[92px] right-[2%] rounded-radius465 top-[5%] sm:w-[100%] w-[73%]"></div>
                          <Img
                            src="images/img_maskgroup.svg"
                            className="absolute h-[115px] max-w-[100%] w-[100%]"
                            alt="Maskgroup"
                          />
                        </Stack>
                        <div className="absolute bottom-[27%] flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Text
                            className="sm:mb-[3px] md:mb-[4px] mb-[6px] not-italic text-black_900 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            21
                          </Text>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col font-fontfamily justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:p-[2px] md:p-[3px] p-[5px] sm:w-[100%] w-[18%]"
                            style={{
                              backgroundImage: "url('images/img_group267.svg')",
                            }}
                          >
                            <Text
                              className="sm:mb-[4px] md:mb-[6px] mb-[9px] mt-[1px] not-italic text-black_900 w-[auto]"
                              variant="body7"
                            >
                              62%
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="absolute font-normal not-italic text-black_900 w-[auto]"
                          variant="body5"
                        >
                          Sales Today
                        </Text>
                      </Stack>
                    </Stack>
                    <Text
                      className="absolute bottom-[0] font-fontfamily not-italic right-[0] text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Goal
                    </Text>
                  </Stack>
                  <div className="flex flex-col items-center justify-start md:ml-[23px] ml-[34px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                    <div className="flex flex-col items-end justify-start w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                        <Text
                          className="not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          60%
                        </Text>
                        <Text
                          className="md:ml-[10px] ml-[15px] sm:ml-[7px] not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Daily Goal
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                        <Text
                          className="flex items-center not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          72
                        </Text>
                        <Text
                          className="ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          This Week
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-cyan_100 flex flex-col font-poppins justify-start mb-[131px] sm:mb-[69px] md:mb-[90px] md:ml-[15px] ml-[22px] sm:mx-[0] md:p-[15px] sm:p-[15px] p-[23px] rounded-radius14 shadow-bs4 sm:w-[100%] w-[25%]">
                <div className="flex flex-col justify-start sm:mb-[15px] md:mb-[20px] mb-[30px] ml-[11px] md:ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                  <Text
                    className="font-normal leading-[normal] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[93%]"
                    variant="body5"
                  >
                    Deliveryman Expense
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      PKR 1000
                    </Text>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col font-fontfamily items-center sm:mx-[0] sm:p-[2px] md:p-[3px] p-[5px] sm:w-[100%] w-[21%]"
                      style={{
                        backgroundImage: "url('images/img_group268.svg')",
                      }}
                    >
                      <Text
                        className="sm:mb-[4px] md:mb-[6px] mb-[9px] mt-[1px] not-italic text-black_900 w-[auto]"
                        variant="body7"
                      >
                        85%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-roboto items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
                <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[2%]">
                  <Text
                    className="font-normal not-italic text-black_900 w-[auto]"
                    variant="body9"
                  >
                    150
                  </Text>
                  <Text
                    className="font-normal sm:mt-[50px] md:mt-[64px] mt-[94px] not-italic text-black_900 w-[auto]"
                    variant="body9"
                  >
                    100
                  </Text>
                  <Text
                    className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[50px] md:mt-[64px] mt-[94px] not-italic text-black_900 w-[auto]"
                    variant="body9"
                  >
                    50
                  </Text>
                  <Text
                    className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[50px] md:mt-[64px] mt-[94px] not-italic text-black_900 w-[auto]"
                    variant="body9"
                  >
                    0
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Stack className="h-[319px] relative w-[100%]">
                    <Stack className="absolute h-[319px] inset-x-[0] sm:w-[100%] w-[99%]">
                      <Stack className="absolute h-[319px] w-[100%]">
                        <div className="absolute flex flex-col items-center justify-start w-[100%]">
                          <Stack className="h-[317px] relative w-[100%]">
                            <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                                <Line className="bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] w-[1px]" />
                              </div>
                            </div>
                            <Line className="absolute bg-deep_purple_100_4c bottom-[32%] h-[1px] inset-x-[0] w-[100%]" />
                            <Line className="absolute bg-deep_purple_100_4c h-[1px] inset-x-[0] top-[34%] w-[100%]" />
                            <Line className="absolute bg-deep_purple_100_4c h-[1px] inset-x-[0] w-[100%]" />
                          </Stack>
                          <Stack className="h-[1px] mt-[1px] relative w-[100%]">
                            <Line className="absolute bg-deep_purple_100_4c h-[1px] w-[100%]" />
                            <Line className="absolute bg-deep_purple_100_4c h-[1px] w-[100%]" />
                          </Stack>
                        </div>
                        <Line className="absolute bg-deep_purple_100_4c sm:h-[169px] md:h-[218px] h-[316px] inset-y-[0] left-[0] my-[auto] w-[1px]" />
                      </Stack>
                      <Stack
                        className="absolute bg-cover bg-no-repeat bottom-[3%] h-[200px] inset-x-[0] p-[2px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group269.svg')",
                        }}
                      >
                        <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start left-[3%] sm:mx-[0] sm:px-[0] top-[2%] sm:w-[100%] w-[74%]">
                          <div className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] sm:mb-[2px] md:mb-[3px] mb-[5px] w-[8%]"
                                alt="close"
                              />
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] ml-[131px] sm:ml-[69px] md:ml-[90px] sm:mt-[2px] md:mt-[3px] mt-[5px] w-[8%]"
                                alt="close One"
                              />
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] mb-[12px] sm:mb-[6px] md:mb-[8px] w-[3%]"
                                alt="close Two"
                              />
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] sm:ml-[258px] md:ml-[334px] ml-[486px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[3%]"
                                alt="close Three"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] mt-[10px] sm:mt-[5px] md:mt-[6px] w-[2%]"
                            alt="close Four"
                          />
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] sm:ml-[50px] md:ml-[65px] ml-[95px] w-[2%]"
                            alt="close Five"
                          />
                        </div>
                        <div className="absolute flex flex-col justify-start left-[6%] sm:mx-[0] sm:px-[0] top-[31%] sm:w-[100%] w-[46%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                            <Img
                              src="images/img_close.svg"
                              className="max-w-[100%] mb-[12px] sm:mb-[6px] md:mb-[8px] md:mt-[12px] mt-[18px] sm:mt-[9px] w-[3%]"
                              alt="close Six"
                            />
                            <Img
                              src="images/img_close.svg"
                              className="max-w-[100%] ml-[131px] sm:ml-[69px] md:ml-[90px] sm:mt-[15px] md:mt-[20px] mt-[30px] w-[3%]"
                              alt="close Seven"
                            />
                            <Img
                              src="images/img_close.svg"
                              className="max-w-[100%] md:mb-[12px] mb-[18px] sm:mb-[9px] sm:ml-[31px] md:ml-[40px] ml-[59px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[3%]"
                              alt="close Eight"
                            />
                            <Img
                              src="images/img_close.svg"
                              className="max-w-[100%] sm:mb-[15px] md:mb-[20px] mb-[30px] sm:ml-[126px] md:ml-[163px] ml-[237px] w-[3%]"
                              alt="close Nine"
                            />
                          </div>
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] sm:ml-[37px] md:ml-[48px] ml-[70px] mt-[3px] w-[3%]"
                            alt="close Ten"
                          />
                        </div>
                        <div className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] right-[10%] sm:w-[100%] w-[60%]">
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] sm:mt-[22px] md:mt-[29px] mt-[43px] w-[2%]"
                            alt="close Eleven"
                          />
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[2%]"
                            alt="close Twelve"
                          />
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[2%]"
                            alt="close Thirteen"
                          />
                          <div className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[24px] ml-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[5%]"
                                alt="close Fourteen"
                              />
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] mb-[12px] sm:mb-[6px] md:mb-[8px] sm:ml-[107px] md:ml-[138px] ml-[201px] w-[5%]"
                                alt="close Fifteen"
                              />
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] sm:mb-[13px] md:mb-[17px] mb-[25px] w-[3%]"
                                alt="close Sixteen"
                              />
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] sm:mb-[11px] md:mb-[14px] mb-[21px] md:ml-[114px] ml-[167px] sm:ml-[88px] mt-[3px] w-[3%]"
                                alt="close Seventeen"
                              />
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] sm:ml-[107px] md:ml-[138px] ml-[201px] sm:mt-[13px] md:mt-[17px] mt-[25px] w-[3%]"
                                alt="close Eighteen"
                              />
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] sm:mb-[10px] md:mb-[13px] mb-[19px] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:mt-[2px] md:mt-[3px] mt-[5px] w-[3%]"
                                alt="close Nineteen"
                              />
                              <Img
                                src="images/img_close.svg"
                                className="max-w-[100%] mb-[10px] sm:mb-[5px] md:mb-[6px] sm:ml-[12px] md:ml-[15px] ml-[23px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[3%]"
                                alt="close Twenty"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap h-[max-content] inset-y-[0] items-start sm:mx-[0] my-[auto] sm:px-[0] right-[6%] sm:w-[100%] w-[40%]">
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] md:mt-[12px] mt-[18px] sm:mt-[9px] w-[3%]"
                            alt="close TwentyOne"
                          />
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] md:mb-[12px] mb-[18px] sm:mb-[9px] md:ml-[114px] ml-[167px] sm:ml-[88px] w-[3%]"
                            alt="close TwentyTwo"
                          />
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] sm:mb-[2px] md:mb-[3px] mb-[5px] sm:ml-[107px] md:ml-[138px] ml-[201px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[3%]"
                            alt="close TwentyThree"
                          />
                        </div>
                        <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] right-[3%] top-[26%] sm:w-[100%] w-[19%]">
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] mb-[1px] w-[6%]"
                            alt="close TwentyFour"
                          />
                          <Img
                            src="images/img_close.svg"
                            className="max-w-[100%] mt-[1px] w-[6%]"
                            alt="close TwentyFive"
                          />
                        </div>
                      </Stack>
                    </Stack>
                    <Img
                      src="images/img_close.svg"
                      className="absolute bottom-[34%] h-[14px] left-[0] max-w-[100%] w-[2%]"
                      alt="close TwentySix"
                    />
                    <Img
                      src="images/img_close.svg"
                      className="absolute bottom-[0] h-[14px] left-[24%] max-w-[100%] w-[2%]"
                      alt="close TwentySeven"
                    />
                    <Img
                      src="images/img_close.svg"
                      className="absolute h-[14px] left-[34%] max-w-[100%] top-[32%] w-[2%]"
                      alt="close TwentyEight"
                    />
                    <Img
                      src="images/img_close.svg"
                      className="absolute bottom-[37%] h-[14px] max-w-[100%] right-[0] w-[2%]"
                      alt="close TwentyNine"
                    />
                  </Stack>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Text
                      className="font-normal mt-[1px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Monday
                    </Text>
                    <Text
                      className="font-normal mt-[1px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Tuesday
                    </Text>
                    <Text
                      className="font-normal mt-[1px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Wednesday
                    </Text>
                    <Text
                      className="font-normal mt-[1px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Thursday
                    </Text>
                    <Text
                      className="font-normal mb-[1px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Friday
                    </Text>
                    <Text
                      className="font-normal mt-[1px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Monday
                    </Text>
                    <Text
                      className="font-normal mt-[1px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Tuesday
                    </Text>
                    <Text
                      className="font-normal mt-[1px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Wednesday
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliverymanShortPage;
