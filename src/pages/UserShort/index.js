import React from "react";

import { Stack, Line, Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const UserShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate119() {
    navigate("/maindashboardshort");
  }
  function handleNavigate120() {
    navigate("/deliverymenshort");
  }
  function handleNavigate121() {
    navigate("/storesshort");
  }
  function handleNavigate122() {
    navigate("/mainloadformshort");
  }
  function handleNavigate123() {
    navigate("/recoveriesshort");
  }
  function handleNavigate128() {
    navigate("/user");
  }
  function handleNavigate129() {
    navigate("/");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-start mx-[auto] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1266px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[834px] relative w-[12%]">
            <Stack className="absolute h-[817px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[97%]">
              <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] right-[11%] top-[5%] sm:w-[100%] w-[70%]">
                <div className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                  <Line className="bg-white_A700 h-[3px] w-[100%]" />
                  <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                  <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                </div>
                <div
                  className="common-pointer bg-bluegray_100 sm:h-[24px] md:h-[31px] h-[45px] sm:w-[23px] md:w-[30px] w-[45px]"
                  onClick={handleNavigate128}
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
                        className="sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] md:ml-[12px] ml-[18px] sm:ml-[9px] sm:mt-[107px] md:mt-[139px] mt-[202px] sm:w-[12px] md:w-[15px] w-[23px]"
                        alt="user One"
                      />
                      <Img
                        src="images/img_folder.svg"
                        className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                        onClick={handleNavigate129}
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
                        onClick={handleNavigate119}
                      >
                        <Img
                          src="images/img_settings.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="settings One"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate120}
                      >
                        <Img
                          src="images/img_user.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="user Two"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate121}
                      >
                        <Img
                          src="images/img_mobile.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="mobile One"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate122}
                      >
                        <Img
                          src="images/img_file.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="file"
                        />
                      </Stack>
                      <Stack
                        className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                        onClick={handleNavigate123}
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
          <div className="flex flex-col md:ml-[39px] ml-[57px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
              <Img
                src="images/img_user_18X18.svg"
                className="flex-shrink-0 sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:w-[12px] md:w-[15px] w-[23px]"
                alt="user Six"
              />
              <Text
                className="flex-grow font-semibold sm:ml-[4px] md:ml-[6px] ml-[9px] text-black_900"
                as="h5"
                variant="h5"
              >
                Settings
              </Text>
            </div>
            <Line className="bg-black_900 h-[2px] ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[100%] w-[99%]" />
            <Img
              src="images/img_image3.png"
              className="max-w-[100%] md:ml-[106px] ml-[155px] sm:ml-[82px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:w-[100%] w-[78%]"
              alt="imageThree"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserShortPage;
