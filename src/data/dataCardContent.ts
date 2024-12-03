import { CardContentProps } from "@/types/dataCardContent";
import { v4 as uuidv4 } from "uuid";

const dataCardContent: CardContentProps[] = [
  {
    id: "1",
    initialSection: {
      title: "Fio dental para crianças:",
      mainText: "O fio dental é tão importante quanto a escovação, mas muitas vezes é esquecido, especialmente quando se trata de crianças. Vamos descobrir como e quando introduzir o fio dental para os pequenos.",
      img: "/assets/fiodental-3.png",
      subtitle: "Quando começar:",
      secondText: "Assim que dois dentes estiverem em contato, é hora de começar a usar o fio dental. Isso geralmente acontece por volta dos 2-3 anos."
    },
    instructionsSection: {
      title: "Como introduzir o fio dental:",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      instructions: [
        {
          title: "Faça junto com a criança",
          text: "Mostre como usar o fio dental e faça junto com ela até que aprenda."
        },
        {
          title: "Fio dental infantil",
          text: "Use fio dental infantil, que é mais suave e fácil de manusear."
        },
        {
          title: "Divirta-se",
          text: "Transforme o uso do fio dental em um jogo ou conte uma história onde o fio dental é o herói que combate as cáries."
        }
      ]
    },
    seeMoreSection: [
      {
        id: uuidv4(),
        title: "Escovação divertida",
        text: "Muitas vezes, escovar os dentes pode parecer uma tarefa entediante, especialmente para as crianças. No entanto, com algumas estratégias criativas e abordagens inovadoras, é possível tornar esse momento muito mais empolgante e até mesmo prazeroso.",
        photo: "/assets/crianca-7-sorrindo.png",
        alt: "foto de um menino sorrindo e utilizando a escova de dentes",
      },
      {
        id: uuidv4(),
        title: "Por que os dentes de leite são tão importantes?",
        text: "Muitas vezes, escovar os dentes pode parecer uma tarefa entediante, especialmente para as crianças. No entanto, com algumas estratégias criativas e abordagens inovadoras, é possível tornar esse momento muito mais empolgante e até mesmo prazeroso.",
        photo: "/assets/crianca-1.png",
        alt: "foto de uma menina com a boca aberta e as mãos de outra pessoa passando fio dental entre os dentes da menina",
      },
    ]
  }
];

export default dataCardContent;