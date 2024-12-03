import { ISectionContentCard } from '@/types/dataSections';
import * as Styles from './styles';

export default function ContentCard({ ...item }: ISectionContentCard) {
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