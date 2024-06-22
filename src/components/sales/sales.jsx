import { Expand, Row, SalesContainer, SalesInnerContainer, Text, Title } from "./sales.styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Sales() {
    return <SalesContainer>
        <SalesInnerContainer>
            <Row>
                <FontAwesomeIcon icon={faUpload} color="#2db0e3" />
                <Title>Sales</Title>
                <Expand />
                <FontAwesomeIcon icon={faInfoCircle} color="#d1d1d1" />
            </Row>
            <Text>
                You had <Text bold>0 uploads</Text> and <Text bold>0</Text> lines added.
            </Text>
        </SalesInnerContainer>
        <Row>
            <SalesInnerContainer>
                0% upload success
            </SalesInnerContainer>
            <SalesInnerContainer>
                0% lines saved
            </SalesInnerContainer>
        </Row>
    </SalesContainer>
}