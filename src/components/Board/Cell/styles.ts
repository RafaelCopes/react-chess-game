import styled from "styled-components";

interface IContainerProps {
  cellColor: 'black' | 'white';
}

const cellColorSelector = {
  black: '#B7C0D8',
  white: '#E8EDF9',
}

export const Container = styled.div<IContainerProps>`
  height: 72px;
  width: 72px;

  background: ${({ cellColor }) => cellColorSelector[cellColor] };

  display: flex;
  justify-content: center;
  align-items: center;
`;
