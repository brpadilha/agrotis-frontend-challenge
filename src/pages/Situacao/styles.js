import styled from 'styled-components';
// import {  } from 'polished';

export const Container = styled.div``;

export const SubHeader = styled.div`
  height: 48px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #145e43;

  p {
    display: flex;
    margin-left: 10px;
    font-size: 20px;
    color: #ffff;
    margin-top: 15px;
  }

  input {
    margin-right: 10px;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;
