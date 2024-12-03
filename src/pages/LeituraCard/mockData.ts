// conteúdo mockado para exibir na página, enquanto 
// não recebemos o conteúdo via backend ou arquivo "oficial"
import { v4 as uuidv4 } from "uuid";

export const instructions = [
  {
    title: 'Faça junto com a criança',
    content: 'Mostre como usar o fio dental e faça junto com ela até que aprenda.',
  },
  {
    title: 'Fio dental infantil',
    content: 'Use fio dental infantil, que é mais suave e fácil de manusear.',
  },
  {
    title: 'Divirta-se',
    content: 'Transforme o uso do fio dental em um jogo ou conte uma história onde o fio dental é o herói que combate as cáries.',
  },
]

export const seeMore = [
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