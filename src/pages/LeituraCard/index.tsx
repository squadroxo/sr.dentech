import * as Styles from './styles';
import { instructions, seeMore } from './mockData';
import InstructionCard from '../../components/InstructionCard';
import ContentCard from '../../components/ContentCard';

export default function LeituraCard() {
  return (
    <>
      <Styles.Article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Seção 1 - motion */}

        <Styles.Instructions
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Como introduzir o fio dental:</h2>
          {instructions.map((item, index) => <InstructionCard {...item} key={index} />)}
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </Styles.Instructions>

        {/* Texto em destaque */}

      </Styles.Article>

      {/* Linha divisória */}

      <Styles.SeeMore
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2>Veja também</h2>
        <Styles.List>
          <li><ContentCard {...seeMore[0]} /></li>
          <li><ContentCard {...seeMore[1]} /></li>
        </Styles.List>
      </Styles.SeeMore>
    </>
  );
}