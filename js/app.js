let cm;
let medida;
const centimetros = document.querySelector(".centimetros");
const medidaContainer = document.querySelector(".medida");
const boton = document.querySelector(".boton");


function calcular (){
    cm = parseFloat(centimetros.value);
    if(cm>=4.8 && cm<4.9){
        medida = 6;
    }else if(cm>=4.9 && cm<5){
        medida = 7;
    }else if(cm>=5 && cm<5.1){
        medida = 8;
    }else if(cm>=5.1 && cm<5.2){
        medida = 9;
    }else if(cm>=5.2 && cm<5.3){
        medida = 10;
    }else if(cm>=5.3 && cm<5.4){
        medida = 11;
    }else if(cm>=5.4 && cm<5.5){
        medida = 12;
    }else if(cm>=5.5 && cm<5.6){
        medida = 13;
    }else if(cm>=5.6 && cm<5.7){
        medida = 14;
    }else if(cm>=5.7 && cm<5.8){
        medida = 15;
    }else if(cm>=5.8 && cm<5.9){
        medida = 16;
    }else if(cm>=5.9 && cm<6){
        medida = 17;
    }else if(cm>=6 && cm<6.1){
        medida = 18;
    }else if(cm>=6.1 && cm<6.2){
        medida = 19;
    }else if(cm>=6.2 && cm<6.3){
        medida = 20;
    }else if(cm>=6.3 && cm<6.4){
        medida = 21;
    }else if(cm>=6.4 && cm<6.5){
        medida = 22;
    }else if(cm>=6.5 && cm<6.6){
        medida = 23;
    }else if(cm>=6.6 && cm<6.7){
        medida = 24;
    }else if(cm>=6.7 && cm<6.8){
        medida = 25;
    }else if(cm>=6.8 && cm<6.9){
        medida = 26;
    }else if(cm>=6.9 && cm<7){
        medida = 27;
    }else if(cm>=7 && cm<7.1){
        medida = 28;
    }else if(cm>=7.1 && cm<7.2){
        medida = 29;
    }else if(cm>=7.2 && cm<7.3){
        medida = 30;
    }else if(cm>=7.3 && cm<7.4){
        medida = 31;
    }else if(cm>=7.4 && cm<7.5){
        medida = 32;
    }else if(cm>=7.5 && cm<7.6){
        medida = 33;
    }
    medidaContainer.textContent = medida;
}

boton.addEventListener("click", calcular);





