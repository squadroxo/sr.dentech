type infosTextoProps = {
  primTituloInfo: string,
  primItemInfo: string[]
}


type infosSecProps = {
  id: string,
  destaque: string,
  texto: string
}
type infosDescritivaProps = {
  secTituloInfo: string,
  secItemInfo: infosSecProps[]
}


export type dataCardSobreProps = {
  id: string,
  tituloCard: string,
  subtituloCard: string,
  descricaoCard: string,
  infosTexto: infosTextoProps,
  infosDescritiva?: infosDescritivaProps,
  foto: string,
  cardDesc: string,
  alt: string,
  primario: boolean,
};