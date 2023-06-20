import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;  
`;

export const Field = styled.input`
  padding: 4px 12px;
  width: 250px;  
  border: 1px solid black;
  border-radius: 12px;
  transition: box-shadow 250ms linear;

  &::placeholder {
    text-align: center;
  }

  &:hover,
  &:focus {
    outline: none;    
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
                0 5px 5px rgba(0, 0, 0, 0.25);    
  };
`;