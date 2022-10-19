import { Container } from "./styles";

interface ICellProps {
  colorize: number;
}

export default function Cell({ colorize }: ICellProps) : JSX.Element {
  if (colorize % 2 === 0) {
    return <Container cellColor="black" />
  }

  return <Container cellColor="white" />
}
