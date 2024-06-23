import React from 'react';
import { Contact, Sales } from '..'
import { AccountOverviewContainer, Row, Spacer, Title } from './account-overview.styled';

export const AccountOverview = ({ data }) => {
    console.log(data);

    return (
        <AccountOverviewContainer>
            <Row>
                <Title>Account Overview</Title>
                <Contact />
            </Row>
            <Spacer height='45px' />
            <Sales />
        </AccountOverviewContainer>
    )
}

export default AccountOverview;