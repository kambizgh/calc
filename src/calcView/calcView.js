import React,{useState} from "react";
import  "./calcView.css";

let txt1="",flag=true;



const CalcView=()=> {
    const [name,setName]=useState('');
    const [opration,setOpration]=useState('');

    const inputDigits=(e)=>{
        e.preventDefault();
        if(flag)
        {
        setName(name+e.target.value);
       txt1=name+e.target.value;
        console.log(txt1);  
        }
        else
        {
            setName(name+e.target.value)
            console.log(name+e.target.value) ;  
        }

     
    }
    const opr=(e)=>{
        e.preventDefault();
        setOpration(e.target.value)
        setName("");
        flag=false;
        console.log(e.target.value);
  
    }
    const processTask=(e)=>{
        e.preventDefault();
        switch(opration) {
            case "+":
            console.log(parseFloat(txt1)+parseFloat(name))
            setName(parseFloat(txt1)+parseFloat(name))
            flag=true
            break
            case "-":
             console.log(parseFloat(txt1)-parseFloat(name))
             setName(parseFloat(txt1)-parseFloat(name))
             flag=true
             break
            case "*":
             console.log(parseFloat(txt1)*parseFloat(name))
             setName(parseFloat(txt1)*parseFloat(name))
             flag=true
             break
            case "/":
            console.log(parseFloat(txt1)/parseFloat(name))
            if(parseFloat(name)===0){
                alert("Division By Zero")
                setName("");
            }
            else{
                    setName(parseFloat(txt1)/parseFloat(name))
                    flag=true  
            }

            break
            default:
             console.log("Default")   
          }
  
    }

    return (
       
        <div className="calcView">
            <label>Calculator</label>
            <input type="text" value={name} readOnly/>
            <br/>
            <button id="1"className="btn btn-success" onClick={inputDigits} value="1">
             1
            </button>
            <button id="2" className="btn btn-success" onClick={inputDigits} value="2">
             2
            </button>
            <button id="3" className="btn btn-success" onClick={inputDigits} value="3">
             3
            </button>
            <button id="multyplex"  className="btn btn-success" onClick={opr} value="*">
             *
            </button>
            <br/>
            <button id="4" className="btn btn-success" onClick={inputDigits} value="4">
             4
            </button>
            <button id="5" className="btn btn-success" onClick={inputDigits} value="5">
             5
            </button>
            <button id="6" className="btn btn-success" onClick={inputDigits} value="6">
             6
            </button>
            <button id="sum"  className="btn btn-success" onClick={opr} value="+">
             +
            </button>
            <br/>
            <button  id="7" className="btn btn-success" onClick={inputDigits} value="7">
             7
            </button>
            <button id="8" className="btn btn-success" onClick={inputDigits} value="8">
             8
            </button>
            <button  id="9"className="btn btn-success" onClick={inputDigits} value="9">
             9
            </button>
            <button id="decrease"  className="btn btn-success" onClick={opr} value="-">
             -
            </button>
            <br/>
            <button id="Clear" className="btn btn-danger" onClick={()=>{setName("")}}>
             Clear
            </button>
            <button  id="0" className="btn btn-success" onClick={inputDigits} value="0">
             0
            </button>
            <button id="Dot" className="btn btn-success" onClick={inputDigits} value=".">
             .
            </button>
            <button id="Div"  className="btn btn-success" onClick={opr} value="/">
             /
            </button>
            <br/>
            <button id="equal"  className="btn btn-success" onClick={processTask} value="=">
             =
            </button>
        </div>
       
    );
}
export default CalcView;