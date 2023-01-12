import React from "react";

import { Stack, Img, Line, Text, List, Button } from "components";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { useNavigate } from "react-router-dom";

const LoadFormSettlementPage = () => {
  const navigate = useNavigate();

  function handleNavigate27() {
    navigate("/signin");
  }
  function handleNavigate28() {
    navigate("/user");
  }
  function handleNavigate29() {
    navigate("/loadformsettlementtwo");
  }
  function handleNavigate36() {
    navigate("/maindashboard");
  }
  function handleNavigate37() {
    navigate("/stores");
  }
  function handleNavigate38() {
    navigate("/mainloadform");
  }
  function handleNavigate39() {
    navigate("/recoveries");
  }
  function handleNavigate43() {
    navigate("/loadformsettlementshort");
  }
  function handleNavigate44() {
    navigate("/deliverymen");
  }
  function handleNavigate45() {
    navigate("/signin");
  }
  function handleNavigate46() {
    navigate("/user");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] sm:pr-[15px] md:pr-[40px] pr-[59px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1381px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[815px] relative w-[22%]">
            <Stack className="absolute h-[815px] right-[1%] sm:w-[100%] w-[99%]">
              <div
                className="common-pointer absolute bg-bluegray_100 sm:h-[23px] md:h-[30px] h-[43px] right-[6%] top-[5%] w-[15%]"
                onClick={handleNavigate43}
              ></div>
              <div className="absolute bg-bluegray_100 sm:h-[24px] md:h-[31px] h-[44px] right-[6%] top-[5%] sm:w-[23px] md:w-[30px] w-[44px]"></div>
              <aside className="absolute md:hidden sm:hidden w-[100%]">
                <div className="">
                  <div className="bg-light_blue_800 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Img
                        src="images/img_image29_53X182.png"
                        className="max-w-[100%] sm:w-[100%] w-[72%]"
                        alt="imageThirty"
                      />
                      <Stack className="h-[36px] relative w-[17%]">
                        <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[70%]">
                          <Line className="bg-white_A700 h-[3px] w-[100%]" />
                          <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                          <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                        </div>
                        <div className="absolute bg-bluegray_100 sm:h-[20px] md:h-[25px] h-[36px] w-[100%]"></div>
                      </Stack>
                    </div>
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mt-[125px] mt-[182px] sm:mt-[96px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[98%]">
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
                    <div
                      className="common-pointer bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius8 sm:w-[100%] w-[98%]"
                      onClick={handleNavigate44}
                    >
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
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[98%]">
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
                    <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[98%]">
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
                      className="common-pointer sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:mt-[112px] md:mt-[145px] mt-[212px] sm:w-[12px] md:w-[15px] w-[23px]"
                      onClick={handleNavigate46}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:mb-[18px] md:mb-[24px] mb-[35px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate45}
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
                      alt="imageThirtyOne"
                    />
                    <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                      <Line className="bg-white_A700 h-[3px] w-[100%]" />
                      <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                      <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                    </div>
                  </div>
                  <div
                    className="common-pointer bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mt-[112px] mt-[164px] sm:mt-[87px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius8 sm:w-[100%] w-[99%]"
                    onClick={handleNavigate36}
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
                  <div className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius8 sm:w-[100%] w-[99%]">
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
                    onClick={handleNavigate37}
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
                    onClick={handleNavigate38}
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
                    onClick={handleNavigate39}
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
          <div className="flex flex-col justify-start md:ml-[22px] ml-[32px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[13px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                  <Img
                    src="images/img_menu_18X18.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="menu Two"
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
            <Text
              className="font-semibold sm:ml-[207px] md:ml-[267px] ml-[389px] sm:mt-[10px] md:mt-[13px] mt-[20px] text-black_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              Load Form Settlement
            </Text>
            <div className="bg-white_A700 border-2 border-gray_700 border-solid flex flex-col font-roboto sm:h-[239px] md:h-[309px] h-[448px] items-center justify-start sm:ml-[160px] md:ml-[207px] ml-[301px] sm:mr-[158px] md:mr-[204px] mr-[297px] sm:mt-[43px] md:mt-[56px] mt-[82px] sm:p-[15px] md:px-[13px] px-[20px] sm:w-[238px] md:w-[308px] w-[448px]">
              <div className="flex flex-col justify-start sm:mb-[44px] md:mb-[57px] mb-[84px] sm:px-[0] w-[100%]">
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  variant="body1"
                >
                  Enter Load Form Details
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[101px] md:ml-[69px] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                  <Text
                    className="flex-grow not-italic text-gray_701"
                    variant="body7"
                  >
                    Select Distribution
                  </Text>
                  <Img
                    src="images/img_close_6X6.svg"
                    className="flex-shrink-0 sm:h-[4px] md:h-[5px] h-[6px] max-w-[100%] sm:ml-[2px] md:ml-[3px] ml-[5px] sm:w-[3px] md:w-[4px] w-[6px]"
                    alt="close"
                  />
                </div>
                <Accordion
                  preExpanded={[0]}
                  className="sm:ml-[45px] md:ml-[58px] ml-[85px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[100%] w-[59%]"
                >
                  {" "}
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex flex-col justify-start w-[100%]">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {({ expanded }) => (
                                <div className="border border-gray_602 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[10px] p-[15px] sm:p-[7px] rounded-radius4 w-[100%]">
                                  <Text
                                    className="font-normal mb-[1px] ml-[1px] not-italic text-bluegray_802 w-[auto]"
                                    variant="body3"
                                  >
                                    Select
                                  </Text>
                                  {expanded && (
                                    <Img
                                      src="images/img_arrowdown_7X12.svg"
                                      className="max-w-[100%] mr-[3px] w-[6%]"
                                      alt="arrowdown"
                                    />
                                  )}
                                  {!expanded && (
                                    <Img
                                      src="images/img_arrowdown_7X12.svg"
                                      className="max-w-[100%] mr-[3px] w-[6%]"
                                      alt="arrowdown Two"
                                    />
                                  )}
                                </div>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="w-full">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[11px] ml-[16px] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <Text
                              className="flex-grow mt-[2px] not-italic text-gray_701"
                              variant="body7"
                            >
                              Select Deliveryman
                            </Text>
                            <Img
                              src="images/img_close_6X6.svg"
                              className="flex-shrink-0 sm:h-[4px] md:h-[5px] h-[6px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:w-[3px] md:w-[4px] w-[6px]"
                              alt="close One"
                            />
                          </div>
                        </AccordionItemPanel>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
                <List
                  className="font-opensans gap-[10px] sm:gap-[5px] md:gap-[6px] grid min-h-[auto] sm:ml-[20px] md:ml-[26px] ml-[39px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[91%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="bg-indigo_102 border border-bluegray_902 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:w-[100%] w-[32%]">
                      <Img
                        src="images/img_checkmark_23X15.svg"
                        className="flex-shrink-0 max-w-[100%] w-[15%]"
                        alt="checkmark"
                      />
                      <Text
                        className="bg-indigo_102 flex-grow font-normal not-italic sm:pt-[3px] md:pt-[4px] pt-[6px] sm:px-[3px] md:px-[4px] px-[7px] rounded-bl-[0] rounded-br-[2px] rounded-tl-[0] rounded-tr-[2px] text-indigo_900"
                        variant="body5"
                      >
                        Jamal Store
                      </Text>
                    </div>
                    <div className="bg-indigo_102 border border-bluegray_902 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[4px] sm:mx-[0] sm:w-[100%] w-[34%]">
                      <Img
                        src="images/img_checkmark_23X15.svg"
                        className="max-w-[100%] w-[14%]"
                        alt="checkmark One"
                      />
                      <Button
                        className="cursor-pointer font-normal min-w-[86%] ml-[1px] not-italic text-[14px] text-center text-indigo_900 w-[max-content]"
                        shape="CustomBorderLR2"
                        size="sm"
                        variant="FillIndigo102"
                      >
                        Kamal Store
                      </Button>
                    </div>
                    <div className="bg-indigo_102 border border-bluegray_902 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly ml-[4px] sm:mx-[0] sm:w-[100%] w-[33%]">
                      <Img
                        src="images/img_checkmark_23X15.svg"
                        className="flex-shrink-0 max-w-[100%] w-[14%]"
                        alt="checkmark Two"
                      />
                      <Text
                        className="bg-indigo_102 flex-grow font-normal not-italic sm:pt-[3px] md:pt-[4px] pt-[6px] sm:px-[4px] md:px-[5px] px-[8px] rounded-bl-[0] rounded-br-[2px] rounded-tl-[0] rounded-tr-[2px] text-indigo_900"
                        variant="body5"
                      >
                        Super Store
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                      <div className="bg-indigo_102 border border-bluegray_902 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:w-[100%] w-[37%]">
                        <Img
                          src="images/img_checkmark_23X15.svg"
                          className="flex-shrink-0 max-w-[100%] w-[12%]"
                          alt="checkmark One"
                        />
                        <Text
                          className="bg-indigo_102 flex-grow font-normal not-italic sm:pt-[3px] md:pt-[4px] pt-[6px] sm:px-[3px] md:px-[4px] px-[7px] rounded-bl-[0] rounded-br-[2px] rounded-tl-[0] rounded-tr-[2px] text-indigo_900"
                          variant="body5"
                        >
                          Jamshed Store
                        </Text>
                      </div>
                      <div className="bg-indigo_102 border border-bluegray_902 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:w-[100%] w-[29%]">
                        <Img
                          src="images/img_checkmark_23X15.svg"
                          className="max-w-[100%] w-[16%]"
                          alt="checkmark One One"
                        />
                        <Button
                          className="cursor-pointer font-normal min-w-[84%] ml-[1px] not-italic text-[14px] text-center text-indigo_900 w-[max-content]"
                          shape="CustomBorderLR2"
                          size="sm"
                          variant="FillIndigo102"
                        >
                          Nice Store
                        </Button>
                      </div>
                      <div className="bg-indigo_102 border border-bluegray_902 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:w-[100%] w-[33%]">
                        <Img
                          src="images/img_checkmark_23X15.svg"
                          className="max-w-[100%] w-[14%]"
                          alt="checkmark Two One"
                        />
                        <Button
                          className="cursor-pointer font-normal min-w-[86%] not-italic text-[14px] text-center text-indigo_900 w-[max-content]"
                          shape="CustomBorderLR2"
                          size="sm"
                          variant="FillIndigo102"
                        >
                          Kamal Store
                        </Button>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowdown_6X12.svg"
                      className="max-w-[100%] sm:mb-[2px] md:mb-[3px] mb-[5px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[4%]"
                      alt="arrowdown Three"
                    />
                  </div>
                </List>
              </div>
            </div>
            <Stack className="font-urbanist h-[40px] sm:ml-[292px] md:ml-[378px] ml-[550px] sm:mt-[19px] md:mt-[25px] mt-[37px] relative w-[21%]">
              <Text
                className="absolute bottom-[23%] font-bold inset-x-[0] mx-[auto] text-white_A700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                variant="body3"
              >
                Next
              </Text>
              <Button
                className="common-pointer absolute cursor-pointer font-bold text-[16px] text-center text-white_A700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                onClick={handleNavigate29}
                variant="OutlineBlack9003f_1"
              >
                Next
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadFormSettlementPage;
