import PropTypes from 'prop-types';

import { AvatarSquare, Column, ContactContainer, Expand, Row, SubTitle, TopTitle } from "./contact.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {
    const { name, email } = props
    return <ContactContainer>
        <Column>
            <TopTitle>Your Feefo Support Contact</TopTitle>
            <Row>
                <AvatarSquare>{name[0]}</AvatarSquare>
                <Column>
                    <SubTitle>{name}</SubTitle>
                    <Row>
                        <FontAwesomeIcon icon={faEnvelope} color="#555555" />
                        {email}
                        <Expand />
                        020 3362 4208
                    </Row>
                </Column>
            </Row>
        </Column>
    </ContactContainer>
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default Contact