var nome = prompt('Digite o seu nome: ');

do{
    var anoNascimento = prompt('Olá '+nome+'! Qual ano você nasceu? ');
}while(isNaN(anoNascimento));
do{
    do{
        var mesNascimento = prompt('Qual mês você nasceu? (1 a 12)');
    }while(isNaN(mesNascimento));
}while(mesNascimento < 1 || mesNascimento > 12);
do{
    do{
        var diaNascimento = prompt('Qual dia você nasceu? (1 a 30 ou 31)');
    }while(isNaN(diaNascimento));
}while(diaNascimento < 1 || diaNascimento > 31);

do{
    do{
        var diaAtaul = prompt('Qual dia é hoje? (1 a 30 ou 31)');
    }while(isNaN(diaAtaul));
}while(diaAtaul < 1 || diaAtaul > 31);
do{
    do{
        var mesAtual = prompt('Qual o mês atual? (1 a 12)');
    }while(isNaN(mesAtual));
}while(mesAtual < 1 || mesAtual > 12);
var anoAtual = prompt('Qual o ano atual?');

var idade = anoAtual - anoNascimento;
if(mesAtual > mesNascimento){
    alert('Você completou '+idade+' anos em '+diaNascimento+'/'+mesNascimento+'/'+anoAtual);
}
else if(mesNascimento == mesAtual){
    if(diaAtaul > diaNascimento){
        alert('Você completou '+idade+' anos em '+diaNascimento+'/'+mesNascimento+'/'+anoAtual);
    }
    else{
        alert('Você vai completar '+idade+' anos em '+diaNascimento+'/'+mesNascimento+'/'+anoAtual);
    }
}
else{
    alert('Você vai completar '+idade+' anos em '+diaNascimento+'/'+mesNascimento+'/'+anoAtual);
}