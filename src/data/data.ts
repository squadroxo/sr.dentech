import { dataCardSobreProps } from "@/types/dataCardsSobre";
import { v4 as uuidv4 } from "uuid";

const dataCards: dataCardSobreProps[] = [
  {
    id: uuidv4(),
    titleCard: "Primeiros dentinhos:",
    slug: "primeiros-dentinhos",
    subtitleCard: "Como cuidar da primeira dentição do seu bebê",
    descCard:
      "Os primeiros dentinhos do seu bebê são um marco importante! Eles geralmente começam a aparecer entre os 6 e 12 meses de idade. Aqui estão algumas dicas para cuidar desses dentinhos tão especiais:",
    infosCards: [
      {
        id: uuidv4(),
        infoTituloCard: "Cuidados iniciais:",
        infos: [
          {
            id: uuidv4(),
            texto:
              "Antes dos dentes nascerem, limpe as gengivas do bebê com um pano úmido.",
          },
          {
            id: uuidv4(),
            texto:
              "Quando os dentes aparecerem, use uma escova de dentes macia e água.",
          },
          {
            id: uuidv4(),
            texto:
              "Evite deixar o bebê dormir com a mamadeira para prevenir cáries.",
          },
        ],
      },
      {
        id: uuidv4(),
        infoTituloCard: "Problemas comuns e como lidar:",
        infos: [
          {
            id: uuidv4(),
            destaque: "Dor e desconforto:",
            texto:
              "Seu bebê pode ficar irritado e ter dificuldade para dormir. Massageie as gengivas e ofereça mordedores refrigerados.",
          },
          {
            id: uuidv4(),
            destaque: "Febre e mal-estar:",
            texto:
              "Pode ocorrer uma febre baixa. Mantenha seu bebê hidratado e, se necessário, use antitérmicos recomendados pelo pediatra.",
          },
          {
            id: uuidv4(),
            destaque: "Assaduras:",
            texto:
              "A saliva extra pode causar irritação ao redor da boca. Limpe a saliva regularmente e use cremes protetores.",
          },
        ],
      },
    ],
    cardDesc:
      "Lembre-se de agendar a primeira visita ao dentista quando os primeiros dentes aparecerem ou até o primeiro aniversário do bebê!",
    photo: "assets/bebe-1.png",
    alt: "Foto de um bebê sorrindo",
    primary: true,
    photoDivision: "assets/tracado.svg",
    descMobile: "Como cuidar da primeira dentição do seu bebê..."
  },

  {
    id: uuidv4(),
    titleCard: "Hora da troca!",
    slug: "hora-troca",
    subtitleCard: "Cuidados durante a troca dos primeiros dentes",
    descCard:
      "A troca dos dentes de leite pelos permanentes é um processo natural que começa aos 6 anos e pode durar até os 12-13 anos. Veja como garantir que tudo corra bem:",
    infosCards: [
      {
        id: uuidv4(),
        infoTituloCard: "Cuidados essenciais:",
        infos: [
          {
            id: uuidv4(),
            texto:
              "Continue incentivando a escovação correta e o uso do fio dental diariamente.",
          },
          {
            id: uuidv4(),
            texto:
              "Visite o dentista regularmente para acompanhar o desenvolvimento dos dentes permanentes.",
          },
          {
            id: uuidv4(),
            texto:
              "Substitua a escova de dentes a cada 3 meses ou quando as cerdas estiverem desgastadas. Use uma escova de cerdas macias e cabeçal pequeno.",
          },
        ],
      },
      {
        id: uuidv4(),
        infoTituloCard: "Dicas de higiene bucal:",
        infos: [
          {
            id: uuidv4(),
            texto: "Introduza o uso do fio dental quando dois dentes estiverem em contato. Utilize um fio dental infantil, que é mais suave e fácil de manusear."
          },
          {
            id: uuidv4(),
            texto: "Limite o consumo de açúcares e alimentos processados. Incentive uma dieta rica em frutas, vegetais e laticínios.",
          },   
        ],
      },
    ],
    cardDesc:
      "Consultas semestrais ao dentista são essenciais para aplicar selantes nos dentes permanentes e prevenir cáries.",
    photo: "assets/bebe-2.png",
    alt: "Foto de um bebê sorrindo",
    primary: false,
    photoDivision: "assets/pontilhado.svg",
    descMobile: "Cuidados durante a troca dos primeiros dentes"
  },

  {
    id: uuidv4(),
    titleCard: "Cuidando do sorriso:",
    slug: "cuidando-sorriso",
    subtitleCard: "Dicas de saúde bucal para adultos",
    descCard:
      "Manter uma boa higiene bucal é fundamental para um sorriso saudável! Confira algumas dicas simples para cuidar dos seus dentes:",
    infosCards: [
      {
        id: uuidv4(),
        infoTituloCard: "Higiene bucal diária:",
        infos: [
          {
            id: uuidv4(),
            texto: "Escove os dentes pelo menos duas vezes ao dia com uma pasta de dente fluoretada.",
          },
          {
            id: uuidv4(),
            texto: "Use fio dental diariamente para remover resíduos entre os dentes.",
          },
          {
            id: uuidv4(),
            texto: "Considere o uso de enxaguante bucal antibacteriano para reduzir a placa e prevenir gengivite."
          },

        ],
      },
      {
        id: uuidv4(),
        infoTituloCard: "Prevenção de problemas dentários:",
        infos: [
          {
            id: uuidv4(),
            texto: "Visite o dentista a cada 6 meses para limpezas profissionais e exames preventivos.",
          },
          {
            id: uuidv4(),
            texto: "Substitua a escova de dentes a cada 3 meses ou antes, se as cerdas estiverem desgastadas. Use escova de cerdas macias para evitar danos ao esmalte e gengivas.",
          },
          {
            id: uuidv4(),
            texto: "Evite fumar e consumir álcool excessivamente, pois esses hábitos aumentam o risco de câncer bucal e doenças periodontais.",
          },
        ],
      },
    ],
    cardDesc:
      "Com essas dicas simples, você pode manter seu sorriso saudável e bonito! Não se esqueça de agendar suas consultas regulares ao dentista!",
    photo: "assets/senhora-1.png",
    alt: "Foto de um mulher sorrindo",
    primary: true,
    photoDivision: "assets/tracado.svg",
    descMobile: "Dicas de saúde bucal para adultos"
  },

  {
    id: uuidv4(),
    titleCard: "Por que os dentes de leite são tão importantes?",
    slug: "dentes-leite",
    descCard:
      "Muita gente acha que os dentes de leite não são tão importantes, já que vão cair de qualquer jeito. Mas, na verdade, eles têm um papel essencial no desenvolvimento da criança! Vamos descobrir por quê?",
    infosCards: [
      {
        id: uuidv4(),
        infoTituloCard: "Curiosidades sobre os dentes de leite:",
        infos: [
          {
            id: uuidv4(),
            destaque: "Guardiões do espaço:",
            texto:
              "Eles mantêm o espaço necessário para os dentes permanentes nascerem corretamente.",
          },
          {
            id: uuidv4(),
            destaque: "Fala e mastigação:",
            texto:
              "Dentes de leite ajudam na fala correta e na mastigação dos alimentos.",
          },
          {
            id: uuidv4(),
            destaque: "Autoestima:",
            texto:
              "Um sorriso saudável é importante para a autoestima das crianças.",
          },
        ],
      },
      {
        id: uuidv4(),
        infoTituloCard: "Cuidados Essenciais:",
        infos: [
          {
            id: uuidv4(),
            texto:
              "Escove os dentes do seu filho duas vezes ao dia com uma escova macia e pasta de dente fluoretada (tamanho de um grão de arroz).",
          },
          {
            id: uuidv4(),
            texto:
              "Use fio dental assim que dois dentes estiverem em contato.",
          },
          {
            id: uuidv4(),
            texto:
              "Visite o dentista regularmente para check-ups e prevenção de cáries.",
          },
        ],
      },
    ],
    cardDesc:
      "Com essas dicas simples, você pode manter seu sorriso saudável e bonito! Não se esqueça de agendar suas consultas regulares ao dentista!",
    photo: "assets/crianca-1.png",
    alt: "Foto de uma criança usando fio dental",
    primary: false,
    photoDivision: "assets/pontilhado.svg",
  },

  {
    id: uuidv4(),
    titleCard: "A verdade sobre a fada do dente:",
    subtitleCard: "Como tornar a perda dos dentes de leite divertida",
    slug: "fada-dente",
    descCard:
      "A perda dos dentes de leite pode ser um momento assustador para algumas crianças, mas também pode ser divertido! Vamos falar sobre a Fada do Dente e como transformar essa experiência em uma celebração.",
    infosCards: [
      {
        id: uuidv4(),
        infoTituloCard: "A tradição da fada do dente:",
        infos: [
          {
            id: uuidv4(),
            destaque: "Origem:",
            texto:
              "A tradição da Fada do Dente é popular em muitas culturas e transforma a perda dos dentes em algo mágico.",
          },
          {
            id: uuidv4(),
            destaque: "Como funciona:",
            texto:
              "Quando um dente cai, a criança coloca o dente debaixo do travesseiro. À noite, a Fada do Dente 'troca' o dente por uma moedinha ou presente.",
          },
        ],
      },
      {
        id: uuidv4(),
        infoTituloCard: "Dicas para tornar a experiência divertida:",
        infos: [
          {
            id: uuidv4(),
            destaque: "Diário da fada do dente:",
            texto:
              "Crie um diário onde a Fada do Dente deixa mensagens para a criança.",
          },
          {
            id: uuidv4(),
            destaque: "Pequenos presentes:",
            texto:
              "Além de dinheiro, deixe pequenos presentes como adesivos ou brinquedos.",
          },
          {
            id: uuidv4(),
            destaque: "Celebração em família:",
            texto:
              "Comemore a perda do dente com uma refeição especial ou um passeio divertido.",
          },
        ],
      },
    ],
    photo: "assets/crianca-2.png",
    alt: "Foto de uma criança sorrindo",
    primary: true,
    photoDivision: "assets/tracado.svg",
    cardDesc: "Dicas de saúde bucal para adultos"
  },

  {
    id: uuidv4(),
    titleCard: "Escovação divertida:",
    slug: "escovacao-divertida",
    subtitleCard: "Como fazer as crianças adorarem escovar os dentes",
    descCard:
      "Fazer com que as crianças escovem os dentes pode ser um desafio, mas com algumas dicas e truques, essa tarefa pode se tornar uma atividade divertida!",
    infosCards: [
      {
        id: uuidv4(),
        infoTituloCard: "Dicas para uma escovação divertida:",
        infos: [
          {
            id: uuidv4(),
            destaque: "Use escovas coloridas:",
            texto:
              "Deixe a criança escolher uma escova de dentes colorida com seus personagens favoritos.",
          },
          {
            id: uuidv4(),
            destaque: "Música e dança:",
            texto:
              "Escove os dentes ao som de uma música divertida. Existem músicas especiais de dois minutos para a escovação.",
          },
          {
            id: uuidv4(),
            destaque: "Histórias e jogos:",
            texto:
              "Crie histórias ou jogos onde a escovação é uma missão importante para combater os 'monstrinhos das cáries'.",
          },
        ],
      },
      {
        id: uuidv4(),
        infoTituloCard: "Recompensas positivas:",
        infos: [
          {
            id: uuidv4(),
            destaque: "Calendário de escovação:",
            texto:
              " Use um calendário onde a criança pode marcar cada vez que escova os dentes. Após um certo número de marcas, ela ganha uma recompensa.",
          },
          {
            id: uuidv4(),
            destaque: "Recompensas simples:",
            texto:
              "Recompensas podem ser adesivos, uma história extra na hora de dormir, ou um passeio especial.",
          },
        ],
      },
    ],
    photo: "assets/crianca-3.png",
    alt: "Foto de uma criança escovand os dentes",
    primary: false,
    photoDivision: "assets/pontilhado.svg",
    cardDesc: "Como fazer as crianças adorarem escovar os dentes"
  },

  {
    id: uuidv4(),
    titleCard: "Cuidado com as cáries:",
    slug: "cuidado-caries",
    subtitleCard: "Alimentos que ajudam a proteger os dentes",
    descCard:
      "Cuidar dos dentes vai além da escovação. A alimentação tem um papel crucial na saúde bucal. Vamos falar sobre alimentos que ajudam a proteger os dentes contra cáries.",
    infosCards: [
      {
        id: uuidv4(),
        infoTituloCard: "Alimentos amigos dos dentes:",
        infos: [
          {
            id: uuidv4(),
            destaque: "Frutas e vegetais crocantes:",
            texto:
              "Maçãs, cenouras e aipo ajudam a limpar os dentes e aumentam a produção de saliva.",
          },
          {
            id: uuidv4(),
            destaque: "Laticínios:",
            texto:
              "Queijos, leite e iogurte são ricos em cálcio e fósforo, fortalecendo os dentes.",
          },
          {
            id: uuidv4(),
            destaque: "Nozes e sementes:",
            texto:
              "Castanhas, amêndoas e sementes são ricas em nutrientes que ajudam a remineralizar o esmalte dos dentes.",
          },
        ],
      },
      {
        id: uuidv4(),
        infoTituloCard: "Dicas de alimentação:",
        infos: [
          {
            id: uuidv4(),
            texto:
              "Evite alimentos açucarados e bebidas gaseificadas, que podem causar cáries.",
          },
          {
            id: uuidv4(),
            texto:
              "Incentive a criança a beber bastante água, especialmente após refeições, para ajudar a limpar os dentes.",
          },
        ],
      },
    ],
    photo: "assets/crianca-4.png",
    alt: "Foto de uma criança escovand os dentes",
    primary: true,
    photoDivision: "assets/tracado.svg",
    cardDesc: "Alimentos que ajudam a proteger os dentes"
  },

  {
    id: uuidv4(),
    titleCard: "Fio dental para crianças:",
    slug: "fio-dental-criancas",
    subtitleCard: "Quando e como introduzir esse hábito",
    descCard:
      "O fio dental é tão importante quanto a escovação, mas muitas vezes é esquecido, especialmente quando se trata de crianças. Vamos descobrir como e quando introduzir o fio dental para os pequenos.",
    infosCards: [
      {
        id: uuidv4(),
        infoTituloCard: "Quando começar:",
        infos: [
          {
            id: uuidv4(),
            texto:
              "Assim que dois dentes estiverem em contato, é hora de começar a usar o fio dental. Isso geralmente acontece por volta dos 2-3 anos.",
          },
        ],
      },
      {
        id: uuidv4(),
        infoTituloCard: "Como introduzir o fio dental:",
        infos: [
          {
            id: uuidv4(),
            destaque: "Faça junto com a criança:",
            texto:
              "Mostre como usar o fio dental e faça junto com ela até que aprenda.",
          },
          {
            id: uuidv4(),
            destaque: "Fio dental infantil:",
            texto:
              "Use fio dental infantil, que é mais suave e fácil de manusear.",
          },
          {
            id: uuidv4(),
            destaque: "Divirta-se:",
            texto:
              "Transforme o uso do fio dental em um jogo ou conte uma história onde o fio dental é o herói que combate as cáries.",
          },
        ],
      },
    ],

    photo: "assets/crianca-5.png",
    alt: "Foto de uma criança escovand os dentes",
    primary: false,
    photoDivision: "assets/pontilhado.svg",
    cardDesc: "Quando e como introduzir esse hábito"
  },

  {
    id: uuidv4(),
    titleCard: "Higiene bucal em família:",
    slug: "higiene-bucal",
    subtitleCard: "Como criar uma rotina saudável juntos",
    descCard:
      "Criar uma rotina de higiene bucal em família pode ser divertido e educativo. Vamos ver como você pode fazer isso de forma simples e eficaz.",
    infosCards: [
      {
        id: uuidv4(),
        infoTituloCard: "Dicas para uma rotina de higiene bucal em família:",
        infos: [
          {
            id: uuidv4(),
            destaque: "Escovem os dentes juntos:",
            texto:
              "Faça da escovação dos dentes um momento familiar. Escovem os dentes juntos e tornem a atividade divertida.",
          },
          {
            id: uuidv4(),
            destaque: "Use cronômetros ou músicas:",
            texto:
              "Use um cronômetro ou uma música de dois minutos para garantir que todos escovem por tempo suficiente.",
          },
          {
            id: uuidv4(),
            destaque: "Recompensas em família:",
            texto:
              "Crie um sistema de recompensas para toda a família. Por exemplo, um passeio especial quando todos mantiverem a rotina por um mês.",
          },
        ],
      },
      {
        id: uuidv4(),
        infoTituloCard: "Incentivando os bons hábitos:",
        infos: [
          {
            id: uuidv4(),
            destaque: "Modelos a seguir:",
            texto:
              "As crianças aprendem pelo exemplo. Mostre a importância da higiene bucal através das suas próprias ações.",
          },
          {
            id: uuidv4(),
            destaque: "Produtos divertidos:",
            texto:
              " Escovas de dentes coloridas, pastas de dente com sabores e fios dentais divertidos ajudam a manter o interesse das crianças.",
          },
        ],
      },
    ],

    photo: "assets/familia-1.png",
    alt: "Foto de uma criança escovand os dentes",
    primary: true,
    photoDivision: "assets/tracado.svg",
    cardDesc: "Como criar uma rotina saudável juntos"
  },
];

export default dataCards;
