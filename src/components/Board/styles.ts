import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  background: #e5e5e5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  background: #fff;
`;

export const Content = styled.div`
  background: red;
  height: 576px;
  width: 576px;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;
