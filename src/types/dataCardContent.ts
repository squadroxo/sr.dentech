// Tipos de dados para a página inteira

import { ISectionContentCard } from "./dataSections";

export type CardContentProps = {
  id: string;  // id geral da página

  // Seção inicial 
  initialSection: InitialSectionProps;
  // Seção de instruções
  instructionsSection: InstructionsSectionProps;
  seeMoreSection: ISectionContentCard[];
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
