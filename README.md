# Entendendo Redux

- store - "caixa preta" com todos os dados da sua aplicação
- state - são os dados da sua aplicação
- reducer - modifica seus dados de acordo com a action
- action - sempre precisa de um type para funcionar, alem disso, uma variável chamada payload com tudo que é necessário é setada.

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
   }
 ```
   
## Three Principles
Redux pode ser descrito em 3 princípios fundamentais:<br>

### Single source of truth
- O global state da sua aplicação é guardado em uma arvore de objetos com um único store.<br>
```
console.log(store.getState())

/* Prints
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/
```
<br><br>

### State is read-only
- A única forma de mudar o state é emitir uma action, um objeto que descreve o que acontece. <br>
- O dispatch é o responsável por enviar/despachar a action para o store, ou seja, é ele quem guarda as actions por lá.
```
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
```

### Changes are made with pure functions
- Para especificar como a árvore do state é transformada por ações, você escreve reducers puros.

```
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

import { combineReducers, createStore } from 'redux'
const reducer = combineReducers({ visibilityFilter, todos })
const store = createStore(reducer)
```

## High Order Components (HOC)
Componentes de alta ordem: passamos um componente, e ele nos devolve ele melhorado.

Exemplo de uso:
``` const SuperComponente = meuHOC(Componente) ```

- Podemos usar o HOC ```connect```, que pode ser responsável por conectar um componente ao store, permitindo que o componente possa manipular, injetar o que quisermos em nossas props.

### connect
> utiliza o metodo de currying
```connect(mapStateToProps, mapDispatachToProps)(Component)```

- mapStateToProps - state -> props
- mapDispatachToProps - dispatch -> props

> Ambos parâmetros podem ser passados tanto como funções, como objetos.
