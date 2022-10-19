import Cell from "./Cell";
import { Container, Content, Wrapper } from "./styles";

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

type IBoard = JSX.Element[];

export default function Board(): JSX.Element {
  let board: IBoard = [];
  let colorize: number;

  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      colorize = i + j;

      board.push(<Cell key={`${i}${j}`} colorize={colorize} />);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Content>
          { board }
        </Content>
      </Wrapper>
    </Container>
  );
}
