import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
`;

export const Form = styled.div`
    width: 50%;
`;

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin-bottom: 5px;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #EE6B26;
    }
`;

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    textarea {
        font-size: 16px;
        border: 1px solid #EE6B26;
        border-radius: 5px;
    }
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        font-weight: bold;
        color: #20295F;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover{
            opacity:0.7;
            color: red;
        }
    }
`;

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #EE6B26;
        border: none;
        font-size: 20px;
        color: #FFF;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`;