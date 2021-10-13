
function retornaPessoasPreferemUmUnicoPalco(quantidadePessoasEvento) {
    const palcoABC = quantidadePessoasEvento*0.03
    const palcoAB = quantidadePessoasEvento*(0.20 - 0.03)
    const palcoAC = quantidadePessoasEvento*(0.18 - 0.03)
    const palcoBC = quantidadePessoasEvento*(0.10 - 0.03)
    const palcoA = quantidadePessoasEvento*0.45
    const palcoB = quantidadePessoasEvento*0.33
    const palcoC = quantidadePessoasEvento*0.34
    var somentePalcoA = palcoA-((palcoAB+palcoAC+palcoABC))
    var somentePalcoB = palcoB-((palcoAB+palcoBC+palcoABC))
    var somentePalcoC = palcoC-((palcoBC+palcoAC+palcoABC))
    console.log(somentePalcoA)
    console.log(somentePalcoB)
    console.log(somentePalcoC)
    var result = somentePalcoA+somentePalcoB+somentePalcoC
    console.log(result)
    return result
}
const main = async function teste(){
    var passou = false
    if(retornaPessoasPreferemUmUnicoPalco(10000)==2500){
      passou = true
    }
    else{
      passou= false
    }
    console.log(passou);
  }
  
  main()