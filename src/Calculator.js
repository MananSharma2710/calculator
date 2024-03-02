import { useState } from "react";
import Button from "./Button";

function Calculator(){
    const [display, setDisplay] = useState({
        current: "0",
        total: "0",
        isInitial: true,
        preOP: ""
    });
    function handleNumer(value){
        let newValue = value;

        if(!display.isInitial){
            newValue = display.current*10 + value;
        }
        
        setDisplay({
            current: newValue,
            total: display.total,
            isInitial: false,
            preOP: display.preOP
        });
    }
    function handleOperator(value){
        const total = doCalculation();

        setDisplay({
            current: total.toString(),
            total: total.toString(),
            isInitial: true,
            preOP : value
        })
    }
    function doCalculation(){
        let total = parseInt(display.total);
        switch(display.preOP){
            case "+":
                total += parseInt(display.current);
                break;
            case "-":
                total -= parseInt(display.current);
                break;
            case "*":
                total *= parseInt(display.current);
                break;
            case "/":
                total /= parseInt(display.current);
                break;
            default:
                total = parseInt(display.current);
        }
        return total;
    }
    function handleClear(){
        setDisplay({
            current: "0",
            total: "0",
            isInitial: true,
            preOP: ""
        })
    }
    function renderDisplay(){
        return display.current;
    }
    return(
        <div className="btn">
            <div className="display">{renderDisplay()}</div>
        <Button value={7} onClick={handleNumer}/>
        <Button value={8} onClick={handleNumer}/>
        <Button value={9} onClick={handleNumer}/>
        <Button className='operator' value={"/"} onClick={handleOperator}/>

        <Button value={4} onClick={handleNumer}/>
        <Button value={5} onClick={handleNumer}/>
        <Button value={6} onClick={handleNumer}/>
        <Button className='operator' value={"*"} onClick={handleOperator}/>

        <Button value={1} onClick={handleNumer}/>
        <Button value={2} onClick={handleNumer}/>
        <Button value={3} onClick={handleNumer}/>
        <Button className='operator' value={"-"} onClick={handleOperator}/>

        <Button value={'C'} onClick={handleClear}/>
        <Button value={0} onClick={handleNumer}/>
        <Button value={"="} onClick={handleOperator}/>
        <Button className='operator' value={"+"} onClick={handleOperator}/>
        </div>
    )
}
export default Calculator;