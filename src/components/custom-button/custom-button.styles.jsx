import styled, { css } from 'styled-components';

const ButtonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
`;

const invertedButttonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`;

const GoogleSingInStyles = css`
    background-color: #4285f4;
    color: white;
    border: 1px solid white;

    &:hover {
    background-color: #357ae8;
    border: none;
    }
`;

const GetButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return GoogleSingInStyles
    }

    else {
        return props.inverted ? invertedButttonStyles : ButtonStyles
    }

}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${GetButtonStyles}
`;