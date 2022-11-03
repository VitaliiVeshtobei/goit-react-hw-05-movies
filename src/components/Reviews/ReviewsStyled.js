import styled from 'styled-components';

export const ReviewsList = styled('ul')`
  list-style: none;
  padding: 16px;
  display: flex;
  justify-content: center;
  margin-right: -16px;
`;

export const ReviewsItem = styled('li')`
  /* width: calc(100% / 4 - 90px); */
  padding: 16px;
  margin-right: 16px;
  font-size: 12px;
  border-radius: 35px;
  box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const Text = styled('p')`
  text-align: center;
  margin-top: 50px;
  font-size: 50px;
  color: red;
`;
