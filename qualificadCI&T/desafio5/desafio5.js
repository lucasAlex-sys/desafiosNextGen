function calculaDistanciaBandaPercorre(numeroRodadaEnsaios,numeroShows) {
    var matrizAmigos = [[0,500,500,1000,500,250],
                        [500,0,500,1000,500,750],
                        [500,500,0,500,500,750],
                        [1000,1000,500,0,500,750],
                        [500,500,500,500,0,250],
                        [250,750,750,750,250,0]]
    var vetorPub = [750,1250,1250,750,750,500]
    var totalPercorridoEnsaio = 0
    var totalPercorridoPub = 0
     for(let i=0;i<numeroRodadaEnsaios;i++){
        for(let j=0;j<6;j++){
            for(let k=0;k<6;k++){
                totalPercorridoEnsaio = totalPercorridoEnsaio + matrizAmigos[j][k]
            }
        }
     }
     for(let i=0;i<numeroShows;i++){
        for(let j=0;j<6;j++){
            totalPercorridoPub = totalPercorridoPub + vetorPub[j]
        }
     }
     var idaEVolta = (totalPercorridoEnsaio +  totalPercorridoPub)*2
     console.log(totalPercorridoPub)
     console.log(totalPercorridoEnsaio)
     console.log(idaEVolta)
     return idaEVolta
}
const main = async function teste(){
    var passou = false
    if(calculaDistanciaBandaPercorre(1,1)==45500){
      passou = true
    }
    else{
      passou= false
    }
    console.log(passou);
  }
  
  main()