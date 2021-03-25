import { createGlobalStyle } from "styled-components";
import { device, theme } from "../styled";

import { IbmFontSans, InterUi, IonIcons, Rubik } from "../fonts";

const GlobalStyle = createGlobalStyle`
    ${IbmFontSans};
    ${InterUi};
    ${IonIcons};
    ${Rubik};
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    html {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        scroll-behavior: smooth;
        height: 100%;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    nav,
    section,
    summary {
        display: block;
    }
    audio,
    canvas,
    video {
        display: inline-block;
    }
    audio:not([controls]) {
        display: none;
        height: 0;
    }
    [hidden] {
        display: none;
    }
    html,
    button,
    input,
    select,
    textarea {
        font-family: "Source Sans Pro", Helvetica, sans-serif;
    }
    a:focus {
        outline: thin dotted;
    }
    a:active,
    a:hover {
        outline: 0;
    }
    b,
    strong {
        font-weight: bold;
    }
    blockquote,
    q {
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
        quotes: none;
    }
    small {
        font-size: smaller;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    sub {
        bottom: -0.25em;
    }
    li > ul,
    li > ol {
        margin: 0;
    }
    img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        vertical-align: middle;
    }
    svg:not(:root) {
        overflow: hidden;
    }
    figure {
        margin: 0;
    }
    form {
        margin: 0;
    }
    button,
    input,
    select,
    textarea {
        font-size: 100%;
        margin: 0;
        max-width: 100%;
        vertical-align: baseline;
    }

    button,
    input {
        line-height: normal;
    }

    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        cursor: pointer;
    }

    button[disabled],
    input[disabled] {
        cursor: default;
    }

    input[type="checkbox"],
    input[type="radio"] {
        padding: 0;
    }

    input[type="search"] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
        appearance: textfield;
        padding-right: 2px;
        width: 100%;
    }

    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    textarea {
        overflow: auto;
        vertical-align: top;
    }
    * {
        box-sizing: border-box;
    }
    img {
        max-width: 100%;
    }
    html {
        overflow: hidden;
        overflow-y: auto;
    }
    body {
        overflow: hidden;
        margin: 0;
        padding: 0;
        line-height: ${theme.lineHeights.body};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${theme.fonts.body};
        font-weight: ${theme.fontWeights.body};
        color: ${theme.colors.text};
        font-size: ${theme.fontSize.body};
        background: ${theme.colors.background};
    }
    a {
        transition: ${theme.transition};
        color: ${theme.colors.primary};
        text-decoration: none;
        &:hover {
            text-decoration: none;
        }
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        font-family: ${theme.fonts.heading};
        line-height: ${theme.lineHeights.heading};
        color: ${theme.colors.heading};
        font-weight: ${theme.fontWeights.heading};
        margin: 0;
        margin-bottom: 8px;
    }
    h1,
    .h1 {
        font-size: ${theme.fontSize.h1[0]};
        ${device.small} {
            font-size: ${theme.fontSize.h1[1]};
        }
        ${device.medium} {
            font-size: ${theme.fontSize.h1[2]};
        }
        ${device.large} {
            font-size: ${theme.fontSize.h1[3]};
        }
    }
    h2,
    .h2 {
        font-size: ${theme.fontSize.h2[0]};
        ${device.medium} {
            font-size: ${theme.fontSize.h2[1]};
        }
        ${device.large} {
            font-size: ${theme.fontSize.h2[2]};
        }
    }
    h3,
    .h3 {
        font-size: ${theme.fontSize.h3[0]};
        ${device.large} {
            font-size: ${theme.fontSize.h3[1]};
        }
    }
    h4,
    .h4 {
        font-size: ${theme.fontSize.h4[0]};
        ${device.large} {
            font-size: ${theme.fontSize.h4[1]};
        }
    }
    h5,
    .h5 {
        font-size: ${theme.fontSize.h5[0]};
        ${device.large} {
            font-size: ${theme.fontSize.h5[1]};
        }
    }
    h6,
    .h6 {
        font-size: ${theme.fontSize.h6[0]};
        ${device.large} {
            font-size: ${theme.fontSize.h6[1]};
        }
    }
    p {
        margin: 0 0 15px;
        font-family: ${theme.fonts.body};
        color: ${theme.colors.text};
        &:last-child {
            margin-bottom: 0;
        }
        &:only-child {
            margin-bottom: 0;
        }
    }
    input,
    select,
    textarea {
        background: transparent;
        border: 1px solid ${theme.colors.border};
        transition: ${theme.transition};
        color: ${theme.colors.text};
        &:focus,
        &:active {
            outline: none;
            border-color: ${theme.colors.primary};
        }
    }
    input,
    select,
    textarea {
        width: 100%;
        font-size: 14px;
    }
    input,
    select {
        height: 40px;
        padding: 0 15px;
    }
    .wrapper {
        position: relative;
    }
    .container {
        max-width: 100%;
        ${device.medium}{
            max-width: 720px;
        }
        ${device.large}{
            max-width: 960px;
        }
        ${device.xlarge} {
            max-width: 1200px;
        }
    }
    .sr-only {
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    .link-overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        text-indent: -99999px;
    }
    table{
        border-collapse: collapse;
    }
    th {
        text-align: inherit;
    }
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }
    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

export default GlobalStyle;
