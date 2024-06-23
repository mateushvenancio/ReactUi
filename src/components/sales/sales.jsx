import { Column, Expand, Row, SalesContainer, SalesInnerContainer, Spacer, Text, Title } from "./sales.styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Sales() {
    return <SalesContainer>
        <SalesInnerContainer borderBottom>
            <Row>
                <FontAwesomeIcon icon={faUpload} color="#2db0e3" />
                <Spacer width='8px' />
                <Title>Sales</Title>
                <Expand />
                <FontAwesomeIcon icon={faInfoCircle} color="#d1d1d1" />
            </Row>
            <Spacer height='16px' />
            <Row align='start'>
                <Text>
                    You had <Text bold>0 uploads</Text> and <Text bold>0</Text> lines added.
                </Text>
            </Row>
        </SalesInnerContainer>
        <Row>
            <SalesInnerContainer borderRight width='50%'>
                <Column align='start'>
                    <Text fontSize='32px' color='green' bold >0%</Text>
                    <Text transform='uppercase' bold>upload success</Text>
                </Column>
            </SalesInnerContainer>
            <SalesInnerContainer width='50%'>
                <Column align='start'>
                    <Text fontSize='32px' color='green' bold >0%</Text>
                    <Text transform='uppercase' bold>Lines saved</Text>
                </Column>
            </SalesInnerContainer>
        </Row>
    </SalesContainer>
}