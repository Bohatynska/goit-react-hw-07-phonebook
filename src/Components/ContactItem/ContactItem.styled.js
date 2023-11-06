import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 15px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Number = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
export const DeleteButton = styled.button`
  margin: 0px 0px 0px auto;
  padding: 0px;
  cursor: pointer;
  display: block;
  font-size: 15px;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  background-color: #d1e3ec;
  border: 1px solid;
  &:hover,
  &:focus {
    background-color: #d8bfd8;
  }
`;
