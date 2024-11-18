export type dataCarousel = {
  id: string,
  titleCarousel: string,
  textCarousel: string,
  photoCarousel: string,
  alt: string,
  postedBy: string,
  icon: string,
}

export type dataSectionProps = {
  id: string,
  tag: string,
  titleSection: string,
  photoMobile: string,
  photoDesktop: string,
  alt: string,
  subtitle: string,
  text: string,
  postedBy: string,
  icon: string,
  carousel: dataCarousel[]
}