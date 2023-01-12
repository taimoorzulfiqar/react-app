import React from "react";

import { Stack, Img, Line, Text } from "components";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

  function handleNavigate113() {
    navigate("/maindashboard");
  }
  function handleNavigate114() {
    navigate("/deliverymen");
  }
  function handleNavigate115() {
    navigate("/stores");
  }
  function handleNavigate116() {
    navigate("/mainloadform");
  }
  function handleNavigate117() {
    navigate("/recoveries");
  }
  function handleNavigate124() {
    navigate("/");
  }
  function handleNavigate125() {
    navigate("/usershort");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-[auto] sm:pr-[15px] md:pr-[19px] pr-[28px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1412px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[815px] relative w-[22%]">
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
                          onClick={handleNavigate125}
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
                      onClick={handleNavigate124}
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
                    onClick={handleNavigate113}
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
                    onClick={handleNavigate114}
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
                    onClick={handleNavigate115}
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
                    onClick={handleNavigate116}
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
                    onClick={handleNavigate117}
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
                    className="sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] md:mt-[118px] mt-[172px] sm:mt-[91px] sm:w-[12px] md:w-[15px] w-[23px]"
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
          <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
              <Img
                src="images/img_user_18X18.svg"
                className="flex-shrink-0 sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:w-[12px] md:w-[15px] w-[23px]"
                alt="user Four"
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
              className="max-w-[100%] ml-[118px] sm:ml-[62px] md:ml-[81px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[100%] w-[78%]"
              alt="imageThree"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
