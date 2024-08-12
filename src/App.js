import logo from './logo.svg';
import MortgageCalculatorForm from "./Components/MortgageCalculatorForm/MortgageCalculatorForm";
import {useState} from "react";
import {calculateLoanPayement} from "./utils/loan";
import EmptyResults from "./Components/MortgageCalculatorForm/EmptyResults";
import CompletedResults from "./Components/MortgageCalculatorForm/CompletedResult";


function App() {

  const [isMortgageCalculated, setIsMortgageCalculated] = useState(false);
  const [mortgage, setMortgage] = useState({
    monthlyPayment: 0,
    totalRepayement: 0,
  });

  function calculateMortgage(amount, term, rate) {
    setMortgage(calculateLoanPayement(amount, term, rate));
    setIsMortgageCalculated(true);
  }

  function resetValues() {
    setIsMortgageCalculated(false);
  }

  return (
    <div className="App" >
      <main>
    <MortgageCalculatorForm onCalculateMortgage={calculateMortgage} onReset={resetValues}  />
      {isMortgageCalculated ? (
          <CompletedResults mortgage={mortgage} />
      ) : (
          <EmptyResults />
      )}
      </main>
    </div>
  );
}

export default App;
