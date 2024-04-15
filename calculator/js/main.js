let calculator=()=>{

    let num1=parseFloat(document.getElementById("number1").value);
    let num2=parseFloat(document.getElementById("number2").value);
    let calculate=document.getElementById("calculate").value;


    if(Number.parseFloat(num1) && Number.parseFloat(num2)){
        if(calculate==="+"){
            let num1=parseFloat(document.getElementById("number1").value);
            let num2=parseFloat(document.getElementById("number2").value);
            document.getElementById("result").innerHTML="Result: "+(num1+num2);
            document.getElementById("result").style.backgroundColor="#D1E7DD";
        }
        else if(calculate==="-"){
        let num1=parseFloat(document.getElementById("number1").value);
        let num2=parseFloat(document.getElementById("number2").value);
        document.getElementById("result").innerHTML="Result: "+(num1-num2);
        document.getElementById("result").style.backgroundColor="#D1E7DD"; 
        }
        else if(calculate==="*"){
            let num1=parseFloat(document.getElementById("number1").value);
            let num2=parseFloat(document.getElementById("number2").value);
            document.getElementById("result").innerHTML="Result: "+(num1*num2);
            document.getElementById("result").style.backgroundColor="#D1E7DD";
        }   
        else{
            let num1=parseFloat(document.getElementById("number1").value);
            let num2=parseFloat(document.getElementById("number2").value);
            document.getElementById("result").innerHTML="Result: "+(num1/num2);
            document.getElementById("result").style.backgroundColor="#D1E7DD"; 
        }
                
    }
    else{
        document.getElementById("result").innerHTML="Please Enter Valid Number. "; 
    }        
}