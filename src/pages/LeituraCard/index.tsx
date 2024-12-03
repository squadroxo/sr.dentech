import * as Styles from './styles';
import InstructionCard from '../../components/InstructionCard';
import ContentCard from '../../components/ContentCard';
import InitialSectionCardContent from '../../components/InitialSectionCardContent';
import { useParams } from 'react-router';
import dataCardContent from '../../data/dataCardContent';
import { NotFoundPage } from '../NotFound';

export default function LeituraCard() {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da URL

  // Encontra os dados correspondentes pelo id
  const pageData = dataCardContent.find((data) => data.id === id);

  if (!pageData) {
    return <NotFoundPage />;
  }

  // Desestruturando os dados da página
  const { initialSection, instructionsSection, seeMoreSection } = pageData;

  return (
    <>
      <Styles.Article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <InitialSectionCardContent
          title={initialSection.title}
          mainText={initialSection.mainText}
          img={initialSection.img}
          subtitle={initialSection.subtitle}
          secondText={initialSection.secondText}
        />

        <Styles.Instructions
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2>{instructionsSection.title}</h2>
          {instructionsSection.instructions.map((item, index) => <InstructionCard {...item} key={index} />)}
          <p>{instructionsSection.text}</p>
        </Styles.Instructions>

        {/* Texto em destaque */}

      </Styles.Article>

      <Styles.Line />

      <Styles.SeeMore
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2>Veja também</h2>
        <Styles.List>
          {seeMoreSection.map(item => <li key={item.id}>
            <ContentCard {...item} />
          </li>)}
        </Styles.List>
      </Styles.SeeMore>
    </>
  );
}