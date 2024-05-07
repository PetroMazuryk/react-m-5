import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnLink = styled(Link)`
  font-size: 28px;
  font-weight: 800;
  padding: 6px 14px;
  border-radius: 8px;
  box-shadow: 0 0 10px #2163f3;
  color: #000;
  background-color: #87bfe8;
  &.active {
    color: red;
  }
  &:hover {
    box-shadow: 0 0 10px #2163f3, 0 0 20px #2163f3;
  }
`;
