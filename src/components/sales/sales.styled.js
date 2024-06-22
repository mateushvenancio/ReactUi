import styled from 'styled-components';

export const SalesContainer = styled.div`
    background-color: white;
    border-radius: 4px;
`;

export const SalesInnerContainer = styled.div`
    padding: 16px;
    flex-grow: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Title = styled.div`
    font-weight: bold;
`;

export const Expand = styled.div`
    flex-grow: 1;
`;

export const Text = styled.span`
    font-size: 14px;
    color: gray;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'none')};
`;
