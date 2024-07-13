import { IoReturnUpBack } from "react-icons/io5";
import styles from "./botao.module.scss"
import { useNavigate } from "react-router";

export interface IBotaoProps {
  href: string,
  texto: string,
  tamanhoIcone: number
}

export const Botao = ({ href, tamanhoIcone, texto }:IBotaoProps) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(href)} className={styles.container}>
      <IoReturnUpBack size={tamanhoIcone} />
      {texto}
    </button>
  );
};
