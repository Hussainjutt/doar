import { FC } from "react";
import { Phone, Video, MessageSquare, Share, Star, Slash } from "react-feather";
import { Avatar, AvatarInitial, HRLine } from "@doar/components";
import EditPhotoButton from "../edit-photo-button";
import Label from "../label-2";
import {
    StyledWrap,
    StyledTopDiv,
    StyledAvatar,
    StyledName,
    StyledRole,
    StyledBtns,
    StyledNavBtn,
    StyledBio,
    StyledNav,
    StyledLink,
} from "./style";

const RightSidebar: FC = () => {
    return (
        <StyledWrap>
            <StyledTopDiv>
                <StyledAvatar>
                    <Avatar size="xl">
                        <AvatarInitial bg="gray700" fontWeight={400}>
                            A
                        </AvatarInitial>
                    </Avatar>
                    <EditPhotoButton />
                </StyledAvatar>
            </StyledTopDiv>
            <StyledName>Abigail Johnson</StyledName>
            <StyledRole>President &amp; CEO - ThemePixels, Inc.</StyledRole>
            <StyledBtns>
                <StyledNavBtn bg="teal">
                    <Phone />
                </StyledNavBtn>
                <StyledNavBtn bg="pink">
                    <Video />
                </StyledNavBtn>
                <StyledNavBtn bg="primary">
                    <MessageSquare />
                </StyledNavBtn>
            </StyledBtns>
            <Label>Biography</Label>
            <StyledBio>
                Gambler, Tea Drinker, Ultimate Piggie, Replacement President of
                a Major Soft Drink Manufacturer. When I give out candies, I give
                people the flavour I don&apos;t like.
            </StyledBio>
            <HRLine my="20px" />
            <StyledNav>
                <StyledLink path="#!">
                    <Share /> Share this Contact
                </StyledLink>
                <StyledLink path="#!">
                    <Star /> Share this Contact
                </StyledLink>
                <StyledLink path="#!">
                    <Slash /> Share this Contact
                </StyledLink>
            </StyledNav>
        </StyledWrap>
    );
};

export default RightSidebar;
