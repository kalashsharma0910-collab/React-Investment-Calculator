import img from './assets/investment-calculator-logo.png';
import Header from './components/Header';
import UserInput from './components/UserInput';
import {useState} from 'react';
import { calculateInvestmentResults } from './util/investment';
import Results from './components/Results';
function App() {
  const [invest,setInvest]=useState({
    initialInvestment: 100,
    annualInvestment: 10,
    expectedReturn: 10,
    duration: 10
  });
const res=invest.duration>=1;
  function handleInputChange(attribute,value)
  {
  setInvest((element)=>({...element,
  [attribute]:value===''?'':Number(value)
})
);
  }

  let op=calculateInvestmentResults(invest);
  return (

    <div className="App">
      <Header logo={img}/>
      <UserInput handleChange={handleInputChange} inputValues={invest} />
    {res && <Results result={op}/>}
    </div>
  )
}

export default App
