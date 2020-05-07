import React from "react";
import styled, { keyframes } from "styled-components";
import { ChevronRight } from "@styled-icons/boxicons-solid/ChevronRight";

const Typing = keyframes`
  from { max-width: 0 }
  to { 
    max-width: 100%; 
  }
`;

const FormTitle = styled.p`
  font-size: 2.2rem;
  margin: 3rem;
  white-space: nowrap;
  animation: ${Typing} 1.75s steps(40, end);
  overflow: hidden;
`;

const NextIcon = styled(ChevronRight)`
  fill: #d8d8d8;
  height: 7.5rem;
  width: 7.5rem;
`;

const SubmitContainer = styled.button`
  background: none;
  padding: 0px;
  border: none;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div``;

const InputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  text-align: left;
`;

const Input = styled.input`
  font-size: 2rem;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(#d8d8d8, 0.5);
  border: none;
  border-bottom: 1px solid transparent;
  width: 90%;
  display: block;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(#000000, 0.1);
    border-bottom: 1px solid black;
  }

  &:focus:invalid {
    border-bottom: 1px solid red;
  }

  &:placeholder-shown ~ label {
    opacity: 0;
    visibility: hidden;
  }
`;

const FormContainer = styled.form`
  overflow: hidden;
  margin-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 0.1rem solid black;
  flex-direction: column;
  border-radius: 2px;

  div {
    margin-bottom: 2rem;
  }
`;

function UserForm() {
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        console.log("yes");
      }}
    >
      <FormTitle>Enter your biometrics.</FormTitle>
      <InputContainer>
        <Input type="number" required="" placeholder="Age" max="99" />
        <InputLabel>Age</InputLabel>
      </InputContainer>
      <InputContainer>
        <Input type="number" required="" placeholder="Weight (kgs)" max="999" />
        <InputLabel>Weight (kgs)</InputLabel>
      </InputContainer>
      <InputContainer>
        <Input type="number" required="" placeholder="Height (cms)" max="999" />
        <InputLabel>Height (cms)</InputLabel>
      </InputContainer>
      <SubmitContainer type="submit">
        <NextIcon type="submit" />
      </SubmitContainer>
    </FormContainer>
  );
}

export default UserForm;
