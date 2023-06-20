import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;  
`;

export const Text = styled.span`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;  
  text-transform: capitalize;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;  
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer; 
  transition: box-shadow 250ms linear;
  
  &:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
                0 5px 5px rgba(0, 0, 0, 0.25);
  };

  &:active {
    background-color: teal;
    color: white;   
  };

  &:active > svg {
    fill: white;
  };
`;

export const Icon = styled(MdClose)`
  fill: red;
  width: 16px;
  height: 16px;
`;