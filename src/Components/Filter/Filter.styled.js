import styled from 'styled-components';
export const FilterWrap = styled.div`
  display: flex;
  /* width: 100%; */
`;
export const FilterLabel = styled.label`
  display: flex;
  margin-top: 10px;
`;
export const FilterInput = styled.input`
  display: block;
  padding-left: 10px;
  height: 30px;
  font-size: 15px;

  margin-bottom: 10px;
  background-color: #d2ebf9;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid grey;
  &:hover,
  &:focus {
    border-color: #d8bfd8;
  }
`;
