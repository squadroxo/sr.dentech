import * as Styles from './styles';
import tooth from './assets/purpleTooth.png';

interface ICard {
  title: string;
  text: string;
}

export default function InstructionCard({ title, text }: ICard) {
  return <Styles.Section>
    <Styles.Image src={tooth} alt='desenho de um dente em um fundo roxo' />
    <Styles.Heading>{title}</Styles.Heading>
    <Styles.Content>{text}</Styles.Content>
  </Styles.Section>;
}