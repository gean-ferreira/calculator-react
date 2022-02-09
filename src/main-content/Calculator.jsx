import "../style/Calculator.css";
import Button from "../Components/Buttons";
import Display from "../Components/Display";
import { useState } from "react";

const Calculator = () => {
	const [calc, setCalc] = useState("");

	const oprt = ["/", "*", "+", "-", "."];

	const updateCalc = (value) => {
		// if the display has no number doesnt include an operator
		// or
		// has an operator in it (on the display) cannot put any operator
		if ((calc === "" && oprt.includes(value)) || (oprt.includes(value) && oprt.includes(calc.slice(-1)))) {
			return;
		}

		setCalc(calc + value);
	};

	const calculate = () => {
		setCalc(eval(calc).toString());
	};

	const clearAll = () => {
		if (calc == "") return;

		const value = "";
		setCalc(value);
	};

	return (
		<>
			<h1>Calculator</h1>
			<div className="calculator">
				<Display value={calc || 0} />
				<Button value={"CLEAR ALL"} click={clearAll} threeCol />

				<Button value={"/"} click={(e) => updateCalc(e)} operation />

				<Button value={7} click={(e) => updateCalc(e)} />
				<Button value={8} click={(e) => updateCalc(e)} />
				<Button value={9} click={(e) => updateCalc(e)} />

				<Button value={"*"} click={(e) => updateCalc(e)} operation />

				<Button value={4} click={(e) => updateCalc(e)} />
				<Button value={5} click={(e) => updateCalc(e)} />
				<Button value={6} click={(e) => updateCalc(e)} />

				<Button value={"-"} click={(e) => updateCalc(e)} operation />

				<Button value={1} click={(e) => updateCalc(e)} />
				<Button value={2} click={(e) => updateCalc(e)} />
				<Button value={3} click={(e) => updateCalc(e)} />

				<Button value={"+"} click={(e) => updateCalc(e)} operation />

				<Button value={0} click={(e) => updateCalc(e)} twoCol />

				<Button value={"."} click={(e) => updateCalc(e)} click={(e) => updateCalc(e)} />

				<Button value={"="} click={calculate} operation />
			</div>
		</>
	);
};

export default Calculator;
