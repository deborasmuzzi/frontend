import React, { useState } from 'react';
import { StyleInput} from '../Styles';

function EmailInput() {
  const [email, setEmail] = useState('');
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <StyleInput>
     <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}/>
    </StyleInput>

  );
}

export default EmailInput;