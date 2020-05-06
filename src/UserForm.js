import React from "react";
import styled from "styled-components";
import { ChevronRight } from "@styled-icons/boxicons-solid/ChevronRight";

const Question = styled.p`
  font-size: 2.2rem;
  margin: 3rem;
`;

const NextIcon = styled(ChevronRight)`
  fill: #d8d8d8;
  height: 7.5rem;
  width: 7.5rem;
  margin-bottom: 10rem;
`;

const AgeInput = styled.select`
  font-size: 1.6rem;
  width: 10rem;
  margin: 2.5rem;
`;

const Container = styled.div`
  margin-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Break = styled.div`
  width: 100%;
`;

function UserForm() {
  return (
    <>
      <Container>
        <Question>What is your age?</Question>
        <Break />
        <AgeInput>
          <option value="yes">Yress</option>
        </AgeInput>
      </Container>
      <NextIcon />
    </>
  );
}

export default UserForm;
