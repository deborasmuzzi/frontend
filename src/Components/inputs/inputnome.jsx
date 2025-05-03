import React, { useState } from 'react';
import { Container, StyleInput } from '../../pages/Cadastro/Styles';

function NomeInput() {
  const [nome, setNome] = useState('');

  return (
  <StyleInput
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}/>
  );
}

export default NomeInput;