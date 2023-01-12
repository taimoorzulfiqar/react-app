import React from "react";

import { Stack, Line, Img, Text, SelectBox, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const MainLoadFormShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate180() {
    navigate("/recoveriesshort");
  }
  function handleNavigate186() {
    navigate("/loadformsettlementshort");
  }
  function handleNavigate187() {
    navigate("/usershort");
  }
  function handleNavigate188() {
    navigate("/signin");
  }
  function handleNavigate189() {
    navigate("/maindashboardshort");
  }
  function handleNavigate190() {
    navigate("/storesshort");
  }
  function handleNavigate191() {
    navigate("/mainloadform");
  }
  function handleNavigate193() {
    navigate("/mainloadform");
  }
  function handleNavigate194() {
    navigate("/usershort");
  }
  function handleNavigate195() {
    navigate("/signin");
  }
  function handleNavigate196() {
    navigate("/maindashboardshort");
  }
  function handleNavigate197() {
    navigate("/deliverymen");
  }
  function handleNavigate198() {
    navigate("/loadform1short");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] md:pr-[118px] sm:pr-[15px] pr-[172px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1267px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[817px] relative w-[12%]">
            <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] right-[12%] top-[5%] sm:w-[100%] w-[70%]">
              <div className="flex flex-col items-center justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                <Line className="bg-white_A700 h-[3px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
              </div>
              <div
                className="common-pointer bg-bluegray_100 sm:h-[21px] md:h-[27px] h-[38px] mb-[3px] sm:w-[100%] w-[41%]"
                onClick={handleNavigate193}
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
                      <div
                        className="common-pointer absolute bg-bluegray_100 sm:h-[20px] md:h-[26px] h-[37px] w-[100%]"
                        onClick={handleNavigate197}
                      ></div>
                    </Stack>
                  </div>
                  <div className="flex flex-col justify-start sm:mb-[21px] md:mb-[27px] mb-[40px] sm:mt-[103px] md:mt-[134px] mt-[195px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate196}
                    >
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
                      onClick={handleNavigate194}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate195}
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
                      onClick={handleNavigate189}
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="settings One"
                      />
                    </Stack>
                    <Stack className="bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_user.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="user Two"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate190}
                    >
                      <Img
                        src="images/img_mobile.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="mobile One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate191}
                    >
                      <Img
                        src="images/img_file.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="file One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate180}
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
          <div className="flex flex-col items-center justify-start md:ml-[51px] ml-[75px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[13px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
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
                    Load Form
                  </Text>
                </div>
                <Line className="bg-black_900 h-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
              <SelectBox
                className="font-normal font-poppins sm:mx-[0] not-italic text-[16px] text-black_900 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[29%]"
                placeholderClassName="text-black_900"
                name="TypeButtonTy"
                placeholder="Select Distribution"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_1.svg"
                    className="w-[12px] mr-[16px] sm:mr-[8px] sm:w-[6px] md:mr-[11px] md:w-[8px] max-w-[100%]"
                    alt="arrow_down"
                  />
                }
                shape="CircleBorder20"
                size="sm"
                variant="OutlineBlack900"
              ></SelectBox>
              <Button
                className="common-pointer cursor-pointer font-bold font-urbanist min-w-[22%] text-[16px] text-center text-white_A700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                onClick={handleNavigate186}
                variant="OutlineBlack9003f_2"
              >
                Settle Load Form
              </Button>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-dmsans items-center justify-between sm:mt-[27px] md:mt-[35px] mt-[52px] sm:px-[0] w-[100%]">
              <Line className="bg-black_900 sm:h-[304px] md:h-[393px] h-[570px] mb-[1px] w-[1px]" />
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                <div
                  className="common-pointer bg-gray_300 flex flex-col justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]"
                  onClick={handleNavigate198}
                >
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Text
                        className="font-bold font-dmsans mb-[12px] sm:mb-[6px] md:mb-[8px] text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Load Form 0001
                      </Text>
                      <Text
                        className="font-poppins font-semibold sm:mt-[12px] md:mt-[16px] mt-[24px] text-black_900 w-[auto]"
                        variant="body3"
                      >
                        PKR 55,000
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                      <Text
                        className="font-normal not-italic text-gray_601 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Date Settled 12/12/22
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="md:gap-[10px] gap-[15px] sm:gap-[7px] grid min-h-[auto] md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-gray_300 flex flex-col justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                      <div className="flex flex-col font-dmsans sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Load Form 0002
                        </Text>
                        <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Date Settled 12/12/22
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-poppins font-semibold sm:ml-[299px] md:ml-[386px] ml-[562px] text-black_900 w-[auto]"
                        variant="body3"
                      >
                        PKR 75,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_300 flex flex-col justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                      <div className="flex flex-col font-dmsans sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Load Form 0003
                        </Text>
                        <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Date Settled 12/12/22
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-poppins font-semibold sm:ml-[299px] md:ml-[386px] ml-[562px] text-black_900 w-[auto]"
                        variant="body3"
                      >
                        PKR 65,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_300 flex flex-col justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                      <div className="flex flex-col font-dmsans sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Load Form 0004
                        </Text>
                        <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Date Settled 12/12/22
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-poppins font-semibold sm:ml-[299px] md:ml-[386px] ml-[562px] text-black_900 w-[auto]"
                        variant="body3"
                      >
                        PKR 35,000
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Line className="bg-black_900 sm:h-[304px] md:h-[393px] h-[570px] mt-[1px] w-[1px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLoadFormShortPage;
