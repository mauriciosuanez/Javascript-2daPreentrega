//OBJETO//

class paragolpe{
    
    constructor (marca, modelo, precio){

    this.marca = marca;
    this.modelo = modelo;
    this.precio = parseFloat(precio);

}

descuentoEnEfectivo(){
    this.precio = this.precio*0.8;
}

}

const peugeot = new paragolpe('peugeot','d', 18000);
const renault = new paragolpe('renault','d', 15000);
const toyota = new paragolpe ('toyota','d',16000);
const chevrolet = new paragolpe ('chevrolet', 'd', 14000);

peugeot.descuentoEnEfectivo();
console.log(peugeot.precio);

renault.descuentoEnEfectivo()
console.log(renault.precio);

toyota.descuentoEnEfectivo()
console.log(toyota.precio);


//array + métodos de búsqueda y filtrado//

const paragolpes = [peugeot, renault, toyota, chevrolet];
paragolpes.pop();
console.log(paragolpes);

console.log('El index del paragolpe de peugeot es ' + paragolpes.indexOf(peugeot));

console.log(paragolpes.includes('peugeot'));
console.log(paragolpes.includes(renault));
console.log(paragolpes.includes('toyota'));
console.log(paragolpes.includes(chevrolet));


const filtradoPrecio = paragolpes.find((paragolpes)=>paragolpes.precio>=16000);
console.log(filtradoPrecio);



function ingreso(){

    let ingreso = false;

    for (let i=2; i>=0; i--){

    let keyword = prompt('Bienvenido a MSPARAGOLPES. Ingresá la marca y modelo del paragolpe que estás buscando. ');
    const buscarmodelo = paragolpes.filter((paragolpes)=>paragolpes.marca == keyword.toLowerCase());
    if (buscarmodelo.length>0)
    { 
    ingreso = true;
    break;
    }
    else{
        alert('No contamos actualmente con este paragolpe. Te quedan '+i+' cantidad de intentos para encontrar lo que estás buscando.');

    }
    }
    return ingreso;
}

function validarKeyword (keyword){

if (keyword){
    return true;
}
else{
    return false;
}

}

if (ingreso()){
    let opcion1= prompt('Aquí podes encontrar los mejores paragolpes del mercado. Elegí una de las siguientes opciones para tu compra: \n1-Paragolpe de Peugeot \n2-Paragolpe de Renault \n3-Paragolpe de Toyota \nPresioná X para finalizar.')
    while (opcion1 != 'X' && opcion1 != 'x'){

        switch(opcion1){
            case '1': 
            let opcion2= prompt('¿En cuántas cuotas sin interés quiere pagar el paragolpe de Peugeot? \n1- 1 cuota \n2- 2 cuotas \n3- 3 cuotas');

            let precioPeugeot = 18000;

            switch (opcion2) {

                case '1': let opcionFinalPg1 = prompt('El precio es: $'+precioPeugeot + '\n1- ¡Meconviene!: Comprar \n2- Retornar al menú.');

                if (opcionFinalPg1 == '1'){
                    alert('¡Gracias por tu compra!')
                
                }
                break;

                case '2': let opcionFinalPg2 = prompt('El precio es de dos cuotas: $'+precioPeugeot/2 + '\n1- ¡Meconviene!:Comprar \n2- Retornar al menú');

                if (opcionFinalPg2 == '1'){
                    alert('¡Gracias por tu compra!')
                
                }

                break;

                case '3': let opcionFinalPg3 = prompt('El precio es de tres cuotas de: $'+precioPeugeot/3 + '\n1- ¡Meconviene!:Comprar \n2- Retornar al menú');

                if (opcionFinalPg3 == '1'){
                    alert('¡Gracias por tu compra!')
                
                }

                break;

                default: alert('Opción inválida');

                break;
            }

            break;
            
            case '2':
                let opcion3= prompt('¿En cuántas cuotas sin interés quiere pagar el paragolpe de Renault? \n1- 1 cuota \n2- 2 cuotas \n3- 3 cuotas');
                let precioRenault = 15000;
                switch (opcion3) {
                    
                    case '1': let opcionFinalRn1 = prompt('El precio es: $'+precioRenault + '\n1- Comprar \n2-. Retornar al menú.');

                    if (opcionFinalRn1 == '1'){
                        alert('¡Gracias por tu compra!')
                    
                    }
                    break;
    
                    case '2': let opcionFinalRn2 = prompt('El precio es de dos cuotas de: $'+precioRenault/2 + '\n1- Comprar \n2-. Retornar al menú.');

                    if (opcionFinalRn2 == '1'){
                        alert('¡Gracias por tu compra!')
                    
                    }
                    break;
    
                    case '3': let opcionFinalBr3 = prompt('El precio es de tres cuotas de: $'+precioRenault/3 + '\n1- Comprar \n2-. Retornar al menú.');

                    if (opcionFinalRn3 == '1'){
                        alert('¡Gracias por tu compra!')
                    
                    }
                    break;
    
                    default: alert('Opción inválida');
                    break;
                }

                break;
            
                case '3':
                    let opcion4= prompt('¿En cuántas cuotas quiere pagar el paragolpe toyota? \n1- 1 cuota \n2- 2 cuotas \n3- 3 cuotas');
                    let precioFrancia = 10000;
                    switch (opcion4) {
                        
                        case '1': let opcionFinalTy1 = prompt('El precio es: $'+precioToyota + '\n1- Comprar \n2-. Retornar al menú.');
    
                        if (opcionFinalTy1 == '1'){
                            alert('¡Gracias por tu compra!')
                        
                        }
                        break;
        
                        case '2': let opcionFinalTy2 = prompt('El precio es de dos cuotas de: $'+precioToyota/2 + '\n1- Comprar \n2-. Retornar al menú.');
    
                        if (opcionFinalTy2 == '1'){
                            alert('¡Gracias por tu compra!')
                        
                        }
                        break;
        
                        case '3': let opcionFinalTy3 = prompt('El precio es de tres cuotas de: $'+precioToyota/3 + '\n1- Comprar \n2-. Retornar al menú.');
    
                        if (opcionFinalTy3 == '1'){
                            alert('¡Gracias por tu compra!')
                        
                        }
                        break;
        
                        default: alert('Opción inválida');
                        break;
                    }
                
                break;
                default: alert('Opción inválida');
                break;
        }
        opcion1= prompt('Aquí podes encontrar los mejores precios del mercado. Elegí una de las siguientes opciones para tu compra: \n1-Paragolpe de Peugeot \n2-Paragolpe de Renault \n3-Paragolpe de Toyota \nPresioná X para finalizar.')

                

    }

}else{
    alert('Inicio de sesión inválido. Intentá nuevamente.')
}


