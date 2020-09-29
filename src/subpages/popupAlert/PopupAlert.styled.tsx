import styled from "styled-components";

export const Input = styled.input`
  border: 2px #2980b9 solid;
  border-radius: 20px;
  padding: 1rem 1rem;
  outline: none;
`;

export const Button = styled.button`
  padding: 0.6rem 1.5rem;
  margin: 0.4rem;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.3rem;
  border-style: solid;
  /* cursor: pointer; */
  background: none;
  color: white;
  outline: none;
  border: 3px solid #16a085;
  transition: 0.16s;

  &:hover {
    background-color: #1abc9c;
  }
`;
