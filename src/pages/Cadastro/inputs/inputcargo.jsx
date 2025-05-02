import React, { useState } from 'react';
import { StyleInput } from '../Styles';

function CargoInput() {
  const [cargo, setCargo] = useState('');
  const handleChange = (e) => {
    setCargo(e.target.value);
  };

  return (
    <StyleInput>
     <input
        type="cargo"
        placeholder="Cargo"
        value={cargo}
        onChange={handleChange}/>
    </StyleInput>

  );
}

export default CargoInput;