/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, {
    css,
    space,
    layout,
    border as borderStyle,
    themeGet,
    SpaceProps,
    LayoutProps,
    BorderProps,
} from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
import { Link } from "react-router-dom";

interface IProps extends SpaceProps, LayoutProps, BorderProps {
    $variant?: "contained" | "outlined" | "texted";
    $color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | "white"
        | "brand2"
        | "facebook"
        | "twitter";
    $size?: "xs" | "sm" | "md" | "lg";
    $shape?: "rounded" | "square" | "ellipse";
    $fullwidth?: boolean;
    $active?: boolean;
    disabled?: boolean;
    $iconButton?: boolean;
    $hasIcon?: boolean;
    $iconPosition?: "left" | "right";
    $iconSize?: "sm" | "md";
    $iconSpace?: string;
}

const buttonStyles = css<IProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    line-height: 1.5;
    user-select: none;
    border: 1px solid transparent;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover,
    &:active,
    &:focus {
        outline: none;
    }
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "primary" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.primary")};
            border-color: ${themeGet("colors.primary")};
            &:hover {
                background-color: ${tinycolor2(
                    themeGet("colors.primary")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.primary")(props))
                    .darken(14)
                    .toString()};
            }
            &:active,
            &:focus {
                background-color: ${tinycolor2(
                    themeGet("colors.primary")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.primary")(props))
                    .darken(14)
                    .toString()};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.primary")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "secondary" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.secondary")};
            border-color: ${themeGet("colors.secondary")};
            &:hover {
                background-color: ${tinycolor2(
                    themeGet("colors.secondary")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.secondary")(props))
                    .darken(14)
                    .toString()};
            }
            &:active,
            &:focus {
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.secondary")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "success" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.success")};
            border-color: ${themeGet("colors.success")};
            &:hover {
                background-color: ${tinycolor2(
                    themeGet("colors.success")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.success")(props))
                    .darken(14)
                    .toString()};
            }
            &:active,
            &:focus {
                background-color: ${tinycolor2(
                    themeGet("colors.success")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.success")(props))
                    .darken(10)
                    .toString()};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.success")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "danger" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.danger")};
            border-color: ${themeGet("colors.danger")};
            &:hover {
                background-color: ${tinycolor2(themeGet("colors.danger")(props))
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.danger")(props))
                    .darken(14)
                    .toString()};
            }
            &:active,
            &:focus {
                background-color: ${tinycolor2(themeGet("colors.danger")(props))
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.danger")(props))
                    .darken(14)
                    .toString()};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.danger")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "warning" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.warning")};
            border-color: ${themeGet("colors.warning")};
            &:hover {
                background-color: ${tinycolor2(
                    themeGet("colors.warning")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.warning")(props))
                    .darken(14)
                    .toString()};
            }
            &:active,
            &:focus {
                background-color: ${tinycolor2(
                    themeGet("colors.warning")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.warning")(props))
                    .darken(14)
                    .toString()};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.warning")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "info" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.info")};
            border-color: ${themeGet("colors.info")};
            &:hover {
                background-color: ${tinycolor2(themeGet("colors.info")(props))
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.info")(props))
                    .darken(14)
                    .toString()};
            }
            &:active,
            &:focus {
                background-color: ${tinycolor2(themeGet("colors.info")(props))
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.info")(props))
                    .darken(14)
                    .toString()};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.info")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "light" &&
        css`
            color: ${themeGet("colors.text2")};
            background-color: ${themeGet("colors.light")};
            border-color: ${themeGet("colors.light")};
            &:hover {
                color: ${themeGet("colors.gray900")};
                background-color: ${tinycolor2(themeGet("colors.light")(props))
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.light")(props))
                    .darken(14)
                    .toString()};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.gray900")};
                background-color: ${tinycolor2(themeGet("colors.light")(props))
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.light")(props))
                    .darken(14)
                    .toString()};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.light")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "dark" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.dark")};
            border-color: ${themeGet("colors.dark")};
            &:hover {
                background-color: ${tinycolor2(themeGet("colors.dark")(props))
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.dark")(props))
                    .darken(14)
                    .toString()};
            }
            &:active,
            &:focus {
                background-color: ${tinycolor2(themeGet("colors.dark")(props))
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.dark")(props))
                    .darken(14)
                    .toString()};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.dark")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}
 
    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "white" &&
        css`
            color: ${tinycolor2(themeGet("colors.text2")(props))
                .setAlpha(0.7)
                .toRgbString()};
            background-color: ${themeGet("colors.white")};
            border-color: ${themeGet("colors.text4")};

            &:hover {
                border-color: ${themeGet("colors.text3")};
                color: ${themeGet("colors.text2")};
            }

            &:active,
            &:focus {
                background-color: ${themeGet("colors.whisper")};
                border-color: ${themeGet("colors.text3")};
                color: ${themeGet("colors.text2")};
                box-shadow: none;
            }
        `}

	${(props) =>
        props.$variant === "contained" &&
        props.$color === "brand2" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.brand2")};
            border-color: ${themeGet("colors.brand2")};

            &:hover,
            &:active,
            &:focus {
                border-color: ${themeGet("colors.science")};
                background-color: ${themeGet("colors.science")};
                color: #fff;
                box-shadow: none;
            }
        `}
	${(props) =>
        props.$variant === "contained" &&
        props.$color === "facebook" &&
        css`
            background-color: ${themeGet("colors.facebook")};
            border-color: ${themeGet("colors.facebook")};
            color: #fff;
            &:hover {
                background-color: ${tinycolor2(
                    themeGet("colors.facebook")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.facebook")(props))
                    .darken(14)
                    .toString()};
                color: #fff;
            }
            &:active,
            &:focus {
                color: #fff;
                background-color: ${tinycolor2(
                    themeGet("colors.facebook")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.facebook")(props))
                    .darken(14)
                    .toString()};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.facebook")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}
	${(props) =>
        props.$variant === "contained" &&
        props.$color === "twitter" &&
        css`
            background-color: ${themeGet("colors.twitter")};
            border-color: ${themeGet("colors.twitter")};
            color: #fff;
            &:hover {
                background-color: ${tinycolor2(
                    themeGet("colors.twitter")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.twitter")(props))
                    .darken(14)
                    .toString()};
                color: #fff;
            }
            &:active,
            &:focus {
                color: #fff;
                background-color: ${tinycolor2(
                    themeGet("colors.twitter")(props)
                )
                    .darken(10)
                    .toString()};
                border-color: ${tinycolor2(themeGet("colors.twitter")(props))
                    .darken(14)
                    .toString()};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.twitter")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${({ $variant }) =>
        $variant === "outlined" &&
        css`
            background: transparent;
            border-width: 1px;
            border-style: solid;
        `}
    ${(props) =>
        props.$variant === "outlined" &&
        props.$color === "primary" &&
        css`
            color: ${themeGet("colors.primary")};
            border-color: ${themeGet("colors.primary")};
            &:hover {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.primary")};
                background-color: ${themeGet("colors.primary")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.primary")};
                background-color: ${themeGet("colors.primary")};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.primary")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "outlined" &&
        props.$color === "secondary" &&
        css`
            color: ${themeGet("colors.secondary")};
            border-color: ${themeGet("colors.secondary")};
            &:hover {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.secondary")};
                background-color: ${themeGet("colors.secondary")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.secondary")};
                background-color: ${themeGet("colors.secondary")};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.secondary")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "outlined" &&
        props.$color === "success" &&
        css`
            color: ${themeGet("colors.success")};
            border-color: ${themeGet("colors.success")};
            &:hover {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.success")};
                background-color: ${themeGet("colors.success")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.success")};
                background-color: ${themeGet("colors.success")};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.success")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "outlined" &&
        props.$color === "danger" &&
        css`
            color: ${themeGet("colors.danger")};
            border-color: ${themeGet("colors.danger")};
            &:hover {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.danger")};
                background-color: ${themeGet("colors.danger")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.danger")};
                background-color: ${themeGet("colors.danger")};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.danger")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "outlined" &&
        props.$color === "warning" &&
        css`
            color: ${themeGet("colors.warning")};
            border-color: ${themeGet("colors.warning")};
            &:hover {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.warning")};
                background-color: ${themeGet("colors.warning")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.warning")};
                background-color: ${themeGet("colors.warning")};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.warning")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "outlined" &&
        props.$color === "info" &&
        css`
            color: ${themeGet("colors.info")};
            border-color: ${themeGet("colors.info")};
            &:hover {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.info")};
                background-color: ${themeGet("colors.info")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.info")};
                background-color: ${themeGet("colors.info")};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.info")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "outlined" &&
        props.$color === "light" &&
        css`
            color: ${themeGet("colors.gray600")};
            border-color: ${themeGet("colors.gray400")};
            &:hover {
                color: ${themeGet("colors.gray900")};
                border-color: ${themeGet("colors.light")};
                background-color: ${themeGet("colors.light")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.gray900")};
                border-color: ${themeGet("colors.light")};
                background-color: ${themeGet("colors.light")};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.light")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

    ${(props) =>
        props.$variant === "outlined" &&
        props.$color === "dark" &&
        css`
            color: ${themeGet("colors.dark")};
            border-color: ${themeGet("colors.dark")};
            &:hover {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.dark")};
                background-color: ${themeGet("colors.dark")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.dark")};
                background-color: ${themeGet("colors.dark")};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.dark")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

	${(props) =>
        props.$variant === "outlined" &&
        props.$color === "brand2" &&
        css`
            color: ${themeGet("colors.brand2")};
            border-color: ${themeGet("colors.brand2")};
            &:hover {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.brand2")};
                background-color: ${themeGet("colors.brand2")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.brand2")};
                background-color: ${themeGet("colors.brand2")};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor2(themeGet("colors.brand2")(props))
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}

	${(props) =>
        props.$variant === "outlined" &&
        props.$color === "facebook" &&
        css`
            color: ${themeGet("colors.facebook")};
            border-color: ${themeGet("colors.facebook")};
            &:hover {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.facebook")};
                background-color: ${themeGet("colors.facebook")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.facebook")};
                background-color: ${themeGet("colors.facebook")};
                box-shadow: none;
            }
        `}

	
	${(props) =>
        props.$variant === "outlined" &&
        props.$color === "twitter" &&
        css`
            color: ${themeGet("colors.twitter")};
            border-color: ${themeGet("colors.twitter")};
            &:hover {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.twitter")};
                background-color: ${themeGet("colors.twitter")};
            }
            &:active,
            &:focus {
                color: ${themeGet("colors.white")};
                border-color: ${themeGet("colors.twitter")};
                background-color: ${themeGet("colors.twitter")};
                box-shadow: none;
            }
        `}

    ${({ $size }) =>
        $size === "xs" &&
        css`
            font-size: 12px;
            padding: 5px 0.9375rem;
        `}
    ${({ $size }) =>
        $size === "sm" &&
        css`
            font-size: 13px;
            padding: 0.391rem 15px;
        `}
    ${({ $size }) =>
        $size === "md" &&
        css`
            padding: 0.46875rem 0.9375rem;
            font-size: 0.875rem;
        `}
    ${({ $size }) =>
        $size === "lg" &&
        css`
            padding: 0.6rem 1rem;
            font-size: 0.875rem;
        `}
    ${({ $fullwidth }) =>
        $fullwidth &&
        css`
            display: block;
            width: 100%;
        `}

    ${({ $shape }) =>
        $shape === "rounded" &&
        css`
            border-radius: 0.25rem;
        `}

    ${({ $shape }) =>
        $shape === "square" &&
        css`
            border-radius: 0;
        `}
        
    ${({ $shape }) =>
        $shape === "ellipse" &&
        css`
            border-radius: 500px;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "primary" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.primary")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.primary")(props))
                .darken(10)
                .toString()}; ;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "secondary" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.secondary")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.secondary")(props))
                .darken(10)
                .toString()}; ;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "success" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.success")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.success")(props))
                .darken(10)
                .toString()}; ;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "danger" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.danger")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.danger")(props))
                .darken(10)
                .toString()}; ;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "warning" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.warning")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.warning")(props))
                .darken(10)
                .toString()}; ;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "info" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.info")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.info")(props))
                .darken(10)
                .toString()}; ;
        `}
    ${(props) =>
        props.$active &&
        props.$color === "light" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.light")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.light")(props))
                .darken(10)
                .toString()}; ;
        `}
    ${(props) =>
        props.$active &&
        props.$color === "dark" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.dark")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.dark")(props))
                .darken(10)
                .toString()}; ;
        `}
    ${(props) =>
        props.$active &&
        props.$color === "white" &&
        css`
            background-color: ${themeGet("colors.whisper")};
        `}
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.65;
            pointer-events: none;
        `}
    
    ${({ $variant }) =>
        $variant === "texted" &&
        css`
            padding: 0;
            background-color: transparent;
            border: none;
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "primary" &&
        css`
            color: ${themeGet("colors.primary")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "secondary" &&
        css`
            color: ${themeGet("colors.secondary")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "success" &&
        css`
            color: ${themeGet("colors.success")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "danger" &&
        css`
            color: ${themeGet("colors.danger")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "warning" &&
        css`
            color: ${themeGet("colors.warning")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "info" &&
        css`
            color: ${themeGet("colors.info")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "light" &&
        css`
            color: ${themeGet("colors.text")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "dark" &&
        css`
            color: ${themeGet("colors.dark")};
        `}
    ${({ $iconButton }) =>
        $iconButton &&
        css`
            line-height: 1;
        `}
    ${({ $iconButton, $size }) =>
        $iconButton &&
        $size === "xs" &&
        css`
            padding: 3px 6px;
        `}
    ${({ $iconButton, $size }) =>
        $iconButton &&
        $size === "md" &&
        css`
            padding: 5px 10px;
        `}

	${({ $iconButton, $size }) =>
        $iconButton &&
        $size === "md" &&
        css`
            svg {
                width: 18px;
                height: 18px;
                stroke-width: 2.5px;
                margin-top: -2px;
            }
        `}
    ${({ $hasIcon, $size }) =>
        $hasIcon &&
        $size === "sm" &&
        css`
            svg {
                width: 14px;
                height: 14px;
                stroke-width: 2.5px;
                margin-top: -2px;
                margin-right: 7px;
            }
        `}
	${({ $iconSize }) =>
        $iconSize === "sm" &&
        css`
            svg {
                width: 14px;
                height: 14px;
                stroke-width: 2.5px;
                margin-top: -2px;
            }
        `}
	${({ $iconPosition, $iconSpace }) =>
        $iconPosition === "left" &&
        !$iconSpace &&
        css`
            svg {
                margin-right: 7px;
            }
        `}
	${({ $iconPosition, $iconSpace }) =>
        $iconPosition === "left" &&
        $iconSpace &&
        css`
            svg {
                margin-right: ${$iconSpace};
            }
        `}
	${space};
    ${layout};
    ${borderStyle};
`;

export const StyledButton = styled(
    ({ mt, mb, ml, mr, px, py, display, borderWidth, ...props }) => (
        <button type="button" {...props} />
    )
)<IProps>`
    ${buttonStyles}
`;

export const StyledLink = styled(
    ({ mt, mb, ml, mr, px, py, display, borderWidth, ...props }) => (
        <Link {...props} />
    )
)<IProps>`
    ${buttonStyles}
`;

export const StyledAnchor = styled(
    ({ mt, mb, ml, mr, px, py, display, borderWidth, ...props }) => (
        <a {...props} />
    )
)<IProps>`
    ${buttonStyles}
`;
