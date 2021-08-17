import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-wrap: wrap;

    button {
        background: none;
        border: none;
    }
`;

export const Search = styled.div`
    display: flex;
    justify-content: center;

    input {
        border: none;
        margin-top: 32px;
        width: 360px;
        height: 32px;
        background-color: #20295F;
        color: #FFF;

        &::placeholder{
            color: #FFF;
            opacity: 0.7;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;

    table, th, td {
        border: none;
        border-collapse: collapse;
    }

    th, td {
        padding: 5px 10px;
        text-align: center;
        height: 24px;
    }

    th {
        background-color: #20295F;
        color: #FFF;
    }

    table tr:nth-child(odd){
        background-color: #DDD;
    }

    table tr:nth-child(even){
        background-color: #FFF;
    }

    .btn-edt {
        border: none;
        border-radius: 5px;
        background-color: #00a5fe;
        color: #FFF;
        font-weight: bold;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
`;