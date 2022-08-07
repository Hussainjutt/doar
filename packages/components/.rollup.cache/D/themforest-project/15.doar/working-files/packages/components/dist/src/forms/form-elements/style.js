import { __makeTemplateObject, __read, __spreadArray } from "tslib";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { themeGet, css, space, border as borderStyles, device, } from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
export var InputStyles = css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    display: block;\n    width: 100%;\n    height: 38px;\n    padding: 0.46875rem 0.625rem;\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: 400;\n    line-height: ", ";\n    color: ", ";\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n    ", "\n\n    ", "\n\n    &::placeholder {\n        color: ", ";\n        font-size: ", ";\n        font-family: ", ";\n    }\n    &:-ms-input-placeholder {\n        color: ", ";\n        font-size: ", ";\n        font-family: ", ";\n    }\n    &::-ms-input-placeholder {\n        color: ", ";\n        font-size: ", ";\n        font-family: ", ";\n    }\n    &:disabled,\n    &[readonly] {\n        background-color: ", ";\n    }\n    &:focus {\n        color: ", ";\n        background-color: #fff;\n        border-color: ", ";\n        outline: 0;\n        box-shadow: ", ";\n    }\n\n    ", "\n\n    ", "\n    ", "\n\n    ", ";\n    ", ";\n"], ["\n    display: block;\n    width: 100%;\n    height: 38px;\n    padding: 0.46875rem 0.625rem;\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: 400;\n    line-height: ", ";\n    color: ", ";\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n    ", "\n\n    ", "\n\n    &::placeholder {\n        color: ", ";\n        font-size: ", ";\n        font-family: ", ";\n    }\n    &:-ms-input-placeholder {\n        color: ", ";\n        font-size: ", ";\n        font-family: ", ";\n    }\n    &::-ms-input-placeholder {\n        color: ", ";\n        font-size: ", ";\n        font-family: ", ";\n    }\n    &:disabled,\n    &[readonly] {\n        background-color: ", ";\n    }\n    &:focus {\n        color: ", ";\n        background-color: #fff;\n        border-color: ", ";\n        outline: 0;\n        box-shadow: ", ";\n    }\n\n    ", "\n\n    ", "\n    ", "\n\n    ", ";\n    ", ";\n"])), themeGet("fontSize.body"), themeGet("fonts.body"), themeGet("lineHeights.body"), themeGet("colors.text2"), themeGet("colors.text4"), themeGet("radii.rounded"), function (_a) {
    var $width = _a.$width;
    return !!$width && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            ", "\n            ", "\n        "], ["\n            ", "\n            ", "\n        "])), !Array.isArray($width) && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                width: ", ";\n            "], ["\n                width: ", ";\n            "])), $width), Array.isArray($width) && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                width: ", ";\n                ", " {\n                    width: ", ";\n                }\n                ", " {\n                    width: ", ";\n                }\n                ", " {\n                    width: ", ";\n                }\n                ", " {\n                    width: ", ";\n                }\n            "], ["\n                width: ", ";\n                ", " {\n                    width: ", ";\n                }\n                ", " {\n                    width: ", ";\n                }\n                ", " {\n                    width: ", ";\n                }\n                ", " {\n                    width: ", ";\n                }\n            "])), $width[0], device.small, $width[1], device.medium, $width[2], device.large, $width[3], device.xlarge, $width[4]));
}, function (_a) {
    var $height = _a.$height;
    return !!$height && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            ", "\n            ", "\n        "], ["\n            ", "\n            ", "\n        "])), !Array.isArray($height) && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                height: ", ";\n            "], ["\n                height: ", ";\n            "])), $height), Array.isArray($height) && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                height: ", ";\n                ", " {\n                    height: ", ";\n                }\n                ", " {\n                    height: ", ";\n                }\n                ", " {\n                    height: ", ";\n                }\n                ", " {\n                    height: ", ";\n                }\n            "], ["\n                height: ", ";\n                ", " {\n                    height: ", ";\n                }\n                ", " {\n                    height: ", ";\n                }\n                ", " {\n                    height: ", ";\n                }\n                ", " {\n                    height: ", ";\n                }\n            "])), $height[0], device.small, $height[1], device.medium, $height[2], device.large, $height[3], device.xlarge, $height[4]));
}, themeGet("colors.text4"), themeGet("fontSize.body"), themeGet("fonts.body"), themeGet("colors.text4"), themeGet("fontSize.body"), themeGet("fonts.body"), themeGet("colors.text4"), themeGet("fontSize.body"), themeGet("fonts.body"), themeGet("colors.whisper"), themeGet("colors.gray700"), function (props) {
    return tinycolor2(props.theme.colors.primary)
        .lighten(25)
        .toString();
}, themeGet("shadows.input"), function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "noborder" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            padding: 0;\n            color: ", ";\n            border-width: 0;\n            background-color: transparent;\n            &:focus {\n                box-shadow: none;\n                color: ", ";\n            }\n        "], ["\n            padding: 0;\n            color: ", ";\n            border-width: 0;\n            background-color: transparent;\n            &:focus {\n                box-shadow: none;\n                color: ", ";\n            }\n        "])), themeGet("colors.text"), themeGet("colors.text"));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "nofocus" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            &:focus {\n                box-shadow: none;\n            }\n        "], ["\n            &:focus {\n                box-shadow: none;\n            }\n        "])));
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            background-color: transparent;\n            border-color: ", ";\n            color: ", ";\n            &::placeholder {\n                color: ", ";\n            }\n            &:-ms-input-placeholder {\n                color: ", ";\n            }\n            &::-ms-input-placeholder {\n                color: ", ";\n            }\n            &:focus {\n                background-color: transparent;\n            }\n        "], ["\n            background-color: transparent;\n            border-color: ", ";\n            color: ", ";\n            &::placeholder {\n                color: ", ";\n            }\n            &:-ms-input-placeholder {\n                color: ", ";\n            }\n            &::-ms-input-placeholder {\n                color: ", ";\n            }\n            &:focus {\n                background-color: transparent;\n            }\n        "])), themeGet("colors.gray800"), themeGet("colors.gray300"), themeGet("colors.gray300"), themeGet("colors.gray300"), themeGet("colors.gray300"));
}, space, borderStyles);
export var SuccessInputStyles = css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    border-color: ", ";\n    padding-right: calc(1.5em + 0.9375rem);\n    background-repeat: no-repeat;\n    background-position: right calc(0.375em + 0.23438rem) center;\n    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);\n    &:focus {\n        border-color: ", ";\n        box-shadow: 0 0 0 0.2rem rgb(16 183 89 / 25%);\n    }\n"], ["\n    border-color: ", ";\n    padding-right: calc(1.5em + 0.9375rem);\n    background-repeat: no-repeat;\n    background-position: right calc(0.375em + 0.23438rem) center;\n    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);\n    &:focus {\n        border-color: ", ";\n        box-shadow: 0 0 0 0.2rem rgb(16 183 89 / 25%);\n    }\n"])), themeGet("colors.success"), themeGet("colors.success"));
export var WarningInputStyles = css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    border-color: ", ";\n    padding-right: calc(1.5em + 0.9375rem);\n    background-repeat: no-repeat;\n    background-position: right calc(0.375em + 0.23438rem) center;\n    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);\n    &:focus {\n        border-color: ", ";\n        box-shadow: 0 0 0 0.2rem rgb(255 193 7 / 25%);\n    }\n"], ["\n    border-color: ", ";\n    padding-right: calc(1.5em + 0.9375rem);\n    background-repeat: no-repeat;\n    background-position: right calc(0.375em + 0.23438rem) center;\n    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);\n    &:focus {\n        border-color: ", ";\n        box-shadow: 0 0 0 0.2rem rgb(255 193 7 / 25%);\n    }\n"])), themeGet("colors.warning"), themeGet("colors.warning"));
export var ErrorInputStyles = css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    border-color: ", ";\n    padding-right: calc(1.5em + 0.9375rem);\n    background-repeat: no-repeat;\n    background-position: right calc(0.375em + 0.23438rem) center;\n    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);\n    &:focus {\n        border-color: ", ";\n        box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);\n    }\n"], ["\n    border-color: ", ";\n    padding-right: calc(1.5em + 0.9375rem);\n    background-repeat: no-repeat;\n    background-position: right calc(0.375em + 0.23438rem) center;\n    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);\n    &:focus {\n        border-color: ", ";\n        box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);\n    }\n"])), themeGet("colors.danger"), themeGet("colors.danger"));
export var allowedProps = [
    "width",
    "height",
    "p",
    "px",
    "py",
    "pl",
    "pr",
    "pt",
    "pb",
    "m",
    "mx",
    "my",
    "ml",
    "mr",
    "mt",
    "mb",
    "color",
    "border",
    "borderWidth",
    "fontSize",
    "fontWeight",
];
export var StyledBoxWrap = styled("div").withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !__spreadArray([], __read(allowedProps), false).includes(prop) && defaultValidatorFn(prop);
    },
})(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    min-height: inherit;\n    position: relative;\n    display: block;\n    padding-left: 1.5rem;\n    ", ";\n"], ["\n    min-height: inherit;\n    position: relative;\n    display: block;\n    padding-left: 1.5rem;\n    ", ";\n"])), space);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
