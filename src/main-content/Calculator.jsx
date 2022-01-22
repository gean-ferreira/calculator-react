import '../style/Calculator.css'
import Button from '../Components/Buttons'

const Calculator = () => {
  return(
    <>
      <h1>Calculator</h1>
      <div className="calculator">
        <Button value={"CLEAR ALL"}/>
        <Button value={"/"}/>
        <Button value={7}/>
        <Button value={8}/>
        <Button value={9}/>
        <Button value={"x"}/>
        <Button value={4}/>
        <Button value={5}/>
        <Button value={6}/>
        <Button value={"-"}/>
        <Button value={1}/>
        <Button value={2}/>
        <Button value={3}/>
        <Button value={"+"}/>
        <Button value={0}/>
        <Button value={"."}/>
        <Button value={"="}/>
      </div>
    </>
  )
}

export default Calculator;