let mapping = [
    [1,1,1,1,1,1,0],
    [0,1,1,0,0,0,0],
    [1,1,0,1,1,0,1],
    [1,1,1,1,0,0,1],
    [0,1,1,0,0,1,1],
    [1,0,1,1,0,1,1],
    [1,0,1,1,1,1,1],
    [1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1],
    [1,1,1,0,0,1,1]
];

let formacaoNumero = {
    cima: [0,1,5],
    baixo: [2,3,4,6]
};

(function() {

    const numeroCima = document.getElementById("numeroCima");
    const numeroBaixo = document.getElementById("numeroBaixo");

    let printa = function(numeroPrintado){
        let selecionado = mapping[numeroPrintado];

        let translatedClasses = converteBitToClasseCss( selecionado );
        numeroCima.classList = translatedClasses.classesCima;
        numeroBaixo.classList = translatedClasses.classesBaixo;
    } 

    let converteBitToClasseCss = function(bits){

        let classesCima = [];
        let classesBaixo = [];

        bits.forEach( (bit, index) => {
            if(bit){
                let classeBitComoString = String.fromCharCode( 65 + index );
                formacaoNumero.cima.includes( index ) ? classesCima.push(classeBitComoString) : classesBaixo.push(classeBitComoString);
            }
        });

        return {
            classesCima: classesCima.filter( classe => classe.trim() ).join(" "),
            classesBaixo: classesBaixo.filter( classe => classe.trim() ).join(" ")
        }
    }

    let numeroPrintado = 0;
    printa(numeroPrintado);
    
    setInterval(function(){
        numeroPrintado = (numeroPrintado + 1 ) % 10
        printa(numeroPrintado)
    }, 1000)

})();
