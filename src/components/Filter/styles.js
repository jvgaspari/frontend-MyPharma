import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.actived ? '#EE6B26' : '#20295F'};
    width: 140px;
    height: 30px;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    img {
        width: 25px;
        height: 25px;
    }
    
    span {
        color: #FFF;
        font-weight: bold;
        font-size: 18px;
        align-self: flex-end;
    }

    &:hover{
        background-color: #EE6B26;
    }
`;