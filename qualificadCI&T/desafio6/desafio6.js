function geraFrequenciaNota(semitons) {
    var NMCrescente = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    var NMDecrescente = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
    var frequencia = (440*Math.pow(2,semitons/12)).toFixed(4).toString()
    var inteiro = Math.trunc(frequencia)
    var posicaoCentral = 9
    var nota = ""
    
    if(semitons>=1){
        
        for(let i=0;i<semitons;i++){
            posicaoCentral = posicaoCentral+1
            if(posicaoCentral==12){
                posicaoCentral=0
            }
        }
        console.log(posicaoCentral)
        nota = NMCrescente[posicaoCentral]
    }
    else{
        semitons=semitons*(-1)
        for(let i=0;i<semitons;i++){
            posicaoCentral = posicaoCentral-1
            if(posicaoCentral==-1){
                posicaoCentral=11
            }
        }
        nota = NMDecrescente[posicaoCentral]
    }
    if ((inteiro-frequencia)==0){
        frequencia = Math.round(frequencia).toString
    }
    var result = [frequencia,nota]
    console.log(result)
    return result
}
const main = async function teste(){
    var passou = false
    result = geraFrequenciaNota(1)
    
    if(result[0]=="523.2511" && result[1]=="C"){
      passou = true
    }
    else{
      passou= false
    }
    console.log(passou);
  }
  
  main()