import { FC } from "react";
import { Card, CardBody } from "@doar/components";
import {
    StyledHeader,
    StyledTitle,
    StyledRange,
    StyledTable,
    StyledHeadTR,
    StyledTH,
    StyledTD,
    StyledIcon,
} from "./style";

const Browsers: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <StyledTitle>Browser Used By Users</StyledTitle>
                <StyledRange>
                    Mar 01 - Mar 20, 2019{" "}
                    <i className="icon ion-ios-arrow-down" />
                </StyledRange>
            </StyledHeader>
            <CardBody py={["15px", "15px"]} px={["10px", "10px"]}>
                <StyledTable borderless compact mb="0px">
                    <thead>
                        <StyledHeadTR>
                            <StyledTH width="5%">&npsp;</StyledTH>
                            <StyledTH>Browser</StyledTH>
                            <StyledTH textAlign="right">Sessions</StyledTH>
                            <StyledTH textAlign="right">Bounce Rate</StyledTH>
                            <StyledTH textAlign="right">
                                Conversion Rate
                            </StyledTH>
                        </StyledHeadTR>
                    </thead>
                    <tbody>
                        <tr>
                            <StyledTD textAlign="center">
                                <StyledIcon
                                    className="fab fa-chrome"
                                    color="primary"
                                />
                            </StyledTD>
                            <StyledTD fontWeight={500}>Google Chrome</StyledTD>
                            <StyledTD textAlign="right">13,410</StyledTD>
                            <StyledTD fontWeight={500} textAlign="right">
                                40.95%
                            </StyledTD>
                            <StyledTD textAlign="right">19.45%</StyledTD>
                        </tr>
                        <tr>
                            <StyledTD textAlign="center">
                                <StyledIcon
                                    className="fab fa-firefox"
                                    color="orange"
                                />
                            </StyledTD>
                            <StyledTD fontWeight={500}>
                                Mozilla Firefox
                            </StyledTD>
                            <StyledTD textAlign="right">1,710</StyledTD>
                            <StyledTD fontWeight={500} textAlign="right">
                                47.58%
                            </StyledTD>
                            <StyledTD textAlign="right">19.99%</StyledTD>
                        </tr>
                        <tr>
                            <StyledTD textAlign="center">
                                <StyledIcon
                                    className="fab fa-safari"
                                    color="primary"
                                />
                            </StyledTD>
                            <StyledTD fontWeight={500}>Apple Safari</StyledTD>
                            <StyledTD textAlign="right">1,340</StyledTD>
                            <StyledTD fontWeight={500} textAlign="right">
                                56.50%
                            </StyledTD>
                            <StyledTD textAlign="right">11.00%</StyledTD>
                        </tr>
                        <tr>
                            <StyledTD textAlign="center">
                                <StyledIcon
                                    className="fab fa-edge"
                                    color="primary"
                                />
                            </StyledTD>
                            <StyledTD fontWeight={500}>Microsoft Edge</StyledTD>
                            <StyledTD textAlign="right">713</StyledTD>
                            <StyledTD fontWeight={500} textAlign="right">
                                59.62%
                            </StyledTD>
                            <StyledTD textAlign="right">4.69%</StyledTD>
                        </tr>
                        <tr>
                            <StyledTD textAlign="center">
                                <StyledIcon
                                    className="fab fa-opera"
                                    color="danger"
                                />
                            </StyledTD>
                            <StyledTD fontWeight={500}>Opera</StyledTD>
                            <StyledTD textAlign="right">380</StyledTD>
                            <StyledTD fontWeight={500} textAlign="right">
                                52.50%
                            </StyledTD>
                            <StyledTD textAlign="right">8.75%</StyledTD>
                        </tr>
                    </tbody>
                </StyledTable>
            </CardBody>
        </Card>
    );
};

export default Browsers;
