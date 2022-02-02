import { CardContainer } from "../styles/styles"

interface CardProps {
  text: string
}

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>
}
