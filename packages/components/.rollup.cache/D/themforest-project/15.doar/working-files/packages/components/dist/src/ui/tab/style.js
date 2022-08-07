import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css, themeGet } from "@doar/shared/styled";
import { Tabs } from "react-tabs";
export var StyledTabs = styled(function (_a) {
    var rest = __rest(_a, []);
    return _jsx(Tabs, __assign({}, rest));
})(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    ", "\n    .react-tabs {\n        &__tab-list {\n            display: flex;\n            flex-wrap: wrap;\n            border-color: ", ";\n            ", "\n            ", "\n        }\n        &__tab {\n            margin-bottom: 0;\n            background-color: ", ";\n            border-color: ", ";\n            color: ", ";\n            border-bottom-width: 0;\n            position: relative;\n            margin-bottom: -1px;\n            padding: 0 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 38px;\n            transition: background-color 0.2s;\n            border: 1px solid transparent;\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem;\n            cursor: pointer;\n            &:not(:first-of-type) {\n                margin-left: 5px;\n            }\n            &--selected {\n                background-color: #fff;\n                z-index: 5;\n                color: ", ";\n                border-color: ", "\n                    ", " #fff;\n            }\n            &--disabled {\n                background-color: transparent;\n                color: ", ";\n                border-color: transparent;\n                pointer-events: none;\n                cursor: default;\n            }\n            ", "\n            ", "\n\t\t\t", "\n                ", "\n        }\n        &__tab-panel {\n            transition: all 0.15s linear;\n            display: none;\n            height: 0;\n            max-width: 100%;\n            visibility: hidden;\n            overflow: hidden;\n            opacity: 0;\n            &--selected {\n                display: block;\n                height: auto;\n                visibility: visible;\n                opacity: 1;\n                overflow: visible;\n            }\n        }\n        &__content {\n            ", "\n            ", "\n        }\n    }\n"], ["\n    ", "\n    .react-tabs {\n        &__tab-list {\n            display: flex;\n            flex-wrap: wrap;\n            border-color: ", ";\n            ", "\n            ", "\n        }\n        &__tab {\n            margin-bottom: 0;\n            background-color: ", ";\n            border-color: ", ";\n            color: ", ";\n            border-bottom-width: 0;\n            position: relative;\n            margin-bottom: -1px;\n            padding: 0 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 38px;\n            transition: background-color 0.2s;\n            border: 1px solid transparent;\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem;\n            cursor: pointer;\n            &:not(:first-of-type) {\n                margin-left: 5px;\n            }\n            &--selected {\n                background-color: #fff;\n                z-index: 5;\n                color: ", ";\n                border-color: ", "\n                    ", " #fff;\n            }\n            &--disabled {\n                background-color: transparent;\n                color: ", ";\n                border-color: transparent;\n                pointer-events: none;\n                cursor: default;\n            }\n            ", "\n            ", "\n\t\t\t", "\n                ", "\n        }\n        &__tab-panel {\n            transition: all 0.15s linear;\n            display: none;\n            height: 0;\n            max-width: 100%;\n            visibility: hidden;\n            overflow: hidden;\n            opacity: 0;\n            &--selected {\n                display: block;\n                height: auto;\n                visibility: visible;\n                opacity: 1;\n                overflow: visible;\n            }\n        }\n        &__content {\n            ", "\n            ", "\n        }\n    }\n"])), function (_a) {
    var $vertical = _a.$vertical;
    return $vertical === true && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            display: flex;\n            align-items: flex-start;\n        "], ["\n            display: flex;\n            align-items: flex-start;\n        "])));
}, themeGet("colors.border"), function (_a) {
    var $vertical = _a.$vertical;
    return $vertical === true && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                    border-bottom: 0;\n                    border-right: 0;\n                    justify-content: flex-start;\n                    flex-direction: column;\n                    width: 150px;\n                "], ["\n                    border-bottom: 0;\n                    border-right: 0;\n                    justify-content: flex-start;\n                    flex-direction: column;\n                    width: 150px;\n                "])));
}, function (_a) {
    var $variation = _a.$variation;
    return $variation === "line" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                    border-bottom: 2px solid ", ";\n                "], ["\n                    border-bottom: 2px solid ", ";\n                "])), themeGet("colors.border"));
}, themeGet("colors.border"), themeGet("colors.border"), themeGet("colors.gray700"), themeGet("colors.primary"), themeGet("colors.gray300"), themeGet("colors.gray300"), themeGet("colors.gray400"), function (_a) {
    var $justified = _a.$justified;
    return $justified === true && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                    flex-basis: 0;\n                    flex-grow: 1;\n                    text-align: center;\n                "], ["\n                    flex-basis: 0;\n                    flex-grow: 1;\n                    text-align: center;\n                "])));
}, function (_a) {
    var $vertical = _a.$vertical;
    return $vertical === true && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                    border-color: ", ";\n                    border-right-width: 0;\n                    margin-bottom: 0;\n                    margin-right: -1px;\n                    border-top-right-radius: 0;\n                    border-bottom-right-radius: 0;\n                    border-top-left-radius: 0.25rem;\n                    border-bottom-left-radius: 0.25rem;\n                    &:not(:first-of-type) {\n                        margin-left: 0;\n                        margin-top: 5px;\n                    }\n                    &--selected {\n                        border-color: ", ";\n                    }\n                "], ["\n                    border-color: ", ";\n                    border-right-width: 0;\n                    margin-bottom: 0;\n                    margin-right: -1px;\n                    border-top-right-radius: 0;\n                    border-bottom-right-radius: 0;\n                    border-top-left-radius: 0.25rem;\n                    border-bottom-left-radius: 0.25rem;\n                    &:not(:first-of-type) {\n                        margin-left: 0;\n                        margin-top: 5px;\n                    }\n                    &--selected {\n                        border-color: ", ";\n                    }\n                "])), themeGet("colors.border"), themeGet("colors.border"));
}, function (_a) {
    var $variation = _a.$variation;
    return $variation === "line" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                    padding: 8px 0;\n                    background-color: transparent;\n                    border: none;\n                    border-radius: 0;\n                    &:not(:first-of-type) {\n                        margin-left: 25px;\n                    }\n                    &--selected {\n                        border: none;\n                        background-color: transparent;\n                        &:after {\n                            content: \"\";\n                            position: absolute;\n                            bottom: -1px;\n                            left: 0;\n                            right: 0;\n                            height: 2px;\n                            background-color: ", ";\n                        }\n                    }\n                "], ["\n                    padding: 8px 0;\n                    background-color: transparent;\n                    border: none;\n                    border-radius: 0;\n                    &:not(:first-of-type) {\n                        margin-left: 25px;\n                    }\n                    &--selected {\n                        border: none;\n                        background-color: transparent;\n                        &:after {\n                            content: \"\";\n                            position: absolute;\n                            bottom: -1px;\n                            left: 0;\n                            right: 0;\n                            height: 2px;\n                            background-color: ", ";\n                        }\n                    }\n                "])), themeGet("colors.primary"));
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                    color: ", ";\n                "], ["\n                    color: ", ";\n                "])), themeGet("colors.gray300"));
}, function (_a) {
    var $vertical = _a.$vertical;
    return $vertical === true && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                    flex: 1;\n                "], ["\n                    flex: 1;\n                "])));
}, function (_a) {
    var $variation = _a.$variation;
    return $variation === "line" && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                    border: none;\n                    padding: 0;\n                    margin-top: 20px;\n                "], ["\n                    border: none;\n                    padding: 0;\n                    margin-top: 20px;\n                "])));
});
export var StyledTabContent = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    padding: 20px;\n    border-top: 0;\n    border: 1px solid ", ";\n    ", "\n"], ["\n    padding: 20px;\n    border-top: 0;\n    border: 1px solid ", ";\n    ", "\n"])), themeGet("colors.gray300"), function (props) {
    return props.theme.name === "dark" && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n            border-color: ", ";\n        "], ["\n            border-color: ", ";\n        "])), themeGet("colors.gray500"));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
