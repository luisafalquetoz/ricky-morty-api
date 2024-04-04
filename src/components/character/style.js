import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    width: 580px;
    height: 240px;
    background-color: #3c3e44;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-radius: 0 9px 9px 0;

    @media (max-width: 520px) {
            width: 220px;
            flex-direction: column;
            height: 520px;
        } 

    img {
        width: 230px;
        border-radius: 9px 0 0 9px;

        @media (max-width: 520px) {
            width: 100%;
            border-radius: 9px 9px 0 0;
        }
    }
`;

export const ContainerInfo = styled.div `
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 12px;

    .title {
        font-weight: 800;
        font-size: 27px;
        line-height: 30px;
        color: #f5f5f5;

        :hover {
            color: #ff9800;
        }
    }

    .status {
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #fff;
        text-transform: capitalize;

        span {
            display: inline-block;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            margin-right: 6px;
            background-color: ${(props) => props.backgroundColor};
        }
    }

    .info {
        font-weight: 500;
        font-size: 15px;
        line-height: 26px;
        color: #9e9e9e;
    }

    .description {
        font-weight: 400;
        font-size: 18px;
        line-height: 29px;
        color: #f5f5f5;

        :hover {
            color: #ff9800;
        }
    }
`;