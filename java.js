function funcao(op){
  if (op == 'soma'){
    let n1 = parseFloat(document.getElementById('n1').value );
    let n2 = parseFloat(document.getElementById('n2').value);

        document.getElementById('r').value = n1 + n2

  } else if (op == 'sub'){
    let n1 = parseFloat(document.getElementById('n1').value );
    let n2 = parseFloat(document.getElementById('n2').value);

    document.getElementById('r').value = n1 - n2

  } else if (op == 'multi'){
    let n1 = parseFloat(document.getElementById('n1').value );
    let n2 = parseFloat(document.getElementById('n2').value);

    document.getElementById('r').value = n1 * n2
    
  } else{
    let n1 = parseFloat(document.getElementById('n1').value );
    let n2 = parseFloat(document.getElementById('n2').value);

    document.getElementById('r').value = n1 / n2
  }
  
}

function verificar(){
  let num = parseInt(document.getElementById('n').value);

  if (num%2 == 0){
      document.getElementById('r').value = 'Par';
  }
  else{
      document.getElementById('r').value = 'Impar';
  }
}

function mazomenos(){
  let n = parseInt(document.getElementById('nu').value);

  if (n > 0){
      document.getElementById('re').value = 'Positivo';
  }
  else if (n < 0){
      document.getElementById('re').value = 'Negativo';
  }
  else{
      document.getElementById('re').value = 'Zero';
  }
}

function idenoun(){
  let num1 = parseFloat(document.getElementById('n1').value);
  let num2 = parseFloat(document.getElementById('n2').value);

  if (num1 == num2){
      document.getElementById('res').value = 'Iguais';
  }
  else{
      document.getElementById('res').value = 'Diferentes';
  }
}

function maoume(){
  let n1 = parseFloat(document.getElementById('num1').value);
  let n2 = parseFloat(document.getElementById('num2').value);

  if (n1 > n2){
      document.getElementById('resu').value = 'Maior: ' + n1 + ' - Menor: ' + n2;
  }
  else{
      document.getElementById('resu').value = 'Maior: ' + n2 + ' - Menor: ' + n1;
  }
}