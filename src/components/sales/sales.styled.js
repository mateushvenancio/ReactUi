import styled from 'styled-components';

export const SalesContainer = styled.div`
    background-color: white;
    border-radius: 4px;
`;

export const SalesInnerContainer = styled.div`
    padding: 16px;
    width: ${({ width }) => width};

    border-bottom: ${({ borderBottom }) => {
        return borderBottom ? 'solid #E7E7E7 1px' : 'none';
    }};
    border-right: ${({ borderRight }) => {
        return borderRight ? 'solid #E7E7E7 1px' : 'none';
    }};
    border-left: ${({ borderLeft }) => {
        return borderLeft ? 'solid #E7E7E7 1px' : 'none';
    }};
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${({ align }) => align || 'center'};
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({ align }) => align || 'center'};
`;

export const Title = styled.div`
    color: #2d2d2d;
    font-weight: 900;
`;

export const Expand = styled.div`
    flex-grow: 1;
`;

export const Text = styled.span`
    font-size: ${({ fontSize }) => fontSize || '14px'};
    color: ${({ color }) => color || 'gray'};
    font-weight: ${({ bold }) => (bold ? 'bold' : 'none')};
    text-transform: ${({ transform }) => transform || 'none'};
`;

export const Spacer = styled.div`
    height: ${({ height }) => height || '0'};
    width: ${({ width }) => width || '0'};
`;
