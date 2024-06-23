import styled from 'styled-components';

export const AccountOverviewContainer = styled.div`
    max-width: 700px;
    margin: auto;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.div`
    font-size: 24px;
    color: #3f3c3d;
`;

export const Spacer = styled.div`
    height: ${({ height }) => height || '0'};
    width: ${({ width }) => width || '0'};
`;
