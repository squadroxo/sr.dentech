import * as Styles from './styles';

interface IContentCard {
  id: string,
  title: string,
  text: string,
  photo: string,
  alt: string,
}

export default function ContentCard({ ...item }: IContentCard) {
  return (
    <Styles.Section>
      <img src={item.photo} alt={item.alt} />
      <Styles.Content>
        <h3 >{item.title}</h3>
        <p >{item.text}</p>
      </Styles.Content>
    </Styles.Section>
  );
}