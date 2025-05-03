import React, { useState } from 'react';
import { StyleInput} from '../../pages/Cadastro/Styles';
function Senha2Input() {
  const [senha, setSenha] = useState('');

  return (
    <StyleInput
          type="text"
          placeholder="Repita sua senha"
          value={senha}
          onChange={(e) => setNome(e.target.value)}/>
    );
}
export default Senha2Input;