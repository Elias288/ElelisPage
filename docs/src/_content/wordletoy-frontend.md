---
id: wordletoy_-_frontend
title: WordleToy - Frontend
description: En esta publicación contaré el proceso de desarrollo de una pequeña recreación del famoso juego "Wordle" dividido en backend y frontend
Las teconologías que se usaron fueron Next, MongoDB, React y Tailwindcss.
date: June 10, 2023 18:00:00
---

# WordleToy Frontend

![Wordle](https://github.com/Elias288/ElelisPage/blob/main/docs/src/assets/wordle.jpg?raw=true)


<br>

---

## Introducción

El siguiente post se hará una explicacion del proceso de desarrollo del proyecto [WordleToy](https://github.com/Elias288/WordleToy/tree/master/wordleFrontend).

En este post se explicará el desarrollo del Frontend del juego usando el framwork Vite + React con typescript que se conectará al [backend](#/blog/post/wordletoy_-_backend) que se construyó para el juego.

Para este proyecto se usó este árbol de directorios

```sh
WordleFrontend
  │
  ├── src
  │   │
  │   ├─ api
  │   │   └─ wordle.api.ts
  │   │  
  │   ├─ components
  |   |   ├─ Wordle.tsx
  │   │   ├─ WordleForm.tsx
  |   |   └─ WordleItem.tsx
  │   │
  │   ├─ context
  │   │   ├─ useWord.tsx
  |   |   └─ WordleContext.tsx
  │   │
  │   ├─ intefaces
  |   |   └─ word.interface.ts
  │   │
  │   ├─ App.tsx
  │   ├─ index.css
  │   └─ main.tsx
  │
  └─ index.html
```

---

## Reglas del Juego

El comienzo del desarrolllo comenzó con encontrar las reglas del juego, que nos indicarán el funcionamiento básico del juego.

Las reglas son:

> *El objetivo del juego es adivinar una palabra secreta de cinco letras en el menor número de intentos posible. Para enviar una respuesta, escriba cualquier palabra de cinco letras y pulse Intro. Todas tus adivinanzas deben ser palabras reales, de acuerdo con un diccionario de palabras de cinco letras que Wordle permite como adivinanzas.<br>
Al acertar una letra de la palabra en la posición correcta está se marcará de color verde y al adivinar una letra pero fuera de su posición se marcará amarilla.*

<br>

---

## Conexión con el backend

Para comenzar nuestro Frontend definiremos los llamados a nuestra API del juego en `wordle.api.ts`

```ts
// Dirección de la API
const API = 'http://localhost:3000/api' 

// Función de obtener el id de una palabra random de la bd
export const getRandomWordRequest = () => fetch(`${API}/word/random`)

// Función de envió de palabra a la API
export const postWordRequest = (updatedWord: SendWord) =>
  fetch(`${API}/word/requestWord`, {
    method: 'POST',
    body: JSON.stringify(updatedWord),
    headers: {
      'Content-Type': 'application/json'
    }
  })
```

<br>

---

## Interfaces

Como se está trabajando en Vite + React con Typescript debemos definir las intefaces que nos permitirán trabajar con los tipos de datos correctos para cada campo, de lo que la API nos devuelva.

Para eso, en `word.interface.ts` definiremos nuestra interfaz `Word` donde estarán definidos todos sus campos que si recordamos es lo que retorna la función `requestWord`. del backend

```ts
// word.interface.ts
export interface Word {
  wordId: string;
  updatedWord: string;
  attempts: number;
  attemptsCount: number;
  letters: Array<Letter>;
  done: boolean;
}

export interface Letter {
  letter: string;
  status: number;
}
```

Como esta interfaz la vamos a usar tambien para recibir el id de una palabra random y tambien para enviar una respuesta al backend, necesitamos indicarle que datos serán necesarios y no para cada caso, de la siguiente forma.

- En el caso de la palabra random solo se recibe la id, asi que se omiten todos los demás campos.
- En el caso de enviar una respuesta, omitiremos el array de letras y el estado.

```ts
// word.interface.ts
export type RandomWord =  Omit<Word, 'updatedWord' | 'letters' | 'done' | 'attempts' | 'attemptsCount' >
export type SendWord = Omit<Word, 'letters' | 'done' >
```

## Contexto de Frontend

Para que todos los componentes que se creen en este framework cuenten con los datos que se necesarios, crearemos un contexto que será el encargado de enviar y recibir datos con el backend.

Para eso definimos las interfaces y creamos el contexto:
```tsx
// WordleContext.tsx
interface Props {
  children: React.ReactNode,
}
interface WordleContextValues {
  word: RandomWord
  resp: Word[]
  requestWord: (word: SendWord) => void
  restart: () => void
}

export const WordleContext = createContext<WordleContextValues>({
  word: { wordId: '' },
  resp: [],
  requestWord: () => { },
  restart: () => { },
})
```

Y definimos nuestro contexto

```tsx
// WordleContext.tsx
export const WordleProvider: React.FC<Props> = ({ children }) => {
  const [word, setWord] = useState<RandomWord>({ wordId: '' })
  const [resp, setResp] = useState<Word[]>([])

  // Obtiene una palabra random al cargar el componente
  useEffect(() => {
    getRandomWordRequest()
      .then(res => res.json())
      .then(data => setWord(data))
}, [])

  // Función que reinicia el juego
  const restart = () => {
    getRandomWordRequest()
      .then(res => res.json())
      .then(data => setWord(data))
    setResp([])
  }

  // Función que recibe una palabra y consulta si se acertó
  const requestWord = async (word: SendWord) => {
    const res = await postWordRequest(word);
    const data = await res.json();
    setResp([...resp, data]);
  }

  return (
    <WordleContext.Provider
      value={{
        word,
        resp,
        requestWord,
        restart
      }}
    >
      {children}
    </WordleContext.Provider>
  )
}
```

Todos los componentes que estén dentro de este "Contexto" podrán acceder a sus variables y funciones.

## Presentación del juego

Ya con toda la logica interna definida, podemos empezar a trabajar en la presentación del juego, lo que va a ver el jugado.

### WordleItem

Empezando por el item, aquí se tomará cada letra que llegue junto con su estado y dependiendo si este es 0, 1 o 2 se le dará un color. Recordando que:
- 0 indica que la letra no está en la palabra, se lo deja en gris.
- 1 indica que la letra está en la palabra y en la posición correcta y se le asigna el color verde.
- 2 indica que la letra está en la palabra pero no en la posición correcta y se le asigna el color amarillo.

```tsx
interface Props {
  word: Letter
}

function WordleItem({ word }: Props) {
  return (
    word.status === 0 ? (
      <div className="bg-zinc-500 flex-auto text-center p-2 w-10 rounded-lg uppercase" >
        {word.letter}
      </div>
    ) : (
      word.status === 1 ? (
        <div className="bg-green-500 flex-auto text-center p-2 w-10 rounded-lg uppercase" >
          {word.letter}
        </div>
      ) : (
        <div className="bg-yellow-500 flex-auto text-center p-2 w-10 rounded-lg uppercase" >
          {word.letter}
        </div>
      )
    )
  );
}

export default WordleItem;
```

### WordleForm

Lo importante del Form es llamar a las funciones del contexto que permita enviar la palabra ingresada, recibir y mostrar la respuesta del backend. Aqui un ejemplo reducido del formulario

```tsx
function WordleForm() {
  const { resp, word, requestWord, restart } = useWord()
  const [attempts, setattempts] = useState<number>(4)
  const [attemptsCount, setattemptsCount] = useState<number>(0)
  const [updatedWord, setUpdatedWord] = useState({
    input1: '', input2: '', input3: '', input4: '', input5: '',
  })
  ...

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // solo permitir letras
    const result = e.target.value.replace(/[^abcdefghijklmnñopqrstuvwxyz]/gi, '');
    // guardar cada letra para despúes formar la palabra
    setUpdatedWord({ ...updatedWord, [e.target.name]: result })
    ...
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // reducir cada intento
    setattempts(attempts - 1)
    // y sumar la cantidad de intentos
    setattemptsCount(attemptsCount + 1)
    // verificar que no haya espacios vacios
    if (updatedWord.input1 !== '' && updatedWord.input2 !== '' && updatedWord.input3 !== '' && updatedWord.input4 !== '' && updatedWord.input5 !== '') {
      // formar la palabra
      const sendUpdatedWord = `${updatedWord.input1}${updatedWord.input2}${updatedWord.input3}${updatedWord.input4}${updatedWord.input5}`

      // enviar la respuesta al backend
      requestWord({
        wordId: word.wordId,
        updatedWord: sendUpdatedWord,
        attempts,
        attemptsCount
      })

      ...
    }
  }

  return (
    <>
      {
        resp.length > 0 && !resp[resp.length - 1].done || resp.length === 0 ? (
          <form onSubmit={handleSubmit} >
            <div className="inline-flex w-full text-white bg-zinc-700 justify-center box-border gap-x-1" >
              <input
                  type="text"
                  value={updatedWord.input1}
                  className="bg-zinc-500 flex-auto text-center p-2 w-10 rounded-lg uppercase"
                  name="input1"
                  onChange={handleChange}
                  onKeyUp={changeFocus}
                  maxLength={1}
                  ...
                  autoFocus
              />
              ...
              <button></button>
            </div>
          </form>
        ) : (
          <>
            <button className="bg-blue-500 p-2 text-white rounded-md hover:bg-blue-700" onClick={restartAll} > Restart </button>
          </>
        )
      }
    </>
  )
}

export default WordleForm;
```


### Wordle

Por último el componente que engloba las 2 anteriores, que se encargará de listar los intentos.

```tsx
function Wordle() {
  const { resp } = useWord()

  return (
    <div className="p-4 w-[500px]">
      <h1 className="w-full font-bold text-2xl text-center pb-4">Wordle Toy</h1>
      <div className="p-2 bg-zinc-700">
        {
          resp.map((words, index) => {
            return (
              <div key={index} className="inline-flex w-full pb-1 text-white justify-center box-border gap-x-1">
                {
                  words.letters.map((letter, index) => {
                    return (
                      <WordleItem word={letter} key={index}/>
                    )
                  })
                }
              </div>
            )
          })
        }

        <WordleForm />
        <p className="text-white">Intentos: {resp.length === 0 ? 0 : resp[resp.length - 1].attemptsCount + 1} de 5</p>
      </div>
    </div>
  );
}

export default Wordle;
```

Resultado del Frontend, un juego terminado:

![WorleFrontend](https://github.com/Elias288/ElelisPage/blob/main/docs/src/assets/WordleFrontend.png?raw=true)

<br>

---


# Conclusión

En este proyecto se afrontaron muchos retos de programación y utilización tecnologías nuevas que generarón un crecimiento en el entendimiento de estas y experiencia para proximos proyectos en los que se enfrenten a retos similares. 

Fue una experiencia interesante y más con el uso de inteligencia artifical para generar partes del código que fue una agradable sorpresa.

Espero que sea de utilidad para alguien más que a mi.

<small style="display: block; text-align: right;">Elias Bianchi</small>
