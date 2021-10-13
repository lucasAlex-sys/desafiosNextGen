function tamanhoSetorBusca(areaMaior,areaMenor) {

    var anguloCirculo = 360
    var anguloSetor = anguloCirculo/8
    var setorMaior = areaMaior*anguloSetor/anguloCirculo
    var setorMenor = areaMenor*anguloSetor/anguloCirculo
    var result = setorMaior-setorMenor
    console.log(setorMaior)
    console.log(setorMenor)
    console.log(anguloSetor)
    console.log(result)
    return result
    
}
const main = async function teste(){
    var passou = false
    if(tamanhoSetorBusca(2834,314)== 315){
      passou = true
    }
    else{
      passou= false
    }
    console.log(passou);
  }
  
  main()