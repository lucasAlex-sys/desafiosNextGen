//resolução
function retornaTempoArenaEmMilisegundos(distancia,velocidade) {
  //velocidade multiplicada por 1000000 para ter a resposta em milissegundos
  const resultado = Math.round(distancia/(velocidade/1000000))
  return resultado
}
//testes
const main = function teste(){
  var passou = false
  if(retornaTempoArenaEmMilisegundos("0.45",340)==1324 && 
  retornaTempoArenaEmMilisegundos("1",340)==2951){
    passou = true
  }
  else{
    passou= false
  }
  console.log(passou);
}

main()