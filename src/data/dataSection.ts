import { dataSectionProps } from "@/types/dataSections";
import { v4 as uuidv4 } from "uuid";

const dataSection: dataSectionProps[] = [
  {
    id: uuidv4(),
    titleSection: "Dicas essenciais para manter a saúde bucal em casa",
    tag: "Família Saudável",
    photo: "/assets/fiodental.png",
    alt: "Imagem de uma criança passando fio dental",
    subtitle: "Por que os dentes de leite são tão importantes?",
    text: "Muitas vezes, escovar os dentes pode parecer uma tarefa entediante, especialmente para as crianças. No entanto, com algumas estratégias criativas e abordagens inovadoras, é possível tornar esse momento muito mais empolgante e até mesmo prazeroso.",
    postedBy: "Sr.Dente",
    icon: "/assets/IconeDenteSecao.png",
    carousel: [
      {
        id: uuidv4(),
        titleCarousel: "Titulo 1",
        textCarousel: "Estou aqui para orientar e capacitar nossa squad a alcançar todo o seu potencial. Quero garantir que todos",
        photoCarousel: "/assets/bebe-1-menor.png",
        alt: "Bebê sorrindo",
        postedBy: "Sr.Dente",
        icon: "/assets/IconeDenteSecao.png"
      },
      {
        id: uuidv4(),
        titleCarousel: "Titulo 2",
        textCarousel: "Estou aqui para orientar e capacitar nossa squad a alcançar todo o seu potencial. Quero garantir que todos",
        photoCarousel: "/assets/bebe-1-menor.png",
        alt: "Bebê sorrindo",
        postedBy: "Sr.Dente",
        icon: "/assets/IconeDenteSecao.png",
      },
      {
        id: uuidv4(),
        titleCarousel: "Titulo 3",
        textCarousel: "Estou aqui para orientar e capacitar nossa squad a alcançar todo o seu potencial. Quero garantir que todos",
        photoCarousel: "/assets/bebe-1-menor.png",
        alt: "Bebê sorrindo",
        postedBy: "Sr.Dente",
        icon: "/assets/IconeDenteSecao.png",
      }
    ]
  },
  {
    id: uuidv4(),
    titleSection: "Como identificar e prevenir as doenças mais comuns",
    tag: "Problemas Bucais",
    photo: "/assets/crianca-6-sorrindo.png",
    alt: "Criança sorridente escovando os dentes",
    subtitle: "Primeiros dentinhos: Como cuidar da primeira dentição do seu bebê",
    text: "Muitas vezes, escovar os dentes pode parecer uma tarefa entediante, especialmente para as crianças. No entanto, com algumas estratégias criativas e abordagens inovadoras, é possível tornar esse momento muito mais empolgante e até mesmo prazeroso.",
    postedBy: "Sr.Dente",
    icon: "/assets/IconeDenteSecao.png",
    carousel: [
      {
        id: uuidv4(),
        titleCarousel: "Titulo",
        textCarousel: "Estou aqui para orientar e capacitar nossa squad a alcançar todo o seu potencial. Quero garantir que todos",
        photoCarousel: "/assets/bebe-1-menor.png",
        alt: "Bebê sorrindo",
        postedBy: "Sr.Dente",
        icon: "/assets/IconeDenteSecao.png",
      },
      {
        id: uuidv4(),
        titleCarousel: "Titulo",
        textCarousel: "Estou aqui para orientar e capacitar nossa squad a alcançar todo o seu potencial. Quero garantir que todos",
        photoCarousel: "/assets/bebe-1-menor.png",
        alt: "Bebê sorrindo",
        postedBy: "Sr.Dente",
        icon: "/assets/IconeDenteSecao.png",
      },
      {
        id: uuidv4(),
        titleCarousel: "Titulo",
        textCarousel: "Estou aqui para orientar e capacitar nossa squad a alcançar todo o seu potencial. Quero garantir que todos",
        photoCarousel: "/assets/bebe-1-menor.png",
        alt: "Bebê sorrindo",
        postedBy: "Sr.Dente",
        icon: "/assets/IconeDenteSecao.png",
      }
    ]
  },
];

export default dataSection;