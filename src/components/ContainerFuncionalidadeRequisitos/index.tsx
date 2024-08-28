import { BlockCardSaibaMais } from '../BlockCardSaibaMais';
import data from './data.json';

const ContainerFuncionalidadeRequisitos = () => {
    return (
        <div>
            <BlockCardSaibaMais
                tituloBlock={data.tituloFuncionalidades}
                funcionalidadeRequisitos={data.funcionalidades}
            />
            <BlockCardSaibaMais
                tituloBlock={data.tituloRequisitos}
                funcionalidadeRequisitos={data.requisitos}
                isRequisitos={true}
            />
        </div>
    );
}

export default ContainerFuncionalidadeRequisitos;
