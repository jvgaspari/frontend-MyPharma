import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.actived ? '#EE6B26' : '#20295F'};
    width: 240px;
    height: 60px;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        width: 25px;
        height: 25px;
    }
    
    span {
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover{
        background-color: #EE6B26;
    }
`;