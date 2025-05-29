import { useState } from 'react';
import { StyleInput} from '../../pages/Cadastro/Styles';
function Senha2Input(props) {
    const [mostrarSenha] = useState(false);


  return <StyleInput {...props}
         type={mostrarSenha ? 'text' : 'password'}/>
}
export default Senha2Input;

