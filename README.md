# Entendendo Redux

- store - "caixa preta" com todos os dados da sua aplicação
- state - são os dados da suaaplicação
- reducer - modifica seus dados de acordo com a action

## Pure Functions
- dado um conjunto de parâmetros, uma função pura sempre retorna a mesma coisa. Funções que retornam algo esperado <br> são consideradas puras. <br>
Funções que o resultado é sempre inesperado, como uma chamada de uma api (que por ser assíncrona, nunca será a mesma), ```math.random()```, são consideradas inpuras, pois o seu resultado não pode ser previsto.

## Immutability
Quando uma função, não mexe diretamente no valor de uma variável, esta função é considerada pura, ja que não mutou o valor original daquele valor.
ex: 
```
  let a = 1;
  
   //não pura
   const incrementA = () => {
    return a++;
   }
   
   //pura
   const incrementA = (x) => {
    return x+1;
   }```
   
