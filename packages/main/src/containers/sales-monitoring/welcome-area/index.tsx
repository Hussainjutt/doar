import React from "react";
import { Mail, Printer, File } from "react-feather";
import PageHeader from "../../../components/page-header";
import {
    StyledWelcomeArea,
    StyledWelcomeLeft,
    StyledWelcomeRight,
    StyledButton,
} from "./style";

const WelcomeArea: React.FC = () => {
    return (
        <StyledWelcomeArea>
            <StyledWelcomeLeft>
                <PageHeader />
            </StyledWelcomeLeft>
            <StyledWelcomeRight>
                <StyledButton size="sm" color="white" hasIcon>
                    <Mail />
                    Email
                </StyledButton>
                <StyledButton size="sm" color="white" hasIcon ml="5px">
                    <Printer />
                    Print
                </StyledButton>
                <StyledButton size="sm" ml="5px" hasIcon>
                    <File />
                    Generate Report
                </StyledButton>
            </StyledWelcomeRight>
        </StyledWelcomeArea>
    );
};

export default WelcomeArea;
