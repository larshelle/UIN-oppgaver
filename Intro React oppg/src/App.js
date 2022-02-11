import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Array from './components/Array';
import Alert from './components/Alert';

//import { useState } from 'react';
//const [inputValue, setInputValue] = useState('');
//<p>{inputValue}</p>

const App = () => (
  <div>
    <Wrapper>
      <Title title="MyComponent" />
      <Array />
      <Alert />
    </Wrapper>
  </div>
);

export default App;
