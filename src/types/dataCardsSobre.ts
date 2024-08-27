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
  titleCard: string,
  slug: string,
  subtitleCard?: string,
  descCard: string,
  infosCards: infosCardsProps[],
  photo: string,
  cardDesc?: string,
  alt: string,
  primary: boolean,
  photoDivision: string,
  descMobile?: string
};