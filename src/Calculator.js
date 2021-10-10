import {useState} from 'react';
import './Calculator.css'

const Calculator = () => {
    const [result, setResult] = useState("");
    const [count, setCount] = useState(1);


    const handleClick = (e) => {
        setResult(result.concat(e.target.value));
    }   

    const handleNeg = () => {
        if(result[0] !== '-') {
            setResult('-'.concat(result))
        }else  { 
            setResult(result.slice(1,result.length))
        }
    }

    const handlePercent = () =>{

    }

    const handleDot = () => {
        //not fully functional
        setCount(count+1);
        console.log(count)
        if(count>0 && count<2) {
        setResult(result.concat('.')) 
        }
    }

    const ac = (e) => {
        setResult('')
    }

    const handleCalculate = () => {
        try{
            setResult(eval(result).toString()) 
            setCount(0);
        }catch(err){
                setResult("Error")
            }    
        
    }

    return (
        <div className="container">
            <div className="buttons">
                <div className="display">
                    <p>{result}</p>
                </div>
                <div className="row">
                    <button value="AC" onClick={ac} className="button top">AC</button>
                    <button value="-" onClick={handleNeg} className="button top" >+/-</button>
                    <button value="/" onClick={handleClick} className="button right">÷</button>
                </div>
                <div className="row">
                    <button value="7" onClick={handleClick} className="button">7</button>
                    <button value="8" onClick={handleClick} className="button">8</button>
                    <button value="9" onClick={handleClick} className="button">9</button>
                    <button value="*" onClick={handleClick} className="button right">X</button>
                </div>
                <div className="row">
                    <button value="4" onClick={handleClick} className="button">4</button>
                    <button value="5" onClick={handleClick} className="button">5</button>
                    <button value="6" onClick={handleClick} className="button">6</button>
                    <button value="-" onClick={handleClick} className="button right">-</button>
                </div>
                <div className="row">
                    <button value="1" onClick={handleClick} className="button">1</button>
                    <button value="2" onClick={handleClick} className="button">2</button>
                    <button value="3" onClick={handleClick} className="button">3</button>
                    <button value="+" onClick={handleClick} className="button right">+</button>
                </div>
                <div className="row">
                    <button value="0" onClick={handleClick} className="button" style={{width:"12.6em"}}>0</button>
                    <button value="." onClick={handleDot} className="button">.</button>
                    <button value="=" onClick={handleCalculate} className="button right">=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;