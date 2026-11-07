import breadboardFamily from "./families/catalog-breadboard.js";
import { coreModulesFamily, coreBasicsFamily } from "./families/catalog-core.js";
import waveshareFamily from "./families/catalog-waveshare.js";
import heltecSemtechFamily from "./families/catalog-heltec-semtech.js";
import espRpFamily from "./families/catalog-esp-rp.js";
import arduinoFamily from "./families/catalog-arduino.js";
import stm32Family from "./families/catalog-stm32.js";
import nordicBoardsFamily from "./families/catalog-nordic-boards.js";
import nordicFamily from "./families/catalog-nordic.js";
import powerFamily from "./families/catalog-power.js";
import spXtFamily from "./families/catalog-sp-xt.js";
import switchesMosfetsFamily from "./families/catalog-switches-mosfets.js";
import commonInterfacesFamily from "./families/catalog-common-interfaces.js";
import commonPeripheralsFamily from "./families/catalog-common-peripherals.js";
import commonPowerFamily from "./families/catalog-common-power.js";
import commonSensorsFamily from "./families/catalog-common-sensors.js";
import airQualitySensorsFamily from "./families/catalog-air-quality-sensors.js";
import environmentSensorsFamily from "./families/catalog-environment-sensors.js";
import forceSensorsFamily from "./families/catalog-force-sensors.js";
import motionSensorsFamily from "./families/catalog-motion-sensors.js";
import raspberryPiFamily from "./families/catalog-raspberry-pi.js";
import pwmServosFamily from "./families/catalog-pwm-servos.js";
import elrsFamily from "./families/catalog-elrs.js";
import usbUartFamily from "./families/catalog-usb-uart.js";
import flightControllersFamily from "./families/catalog-flight-controllers.js";
import fpvNavigationFamily from "./families/catalog-fpv-navigation.js";
import waveshareExpansionFamily from "./families/catalog-waveshare-expansion.js";
import prototypingIcsFamily from "./families/catalog-prototyping-ics.js";
import analogPrototypingFamily from "./families/catalog-analog-prototyping.js";
import audioPrototypingFamily from "./families/catalog-audio-prototyping.js";
import inputPrototypingFamily from "./families/catalog-input-prototyping.js";
import adafruitReadyFamily from "./families/catalog-adafruit-ready.js";
import waveshareReadyFamily from "./families/catalog-waveshare-ready.js";
import nordicReadyFamily from "./families/catalog-nordic-ready.js";
import nxpReadyFamily from "./families/catalog-nxp-ready.js";
import arduinoReadyFamily from "./families/catalog-arduino-ready.js";
import espressifReadyFamily from "./families/catalog-espressif-ready.js";
import semtechReadyFamily from "./families/catalog-semtech-ready.js";
import hilinkFamily from "./families/catalog-hilink.js";
import cellularGnssFamily from "./families/catalog-cellular-gnss.js";
import weactBluepillFamily from "./families/catalog-weact-bluepill.js";
import friendlyelecFamily from "./families/catalog-friendlyelec.js";
import bananapiFamily from "./families/catalog-bananapi.js";
import radxaFamily from "./families/catalog-radxa.js";
import lilygoFamily from "./families/catalog-lilygo.js";
import luckfoxFamily from "./families/catalog-luckfox.js";
import sipeedFpgaFamily from "./families/catalog-sipeed-fpga.js";
import sipeedLicheeFamily from "./families/catalog-sipeed-lichee.js";
import gowinGw1Gw2Family from "./families/catalog-gowin-gw1-gw2.js";
import gowinDisplayUsbFamily from "./families/catalog-gowin-display-usb.js";
import gowinProgrammersFamily from "./families/catalog-gowin-programmers.js";
import gowinSpecialFamily from "./families/catalog-gowin-special.js";
import gowinModernFamily from "./families/catalog-gowin-modern.js";
import gowinThirdPartyFamily from "./families/catalog-gowin-third-party.js";
import espressifMoreFamily from "./families/catalog-espressif-more.js";
import adafruitMoreFamily from "./families/catalog-ready-adafruit-more.js";
import arduinoMoreFamily from "./families/catalog-ready-arduino-more.js";
import sipeedMaixFamily from "./families/catalog-sipeed-maix.js";
import lilygoWirelessFamily from "./families/catalog-lilygo-wireless.js";
import friendlyelecMoreFamily from "./families/catalog-friendlyelec-more.js";
import bananapiMoreFamily from "./families/catalog-bananapi-more.js";
import radxaMoreFamily from "./families/catalog-radxa-more.js";
import nxpMoreFamily from "./families/catalog-ready-nxp-more.js";
import waveshareMoreFamily from "./families/catalog-ready-waveshare-more.js";

import semtechRadiosFamily from "./families/catalog-semtech.js";

// This ordered list is the only family registration point.
export const catalogFamilies = [
  breadboardFamily,
  coreModulesFamily,
  waveshareFamily,
  coreBasicsFamily,
  heltecSemtechFamily,
  semtechRadiosFamily,
  espRpFamily,
  arduinoFamily,
  stm32Family,
  nordicBoardsFamily,
  nordicFamily,
  powerFamily,
  spXtFamily,
  switchesMosfetsFamily,
  commonInterfacesFamily,
  commonPeripheralsFamily,
  commonPowerFamily,
  commonSensorsFamily,
  airQualitySensorsFamily,
  environmentSensorsFamily,
  forceSensorsFamily,
  motionSensorsFamily,
  raspberryPiFamily,
  pwmServosFamily,
  elrsFamily,
  usbUartFamily,
  flightControllersFamily,
  fpvNavigationFamily,
  waveshareExpansionFamily,
  prototypingIcsFamily,
  analogPrototypingFamily,
  audioPrototypingFamily,
  inputPrototypingFamily,
  adafruitReadyFamily,
  waveshareReadyFamily,
  nordicReadyFamily,
  nxpReadyFamily,
  arduinoReadyFamily,
  espressifReadyFamily,
  semtechReadyFamily,
  hilinkFamily,
  cellularGnssFamily,
  weactBluepillFamily,
  friendlyelecFamily,
  bananapiFamily,
  radxaFamily,
  lilygoFamily,
  luckfoxFamily,
  sipeedFpgaFamily,
  sipeedLicheeFamily,
  gowinGw1Gw2Family,
  gowinDisplayUsbFamily,
  gowinProgrammersFamily,
  gowinSpecialFamily,
  gowinModernFamily,
  gowinThirdPartyFamily,
  espressifMoreFamily,
  adafruitMoreFamily,
  arduinoMoreFamily,
  sipeedMaixFamily,
  lilygoWirelessFamily,
  friendlyelecMoreFamily,
  bananapiMoreFamily,
  radxaMoreFamily,
  nxpMoreFamily,
  waveshareMoreFamily,
];
