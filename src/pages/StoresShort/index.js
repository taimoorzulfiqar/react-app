import React from "react";

import { Stack, Line, Img, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const StoresShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate19() {
    navigate("/maindashboardshort");
  }
  function handleNavigate20() {
    navigate("/deliverymenshort");
  }
  function handleNavigate21() {
    navigate("/mainloadformshort");
  }
  function handleNavigate22() {
    navigate("/recoveriesshort");
  }
  function handleNavigate30() {
    navigate("/stores");
  }
  function handleNavigate31() {
    navigate("/usershort");
  }
  function handleNavigate32() {
    navigate("/signin");
  }
  function handleNavigate33() {
    navigate("/storeshort");
  }
  function handleNavigate34() {
    navigate("/usershort");
  }
  function handleNavigate35() {
    navigate("/signin");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-urbanist justify-end mx-[auto] md:pr-[132px] sm:pr-[15px] pr-[193px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1247px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[817px] relative w-[12%]">
            <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] right-[13%] top-[5%] sm:w-[100%] w-[68%]">
              <div className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                <Line className="bg-white_A700 h-[3px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
              </div>
              <div
                className="common-pointer bg-bluegray_100 sm:h-[19px] md:h-[25px] h-[35px] mb-[3px] sm:w-[100%] w-[40%]"
                onClick={handleNavigate30}
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
                      onClick={handleNavigate34}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate35}
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
                      onClick={handleNavigate19}
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="settings One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate20}
                    >
                      <Img
                        src="images/img_user.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="user Two"
                      />
                    </Stack>
                    <Stack className="bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_mobile.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="mobile One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate21}
                    >
                      <Img
                        src="images/img_file.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="file One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate22}
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
          <div className="flex flex-col justify-start md:ml-[19px] ml-[29px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
            <div className="flex flex-col justify-start w-[100%]">
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
            </div>
            <List
              className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid min-h-[auto] ml-[11px] sm:ml-[5px] md:ml-[7px] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:w-[100%] w-[83%]"
              orientation="vertical"
            >
              <div
                className="common-pointer bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] rounded-radius24 shadow-bs5 w-[100%]"
                onClick={handleNavigate33}
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

export default StoresShortPage;
