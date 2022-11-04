import styled from 'styled-components';

export const CastList = styled('ul')`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-bottom: -16px;
`;

export const CastItem = styled('li')`
  text-align: center;
  width: calc(100% / 4 - 90px);
  padding-top: 24px;
  margin-right: 16px;
  margin-bottom: 16px;

  border-radius: 35px;
  box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const Image = styled('img')`
  width: 200px;
  border-radius: 35px;
`;

export const Text = styled('p')`
  text-align: center;
  margin-top: 50px;
  font-size: 50px;
  color: red;
`;
