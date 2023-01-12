import React from "react";

import { Stack, Line, Img, Text, Grid, List } from "components";
import { useNavigate } from "react-router-dom";

const RecoveriesShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate216() {
    navigate("/recoveriesloadformshort");
  }
  function handleNavigate220() {
    navigate("/maindashboardshort");
  }
  function handleNavigate221() {
    navigate("/deliverymenshort");
  }
  function handleNavigate222() {
    navigate("/storesshort");
  }
  function handleNavigate223() {
    navigate("/mainloadformshort");
  }
  function handleNavigate224() {
    navigate("/recoveriesstoresshort");
  }
  function handleNavigate226() {
    navigate("/usershort");
  }
  function handleNavigate227() {
    navigate("/signin");
  }
  function handleNavigate228() {
    navigate("/recoveries");
  }
  function handleNavigate229() {
    navigate("/usershort");
  }
  function handleNavigate230() {
    navigate("/signin");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] md:pr-[149px] sm:pr-[15px] pr-[217px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1223px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[817px] relative w-[12%]">
            <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] right-[13%] top-[5%] sm:w-[100%] w-[68%]">
              <div className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                <Line className="bg-white_A700 h-[3px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
              </div>
              <div className="bg-bluegray_100 sm:h-[19px] md:h-[25px] h-[35px] mb-[3px] sm:w-[100%] w-[40%]"></div>
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
                      <div
                        className="common-pointer absolute bg-bluegray_100 sm:h-[20px] md:h-[26px] h-[37px] w-[100%]"
                        onClick={handleNavigate228}
                      ></div>
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
                      onClick={handleNavigate229}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate230}
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
                      onClick={handleNavigate220}
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="settings One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate221}
                    >
                      <Img
                        src="images/img_user.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="user Two"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate222}
                    >
                      <Img
                        src="images/img_mobile.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="mobile One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate223}
                    >
                      <Img
                        src="images/img_file.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="file One"
                      />
                    </Stack>
                    <Stack className="bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]">
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
          <div className="flex flex-col items-center justify-start md:ml-[21px] ml-[31px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[11px] md:ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
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
                    Recoveries
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-col font-rubik justify-start sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                <Text
                  className="font-bold font-roboto text-gray_905 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Stores
                </Text>
                <Text
                  className="font-lato font-semibold sm:ml-[425px] md:ml-[549px] ml-[799px] text-black_900 tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body3"
                >
                  1-8 of 16
                </Text>
                <Img
                  src="images/img_arrowleft_black_900.svg"
                  className="max-w-[100%] sm:ml-[17px] md:ml-[22px] ml-[33px] w-[1%]"
                  alt="arrowleft"
                />
                <Img
                  src="images/img_arrowright_black_900.svg"
                  className="max-w-[100%] sm:ml-[15px] md:ml-[20px] ml-[30px] w-[1%]"
                  alt="arrowright"
                />
              </div>
              <Grid className="gap-[12px] sm:gap-[6px] md:gap-[8px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[93%]">
                <div
                  className="common-pointer bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]"
                  onClick={handleNavigate224}
                >
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jamal Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 17, 000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Kamal Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Nice Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jamal Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jamshed Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Afzal Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Super Store
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
                <div className="bg-gray_301 flex flex-col justify-center sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Text
                      className="text-gray_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jamal Store
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-red_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Recovery
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    PKR 3000
                  </Text>
                </div>
              </Grid>
            </div>
            <div className="flex flex-col font-dmsans justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                <Text
                  className="font-bold font-roboto text-gray_905 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Load Forms
                </Text>
                <Text
                  className="font-lato font-semibold sm:ml-[396px] md:ml-[512px] ml-[744px] text-black_900 tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body3"
                >
                  1-8 of 16
                </Text>
                <Img
                  src="images/img_arrowleft_black_900.svg"
                  className="max-w-[100%] sm:ml-[17px] md:ml-[22px] ml-[33px] w-[1%]"
                  alt="arrowleft One"
                />
                <Img
                  src="images/img_arrowright_black_900.svg"
                  className="max-w-[100%] sm:ml-[15px] md:ml-[20px] ml-[30px] w-[1%]"
                  alt="arrowright One"
                />
              </div>
              <List
                className="md:gap-[12px] gap-[18px] sm:gap-[9px] grid min-h-[auto] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[93%]"
                orientation="vertical"
              >
                <div
                  className="common-pointer bg-orange_200 flex flex-col items-center justify-end md:p-[12px] sm:p-[15px] p-[18px] rounded-radius12 w-[100%]"
                  onClick={handleNavigate216}
                >
                  <div className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:px-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-bold mb-[3px] text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Load Form 0001
                      </Text>
                      <Text
                        className="font-bold sm:mt-[4px] md:mt-[5px] mt-[8px] text-black_900 w-[auto]"
                        variant="body1"
                      >
                        PKR 14,650
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                      <div className="flex flex-col items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                        <Text
                          className="font-normal not-italic text-gray_601 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Date Settled 12/12/22
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-red_A700 w-[auto]"
                        variant="body3"
                      >
                        Amount Credited
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-orange_200 flex flex-col items-center justify-end md:p-[12px] sm:p-[15px] p-[18px] rounded-radius12 w-[100%]">
                  <div className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:px-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Load Form 0001
                      </Text>
                      <Text
                        className="font-bold sm:mt-[2px] md:mt-[3px] mt-[5px] text-black_900 w-[auto]"
                        variant="body1"
                      >
                        PKR 3,000
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                      <div className="flex flex-col items-center justify-start mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                        <Text
                          className="font-normal not-italic text-gray_601 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Date Settled 12/12/22
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-red_A700 w-[auto]"
                        variant="body3"
                      >
                        Amount Credited
                      </Text>
                    </div>
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

export default RecoveriesShortPage;
