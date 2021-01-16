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
