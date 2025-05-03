import React, { useState } from 'react';
import { StyleInput} from '../../pages/Cadastro/Styles';

function EmailInput() {
  const [email, setEmail] = useState('');
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <StyleInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}/>

  );
}

export default EmailInput;