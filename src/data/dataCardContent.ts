import { PageContentProps } from "@/types/dataCardContent";

const dataCardContent: PageContentProps[] = [
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
  }
];

export default dataCardContent;