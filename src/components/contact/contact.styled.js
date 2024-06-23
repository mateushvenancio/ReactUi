import styled from 'styled-components';

export const ContactContainer = styled.div`
    font-size: 12px;
    color: #333333;
`;

export const TopTitle = styled.div`
    color: #959292;
    text-transform: uppercase;
    font-weight: bold;
`;

export const SubTitle = styled.div`
    font-weight: bold;
    font-size: 14px;
`;

export const AvatarSquare = styled.div`
    background-color: #ffd100;
    border-radius: 4px;
    height: 45px;
    width: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 16px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.align || 'start'};
    gap: 8px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    line-height: 0.8;
`;

export const Expand = styled.div`
    flex-grow: 1;
`;
