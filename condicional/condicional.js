function media(){
    var val1 = document.getElementById("valor1").value;
    var val2 = document.getElementById("valor2").value;
    var result = ( parseInt(val1) + parseInt(val2)) /2;

    if(result >= 6)
    if(result == 10)
        alert('O aluno atingiu a media ' + result + ' e foi aprovado com sucesso!');

    else
        alert("O aluno atingiu a media com " + result +"!")
    else
        alert("volta ano que vem!");
    
}

function Comparar(){
    var val1 = document.getElementById("valor1").value;
    var val2 = document.getElementById("valor2").value;

    if(val1==val2){
    alert("Os valores são iguais")
    }
     else if(val1 > val2){
    alert("O valor " + val1 + " é maior que o valor " + val2);
    }
    else{
    alert( "O valor " + val2 + " é maior que o valor " + val1);
    }
}
