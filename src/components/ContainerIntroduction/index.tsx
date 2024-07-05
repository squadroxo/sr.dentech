import style from 'components/ContainerIntroduction/ContainerIntroduction.module.scss'
import ComponentButton from "components/ContainerButton";
import ilustracaoHome from "../../assets/ilustracaoHome1.png";

const ContainerIntroduction: React.FC = () => {
    const handleClick = () => {
        // Lógica do clique
        console.log('Botão clicado!');
      };
    
    return (
        <div className={style.containerIntroduction}>
            <div className={style.container1}>
                <div className={style.containerTexto}>
                    <h1>Sr. Dente é seu amigo!</h1>
                    <p><span>Aprenda mais sobre saúde bucal com o Sr. Dente! </span> <br></br>
                Aqui você encontra curiosidades e dicas para cuidar bem da saúde bucal</p>
                </div>
                <ComponentButton  link='/ContainerIntroduction' onClick={handleClick} label="Saiba mais"/>  
            </div>
            <div className={style.container2}>
                <img src={ilustracaoHome} alt='criancas escovando dente'/>
            </div>
        </div>
        

    );

};

export default ContainerIntroduction;
