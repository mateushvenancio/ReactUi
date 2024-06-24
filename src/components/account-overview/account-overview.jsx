import React from 'react';
import PropTypes from 'prop-types';

import { Contact, Sales } from '..'
import { AccountOverviewContainer, Row, Spacer, Title } from './account-overview.styled';

export const AccountOverview = ({ data }) => {
    const { supportContact, salesOverview } = data

    return (
        <AccountOverviewContainer>
            <Row>
                <Title>Account Overview</Title>
                <Contact {...supportContact} />
            </Row>
            <Spacer height='45px' />
            <Sales {...salesOverview} />
        </AccountOverviewContainer>
    )
}

AccountOverview.propTypes = {
    data: PropTypes.shape({
        supportContact: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired,
        salesOverview: PropTypes.shape({
            uploads: PropTypes.number.isRequired,
            successfulUploads: PropTypes.number.isRequired,
            linesAttempted: PropTypes.number.isRequired,
            linesSaved: PropTypes.number.isRequired,
            lastUploadDate: PropTypes.number.isRequired,
        })
    })
}

export default AccountOverview;