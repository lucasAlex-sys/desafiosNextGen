function retornaGuicheIngresso(ingressoNumero) {
    var guiche = 0
    var limiteGuiche = 0
    for(let i = 1;i<=ingressoNumero;i++){
        limiteGuiche = Math.pow(i,2)
        if(limiteGuiche>=ingressoNumero){
            guiche = i
            break
        }

    }
    //console.log(guiche)
    return guiche
}
const main = async function teste(){
    var passou = false
    if(retornaGuicheIngresso(9)== 3){
      passou = true
    }
    else{
      passou= false
    }
    console.log(passou);
  }
  
  main()