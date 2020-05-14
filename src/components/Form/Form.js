import React from "react";
import styled, { css } from "styled-components";

const styles = css`
  padding: 15px 20px;
  text-align: center;
  margin: 15px;
  font-size: 1.8rem;
  border-radius: 10px;
  border: 0.2rem solid black;
  outline: none;
  margin-top: 60px;
`;

const StyledInput = styled.input`
  ${styles}
  text-transform: capitalize;
`;

const StyledButton = styled.button`
  ${styles}
  background-color: transparent;
  color: #5c6bcc;
  border: 0.2rem solid #5c6bcc;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    color: white;
    background: #5c6bcc;
  }
`;
const Form = ({ submit, value, changeInput }) => {
  return (
    <form onSubmit={submit}>
      <StyledInput
        type="text"
        value={value}
        onChange={changeInput}
        placeholder="Wpisz miasto.."
      />
      <StyledButton>Wyszukaj miasto</StyledButton>
    </form>
  );
};
export default Form;
