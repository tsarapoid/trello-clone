import { CardContainer } from "../styles/styles"

type CardProps = {
  text: string
}

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>
}
