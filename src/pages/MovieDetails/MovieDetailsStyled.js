import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  padding: 32px;
  margin: 40px;
  border-radius: 35px;
  box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const ContainerInfo = styled('div')`
  margin-left: 16px;
`;
export const LinkBack = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 15px 30px;
  /* margin: 10px 20px; */
  margin-left: 50px;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #7d7f8d inset, 0 0 0 0 #f137a6;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s ease-in-out;
  :hover {
    box-shadow: 0 0 10px 0 #f137a6 inset, 0 0 10px 4px #f137a6;
    color: #f137a6;
  }
`;
export const LinkList = styled('ul')`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkMoreDetails = styled(Link)`
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  :hover {
    background: #2ee59d;
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
