import styled from 'styled-components';

export const Container = styled.div`
    background-color: whitesmoke;
    width: 100%;
    height: 80px;
    border-bottom: 5px solid #00a5fe;

    display: flex;
`;

export const LeftSide = styled.div`
    width: 50%;
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 16px;
`;

export const RightSide = styled.div`
    width: 50%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 36px;

    .btn-adc{
        background-color: #00a5fe;
        color: #FFF;
        font-weight: bold;
        border-radius: 12px;
        text-decoration: none;
        width: 150px;
        height: 40px;
        display: flex;
        margin: 0 10px;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease-in;
    }

    .btn-adc:hover {
        opacity: 0.5;
        color: white;
    }
`;