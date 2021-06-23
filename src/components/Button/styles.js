import styled from 'styled-components';

export const Container = styled.button`
    width: 300px;
    height: 40px;
    margin-bottom: 40px;
    border-radius: 5px;
    box-shadow: none;
    color: rgb(255,255,255);
    border-color: rgb(0,0,0);
    background-color: #ff0000;

    &:hover {
        background-color: rgb(0,0,0);
        color: #ff0000;
        transform: translateX(10px);
        cursor: pointer;
    }
`;