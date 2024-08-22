type infosCardProps = {
  id: string,
  texto: string,
  destaque?: string
}

type infosCardsProps = {
  id: string,
  infoTituloCard: string,
  infos: infosCardProps[]
}

export type dataCardSobreProps = {
  id: string,
  tituloCard: string,
  slug: string,
  subtituloCard?: string,
  descricaoCard: string,
  infosCards: infosCardsProps[],
  foto: string,
  cardDesc?: string,
  alt: string,
  primario: boolean,
  fotoSeparacao: string,
  descMobile?: string
};