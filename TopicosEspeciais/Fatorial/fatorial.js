
/* Programa JavaScript com versão iterativa e recursiva da função fat, que calcula 
   o fatorial de um número n, passado como argumento */

   // Versão iterativa da função fat
   function fat(n) {
     var res = 1;
     for (i = 1; i <= n; i++) {
        res *= i;
     }
     return res;
   }

   // Versão recursiva da função fat
   function fatRec(n) {
      if (n === 0) 
         return 1;
      else
         return n * fatRec(n-1);
   }

  // Declaração da variável n, que será o número lido para calcular o fatorial
  var n;
  // Loop de validação do número lido
  do{
    n= parseInt(prompt('Digite um número'));
  } while(isNaN(n));

  // Chama função iterativa do fatorial e exibe o resultado 
  alert('Fatorial= ' + fat(n));
  // Chama função recursiva do fatorial e exibe o resultado
  alert('Fatorial recursivo= ' + fatRec(n));

