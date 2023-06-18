import styled from 'styled-components';

export const WrapperFiler = styled.div`
  font-size: 20px;
`;

export const FilterInput = styled.input`
  height: 40px;
  width: 250px;
  padding: 0 10px;
  font-size: 20px;
  border: 1px solid #2ca04f;
  border-radius: 5px;
  transition: box-shadow cubic-bezier(0.17, 0.67, 0.86, 0.57) 300ms;
&:hover {border: 3px solid #2ca04f};
&:focus {border: 3px solid #2ca04f};
`;

export const FilterP = styled.p`
  font-weight: 500;
  margin-bottom: 20px;
  color: #132b1bbb;
`;
