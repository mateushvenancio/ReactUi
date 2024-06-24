import { Column, Expand, Row, SalesContainer, SalesInnerContainer, Spacer, Text, Title } from "./sales.styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Sales = (props) => {
    const { uploads, successfulUploads, linesAttempted, linesSaved } = props

    const successfulUploadsPercentage = Math.floor((successfulUploads / uploads) * 100);
    const linesSavedPercentage = Math.floor((linesSaved / linesAttempted) * 100)

    return (
        <SalesContainer>
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
                        You had <Text bold>{uploads} uploads</Text> and <Text bold>{linesAttempted}</Text> lines added.
                    </Text>
                </Row>
            </SalesInnerContainer>
            <Row>
                <SalesInnerContainer borderRight width='50%'>
                    <Column align='start'>
                        <Text fontSize='32px' color='#00A152' bold >{successfulUploadsPercentage}%</Text>
                        <Text transform='uppercase' bold>upload success</Text>
                    </Column>
                </SalesInnerContainer>
                <SalesInnerContainer width='50%'>
                    <Column align='start'>
                        <Text fontSize='32px' color='#00A152' bold >{linesSavedPercentage}%</Text>
                        <Text transform='uppercase' bold>Lines saved</Text>
                    </Column>
                </SalesInnerContainer>
            </Row>
        </SalesContainer>
    )
}

Sales.propTypes = {
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
    lastUploadDate: PropTypes.number.isRequired,
}

export default Sales