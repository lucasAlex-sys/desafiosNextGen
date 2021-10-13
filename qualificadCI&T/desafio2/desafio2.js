function retornaTempoMinimoEmMinutos(p,s,n) {
    //dividir os segundo por 60
    //multipiclar a qtde de pessoas pelo tempo convertido em segundos
    //dividir o tempo gasto pela qtde de portões
    var peoplesGates = Math.round(p/n)
    console.log(peoplesGates)
    var timeTotal = peoplesGates*s
    console.log(timeTotal)
    var result = Math.ceil(timeTotal/60)
    //console.log(timeTotal)
    
    
    
    //re
    return result
  }
const main = async function teste(){
  var passou = false
  var teste1 = retornaTempoMinimoEmMinutos(2749,50,8)
  if(teste1 == 287){
    passou = true
  }
  else{
    passou= false
  }
  console.log(teste1)
  console.log(passou);
} 
main()
//&& 
//retornaTempoMinimoEmMinutos("1",340)==2951)