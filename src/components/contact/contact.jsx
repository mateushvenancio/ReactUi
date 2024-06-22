import { AvatarSquare, Column, ContactContainer, Expand, Row, SubTitle, TopTitle } from "./contact.styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return <ContactContainer>
        <Column>
            <TopTitle>Your Feefo Support Contact</TopTitle>
            <Row>
                <AvatarSquare>S</AvatarSquare>
                <Column>
                    <SubTitle>Support</SubTitle>
                    <Row>
                        <FontAwesomeIcon icon={faEnvelope} color="#333333" />
                        support@feefo.com
                        <Expand />
                        020 3362 4208
                    </Row>
                </Column>
            </Row>
        </Column>
    </ContactContainer>
}