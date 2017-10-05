var card = /^\d*$/;
function isValidCard(ask){

  do{
    var array = [];
    ask = prompt("Ingrese el número de la tarjeta de crédito que desea validar");
    if(ask === "" || ask.search(card)){
      alert("debes ingresar sólo números");
      continue;
    }
    for(var i=0; i<ask.length; i++){
        array.push(parseInt(ask[i]));
    }
    var reverseArray = array.reverse();

    var sumTotal = 0;
    var count = 1;
    var numbPar = [];
    var numbImpar =[];

    for(var j=0; j<reverseArray.length; j++){
      if(count%2!==0){
        numbImpar.push(reverseArray[j]);
      }else{
        numbPar.push(reverseArray[j]*2);
      }
      count++;

    }

    numbPar = numbPar.join("").split("");
    arrFinal = numbPar.concat(numbImpar);

    for(var k=0; k<arrFinal-length; k++){
      sumTotal += (arrFinal[k]%10);
    }
    sumTotal = sumTotal%10;
    if(sumTotal===0){
      return alert("La tarjeta es valida")
    }

  }while (ask ==="" || ask.search(card));

}

isValidCard();
