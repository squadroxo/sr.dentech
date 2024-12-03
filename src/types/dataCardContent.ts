// Tipos de dados para a página inteira

export type CardContentProps = {
  id: string;  // id geral da página

  // Seção inicial 
  initialSection: InitialSectionProps;
  // Seção de instruções
  instructionsSection: InstructionsSectionProps;
  // Componente de destaque
  cardInformativo: CardInformativoProps;
};

// Tipo para a seção inicial
export type InitialSectionProps = {
  title: string;
  mainText: string;
  img: string;
  subtitle: string;
  secondText: string;
};

// Tipo para a seção de instruções
export type InstructionsSectionProps = {
  title: string;
  text: string;
  instructions: InstructionProps[];
};

export type InstructionProps = {
  title: string;
  text: string;
};

export type CardInformativoProps = {
  text: string;
}


