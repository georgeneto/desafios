let MATRIX_WIDTH = 1000;
let MATRIX_HEIGHT = 300;

const MAXIMO_LETRAS_TELA = 100;

const VELOCIDADE_MINIMA = 2;
const VELOCIDADE_MAXIMA = 10;

let matrix = document.getElementById("matrix");
matrix.style.width = MATRIX_WIDTH;
matrix.style.height = MATRIX_HEIGHT;


( () => {

    let letrasInstanciadas = []

    let adicionaNovaLetra = () => {

        if(letrasInstanciadas.length >= MAXIMO_LETRAS_TELA){
            return;
        }

        let novoElemento = geraDadosNovoElemento();

        let idNovaLetra = letrasInstanciadas.length + 1;

        let novaLetra = document.createElement("span");
        novaLetra.id = `letra${idNovaLetra}`
        novaLetra.style = novoElemento.style
        novaLetra.innerHTML = novoElemento.letra

        matrix.appendChild(novaLetra);

        let elementoNovaLetra = document.getElementById(`letra${idNovaLetra}`)

        letrasInstanciadas.push({
            elemento: elementoNovaLetra,
            velocidade: novoElemento.velocidade
        })

    }

    let movimentaLetrasExistentes = () => {

        letrasInstanciadas.forEach( (letra) => {
            let posicaoYatual = Number.parseInt(letra.elemento.style.top);
            let posicaoYnova = parseInt(posicaoYatual) + parseInt(letra.velocidade);

            if(posicaoYnova < (MATRIX_HEIGHT - letra.velocidade * 1.6)){
                letra.elemento.style.top = posicaoYnova;
            }else{
                let novoElemento = geraDadosNovoElemento();
                letra.elemento.style = novoElemento.style;
                letra.elemento.innerHTML = novoElemento.letra;
                letra.velocidade = novoElemento.velocidade;
            }
            
        })

    }

    let geraDadosNovoElemento = () => {
        let velocidade = (Math.random() * (VELOCIDADE_MAXIMA-VELOCIDADE_MINIMA) + VELOCIDADE_MINIMA).toFixed(0);
        let x = Math.min( (Math.random() * ((MATRIX_WIDTH - velocidade) + 1) ).toFixed(0), [MATRIX_WIDTH - VELOCIDADE_MAXIMA]);
        let y = 0;  

        return {
            x: x,
            y: y,
            letra: String.fromCharCode( 65 +  ( Math.random() * (25 - 1) + 1 ) ),
            velocidade: velocidade,
            style: `position: absolute; left: ${x}px; top: ${y}px; font-size:${(3 * velocidade).toFixed(0)}px`
        }
    }

    let processaTela = () => {
        movimentaLetrasExistentes();
        adicionaNovaLetra();
    }

    processaTela();
    setInterval(processaTela, 50);

})();