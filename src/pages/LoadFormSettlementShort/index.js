import React from "react";

import { Stack, Line, Img, Text, List, Button } from "components";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { useNavigate } from "react-router-dom";

const LoadFormSettlementShortPage = () => {
  const navigate = useNavigate();

  function handleNavigate139() {
    navigate("/deliverymenshort");
  }
  function handleNavigate140() {
    navigate("/storesshort");
  }
  function handleNavigate141() {
    navigate("/mainloadformshort");
  }
  function handleNavigate142() {
    navigate("/recoveriesshort");
  }
  function handleNavigate145() {
    navigate("/usershort");
  }
  function handleNavigate146() {
    navigate("/signin");
  }
  function handleNavigate147() {
    navigate("/loadformsettlementshorttwo");
  }
  function handleNavigate148() {
    navigate("/usershort");
  }
  function handleNavigate149() {
    navigate("/signin");
  }
  function handleNavigate150() {
    navigate("/maindashboardshort");
  }
  function handleNavigate154() {
    navigate("/loadformsettlement");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] md:pr-[150px] sm:pr-[15px] pr-[219px] shadow-bs3 w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1221px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[817px] relative w-[12%]">
            <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] right-[12%] top-[5%] sm:w-[100%] w-[70%]">
              <div className="flex flex-col items-center justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                <Line className="bg-white_A700 h-[3px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                <Line className="bg-white_A700 h-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
              </div>
              <div
                className="common-pointer bg-bluegray_100 sm:h-[21px] md:h-[27px] h-[38px] mb-[3px] sm:w-[100%] w-[41%]"
                onClick={handleNavigate154}
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
                      onClick={handleNavigate148}
                      alt="user One"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[11px] md:w-[15px] w-[22px]"
                      onClick={handleNavigate149}
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
                      onClick={handleNavigate150}
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="settings One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate139}
                    >
                      <Img
                        src="images/img_user.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="user Two"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate140}
                    >
                      <Img
                        src="images/img_mobile.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="mobile One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate141}
                    >
                      <Img
                        src="images/img_file.svg"
                        className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="file One"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer bg-bluegray_900 h-[48px] mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]"
                      onClick={handleNavigate142}
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
                        className="bg-indigo_102 flex-grow font-normal not-italic sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-bl-[0] rounded-br-[2px] rounded-tl-[0] rounded-tr-[2px] text-indigo_900"
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
                          className="bg-indigo_102 flex-grow font-normal not-italic sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-bl-[0] rounded-br-[2px] rounded-tl-[0] rounded-tr-[2px] text-indigo_900"
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
                onClick={handleNavigate147}
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

export default LoadFormSettlementShortPage;
