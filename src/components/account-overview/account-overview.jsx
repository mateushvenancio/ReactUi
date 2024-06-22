import React from 'react';
import { Contact, Sales } from '..'
import { AccountOverviewContainer, Row, Title } from './account-overview.styled';

export const AccountOverview = ({ data }) => {
    console.log(data);

    return (
        <AccountOverviewContainer>
            <Row>
                <Title>Account Overview</Title>
                <Contact />
            </Row>
            <Sales />
        </AccountOverviewContainer>
    )
}

export default AccountOverview;