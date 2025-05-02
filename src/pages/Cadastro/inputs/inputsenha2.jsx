import React, { useState } from 'react';
import { StyleInput} from '../Styles';
function Senha2Input() {
  const [senha, setSenha] = useState('');

  return (
    <StyleInput>
       <input
          type="text"
          placeholder="Repita sua senha"
          value={senha}
          onChange={(e) => setNome(e.target.value)}/>
      </StyleInput>
    );
}
export default Senha2Input;