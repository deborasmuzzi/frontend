import  { useState } from 'react';
import { StyleInput } from '../../pages/Cadastro/Styles';
function SenhaInput(props) {
  const [mostrarSenha] = useState(false);
  return <StyleInput {...props}
  type={mostrarSenha ? 'text' : 'password'}/>
}
export default SenhaInput;