import * as React from "react";

import {Dimensions, PixelRatio, Platform} from "react-native";

export const deviceWidth = Math.round(Dimensions.get("window").width);
export const deviceHeight = Math.round(Dimensions.get("window").height);
export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

/**
 * As the design of Figma, the pixel is 750*1334
 * change px to dp depending on the different screen
 * @param designPx is the value we design
 * @return {number}
 * */
const designWidth = 750;
const designHeight = 1334;
export function getRealDP(designPx) {
  return PixelRatio.roundToNearestPixel((designPx / designWidth) * deviceWidth);
}
