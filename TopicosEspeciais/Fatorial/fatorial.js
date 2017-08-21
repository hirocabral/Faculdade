
/* Programa JavaScript com vers�o iterativa e recursiva da fun��o fat, que calcula 
   o fatorial de um n�mero n, passado como argumento */

   // Vers�o iterativa da fun��o fat
   function fat(n) {
     var res = 1;
     for (i = 1; i <= n; i++) {
        res *= i;
     }
     return res;
   }

   // Vers�o recursiva da fun��o fat
   function fatRec(n) {
      if (n === 0) 
         return 1;
      else
         return n * fatRec(n-1);
   }

  // Declara��o da vari�vel n, que ser� o n�mero lido para calcular o fatorial
  var n;
  // Loop de valida��o do n�mero lido
  do{
    n= parseInt(prompt('Digite um n�mero'));
  } while(isNaN(n));

  // Chama fun��o iterativa do fatorial e exibe o resultado 
  alert('Fatorial= ' + fat(n));
  // Chama fun��o recursiva do fatorial e exibe o resultado
  alert('Fatorial recursivo= ' + fatRec(n));

