import React, { useState } from 'react';
import { Container, StyleInput } from '../Styles';

function NomeInput() {
  const [nome, setNome] = useState('');

  return (
  <StyleInput>
     <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}/>
    </StyleInput>
  );
}

export default NomeInput;