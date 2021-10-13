function retornaSeHaEcoNoEstudio(distancia) {
  var tempo = distancia*2/340
  var eco = false
  if(tempo>=0.1){
    eco = true
  }
  else{
      eco=false
  }
  console.log(tempo)
  return eco
    
}
const main = async function teste(){
    var passou = false
    if(retornaSeHaEcoNoEstudio(8)==false &&
       retornaSeHaEcoNoEstudio(20)==true){
      passou = true
    }
    else{
      passou= false
    }
    console.log(passou);
  }
  
  main()