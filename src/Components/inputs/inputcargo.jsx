import React, { useState } from 'react';
import { StyleInput } from '../../pages/Cadastro/Styles';

function CargoInput() {
  const [cargo, setCargo] = useState('');
  const handleChange = (e) => {
    setCargo(e.target.value);
  };

  return (
    <StyleInput
        type="cargo"
        placeholder="Cargo"
        value={cargo}
        onChange={handleChange}/>

  );
}

export default CargoInput;