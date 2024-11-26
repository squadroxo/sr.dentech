import * as Styles from './styles';

export default function LeituraCard() {
  return (
    <>
      <Styles.Article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Seção 1 - motion */}
        {/* Seção 2 - motion */}
        {/* Texto em destaque */}
      </Styles.Article>
      {/* Linha divisória */}
      {/* Article Veja Também (Seção 3) - motion */}
    </>
  );
}