import styled, { themeGet, css } from "@doar/shared/styled";

interface ITitle {
    $hasDesc?: boolean;
}

export const StyledTitle = styled.h6<ITitle>`
    ${({ $hasDesc }) =>
        !$hasDesc &&
        css`
            margin-bottom: 0;
        `}
    ${({ $hasDesc }) =>
        $hasDesc &&
        css`
            margin-bottom: 5px;
        `}
`;

export const StyledDesc = styled.p`
    color: ${themeGet("colors.text3")};
    font-size: 13px;
    margin-bottom: 0px;
`;
