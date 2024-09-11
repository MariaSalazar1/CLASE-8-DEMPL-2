const evaluar =()=>{
    const edad = prompt("Cual es tu edad ?");
    if(edad > 18){
        document.write("Es mayor de edad");
    }else{
        document.write("Es menor de edad")
    }
};

setTimeout(evaluar,5000);