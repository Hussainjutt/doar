import styled, { device, css } from "@doar/shared/styled";

export const StyledMain = styled.div<{ $sidebar?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    opacity: 0;
    transform: translateX(100vw);
    transition: all 0.3s;
    ${device.small} {
        transform: translateX(310px);
    }
    ${device.large} {
        opacity: 1;
        left: 310px;
        transform: none;
        visibility: visible;
    }
    ${({ $sidebar }) =>
        $sidebar &&
        css`
            @media (max-width: 991.98px) {
                opacity: 1;
                visibility: visible;
                transform: translateX(0);
            }
        `}
`;

export const StyledHeader = styled.div`
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px 10px 20px;
`;

export const StyledHeaderRight = styled.div`
    display: flex;
`;

export const StyledBody = styled.div<{ $showSidebar?: boolean }>`
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 60px;
    ${({ $showSidebar }) =>
        !!$showSidebar &&
        css`
            ${device.medium} {
                margin-right: 230px;
            }
        `}
`;

export const StyledBodyInner = styled.div`
    width: 100%;
    height: 100%;
`;

export const StyledFooter = styled.div`
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid rgba(72, 94, 144, 0.16);
    height: 60px;
`;

export const StyledSidebar = styled.div<{ $showSidebar?: boolean }>`
    background-color: #fff;
    width: 230px;
    position: absolute;
    top: 60px;
    bottom: 60px;
    right: 0;
    display: none;
    border-left: 1px solid rgba(72, 94, 144, 0.16);
    ${({ $showSidebar }) =>
        !!$showSidebar &&
        css`
            display: block;
        `}
`;