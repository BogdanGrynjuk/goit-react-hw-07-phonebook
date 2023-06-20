import styled from '@emotion/styled';
import { Field as FormikField, Form as FormikForm } from 'formik';
import { MdAdd } from "react-icons/md";

export const Form = styled(FormikForm)`
  display: flex; 
  flex-direction: column;
  gap: 16px;  
  padding: 8px;  
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;  
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;  
`;

export const Field = styled(FormikField)`
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

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;  
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-left: auto;
  padding: 4px;  
  background-color: white;
  border: none;
  outline: none;  
  font-size: 16px;
  font-weight: normal;  
  cursor: pointer; 
  
  
  &:hover > svg{
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
                0 5px 5px rgba(0, 0, 0, 0.25);
  };

  &:active > svg {
    fill: white;
    background-color: teal;
  }
`;

export const Icon = styled(MdAdd)`
  padding: 4px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: buttonface;
  fill: blue;
  width: 16px;
  height: 16px;
  transition: box-shadow 250ms linear;
`;