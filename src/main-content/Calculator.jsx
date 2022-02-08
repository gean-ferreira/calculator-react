import '../style/Calculator.css'
import Button from '../Components/Buttons'
import Display from '../Components/Display'
import { useState } from 'react'

const Calculator = () => {

  const [calc, setCalc] = useState("");

  const updateCalc = value => {
    setCalc(calc + value)
  }

  return(
    <>
      <h1>Calculator</h1>
      <div className="calculator">
        <Display value={calc || 0}/>
        <Button value={"CLEAR ALL"} threeCol/>

        <Button value={"/"} click={(e) => updateCalc(e)} operation/>

        <Button value={7} click={(e) => updateCalc(e)} />
        <Button value={8} click={(e) => updateCalc(e)} />
        <Button value={9} click={(e) => updateCalc(e)} />

        <Button value={"*"} click={(e) => updateCalc(e)} operation/>

        <Button value={4} click={(e) => updateCalc(e)} />
        <Button value={5} click={(e) => updateCalc(e)} />
        <Button value={6} click={(e) => updateCalc(e)} />

        <Button value={"-"} click={(e) => updateCalc(e)} operation/>

        <Button value={1} click={(e) => updateCalc(e)} />
        <Button value={2} click={(e) => updateCalc(e)} />
        <Button value={3} click={(e) => updateCalc(e)} />

        <Button value={"+"} click={(e) => updateCalc(e)} operation/>

        <Button value={0} click={(e) => updateCalc(e)} twoCol/>

        <Button value={"."} click={(e) => updateCalc(e)} click={(e) => updateCalc(e)} />

        <Button value={"="} click={(e) => updateCalc(e)} operation/>
      </div>
    </>
  )
}

export default Calculator;