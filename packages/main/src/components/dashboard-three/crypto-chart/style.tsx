import styled, { device, themeGet } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";
import NavLine, { NavLineLink } from "../../nav-link";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    ${device.small} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px;
        padding-bottom: 8px;
    }
`;

export const StyledNavLine = styled(({ ...rest }) => <NavLine {...rest} />)`
    border-bottom-width: 0 !important;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 0.5px;
`;

export const StyledNavLink = styled(({ ...rest }) => <NavLineLink {...rest} />)`
    &:not(:first-of-type) {
        margin-left: 10px;
    }
    &:after {
        height: 3px;
        bottom: -10px;
        border-radius: 0.25rem;
        display: none;
    }
    ${device.small} {
        &:after {
            display: block;
        }
    }
`;

export const StyledHeaderRight = styled.div`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    display: none;
    ${device.small} {
        display: flex;
        align-items: center;
    }
`;

export const StyledHeaderText = styled.span`
    letter-spacing: 0.5px;
    font-family: ${themeGet("fonts.rubik")};
    color: ${themeGet("colors.text")};
    font-weight: 400;
    i {
        margin-left: 2px;
        font-weight: 600;
        color: ${themeGet("colors.text2")};
    }
`;

export const StyledText = styled.span`
    margin-left: 10px;
    margin-right: 10px;
`;

export const StyledChart = styled.div`
    width: 100%;
    height: 284px;
    & > div {
        margin-left: -20px;
        margin-right: -10px;
    }
`;

export const StyledFooterTitle = styled.h6`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 10px;
`;

export const StyledFooterSub = styled.h5`
    font-family: ${themeGet("fonts.rubik")};
    line-height: 1.1;
    font-weight: 400;
    margin-right: 5px;
    margin-bottom: 0px;
    .danger {
        color: ${themeGet("colors.danger")};
    }
    i {
        font-weight: 600;
        font-size: 10px;
    }
`;
