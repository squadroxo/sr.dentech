import * as Styles from './styles';
import InstructionCard from '../../components/InstructionCard';
import { instructions } from './mockData';

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
      
      {/* Article Veja Também (Seção 3) - motion */}
    </>
  );
}