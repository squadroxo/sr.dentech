import { v4 as uuidv4 } from "uuid";
const dataCards = [
  {
    id: uuidv4(),
    tituloCard: "Primeiros dentinhos:",
    subtituloCard: "Como cuidas da primeira denticao do seu bebê",
    descricaoCard: "Os primeiros dentinhos do seu bebê são um marco importante! Eles geralmente começam a aparecer entre os 6 e 12 meses de idade. Aqui estão algumas dicas para cuidar desses dentinhos tão especiais:",
    infosTexto: {
      primTituloInfo: "Cuidados iniciais:",
      primItemInfo: [
        "Antes dos dentes nascerem, limpe as gengivas do bebê com um pano úmido.",
        "Quando os dentes aparecerem, use uma escova de dentes macia e água.",
        "Evite deixar o bebê dormir com a mamadeira para prevenir cáries."
      ],
    },
    infosDescritiva: {
      secTituloInfo: "Problemas comuns e como lidar:",
      secItemInfo: [
        {
          id: uuidv4(),
          destaque: "Dor e desconforto:",
          texto: "Seu bebê pode ficar irritado e ter dificuldade para dormir. Massageie as gengivas e ofereça mordedores refrigerados"
        },
        {
          id: uuidv4(),
          destaque: "Febre e mal-estar:",
          texto: "Pode ocorrer uma febre baixa. Mantenha seu bebê hidratado e, se necessário, use antitérmicos recomendados pelo pediatra."
        },
        {
          id: uuidv4(),
          destaque: "Assaduras:",
          texto: "A saliva extra pode causar irritação ao redor da boca. Limpe a saliva regularmente e use cremes protetores."
        },
      ],
    },
    cardDesc: "Lembre-se de agendar a primeira visita ao dentista quando os primeiros dentes aparecerem ou até o primeiro aniversário do bebê!",
    foto: "assets/bebe-1.jpeg",
    alt: "Foto de um bebê sorrindo",
    primario: true
    }
];

export default dataCards;