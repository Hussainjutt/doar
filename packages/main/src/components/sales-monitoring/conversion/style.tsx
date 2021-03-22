import styled, { themeGet, css } from "@doar/shared/styled";

export const StyledCardTitle = styled.h6`
    font-size: 11px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 8px;
`;

export const StyledCardBottom = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const StyledCardRate = styled.h3`
    line-height: 1.1;
    margin-right: 5px;
    margin-bottom: 0px;
    font-family: ${themeGet("fonts.rubik")};
`;

export const StyledCardText = styled.p`
    margin-bottom: 0px;
    color: ${themeGet("colors.text3")};
    font-size: 11px;
`;

export const StyledCardChangePercent = styled.span<{ $growth: string }>`
    font-weight: 500;
    ${({ $growth }) =>
        $growth === "up" &&
        css`
            color: ${themeGet("colors.success")};
        `}

    ${({ $growth }) =>
        $growth === "down" &&
        css`
            color: ${themeGet("colors.danger")};
        `}
`;

export const StyledChart = styled.div``;
