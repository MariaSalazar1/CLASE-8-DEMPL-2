const sumar = (a,b) => {
    return new Promise((resolve,reject) =>{
        if(a < 0 || b < 0 ){
            reject("No es válido.")
        }else{
            resolve (a + b)
        }
    })
}