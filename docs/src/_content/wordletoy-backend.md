---
id: wordletoy_-_backend
title: WordleToy - Backend
description: En esta publicación contaré el proceso de desarrollo de una pequeña recreación del famoso juego "Wordle" dividido en backend y frontend
Las teconologías que se usaron fueron Next, MongoDB, React y Tailwindcss.
[WordleToy](https://github.com/Elias288/WordleToy/tree/master/wordleBackend)
date: June 10, 2023 10:17:00
---

# WordleToy Backend

![Wordle](https://github.com/Elias288/ElelisPage/blob/main/docs/src/assets/wordle.jpg?raw=true)


<br>

---

## Introducción

El siguiente post se hará una explicacion del proceso de desarrollo del proyecto [WordleToy](https://github.com/Elias288/WordleToy/tree/master/wordleBackend) que se realizó con el objetivo de poner en practica usos de tecnologías y métodos. 

En este post se explicará el desarrollo del backend para el funcionamiento del juego usando el framework NestJS y MongoDB en la base de datos.

Para este proyecto se usó este árbol de directorios

```sh
WordleBackend
  |
  ├── src
  |   |
  │   ├─ dto
  |   |   ├─ createWord.dto.ts
  │   │   ├─ requestWord.dto.ts
  │   │   └─ responseWord.dto.ts
  |   |
  │   ├─ schemas  
  |   |   └─ word.schema.ts
  |   |
  │   └─ word  
  |       ├─ word.controller.ts
  |       ├─ word.module.ts
  |       └─ word.service.ts
  |
  ├─ app.module.ts
  └─ main.ts
```

<br>

---

## Reglas del Juego

El comienzo del desarrolllo comenzó con encontrar las reglas del juego, que nos indicarán el funcionamiento básico del juego.

Las reglas son:

> *El objetivo del juego es adivinar una palabra secreta de cinco letras en el menor número de intentos posible. Para enviar una respuesta, escriba cualquier palabra de cinco letras y pulse Intro. Todas tus adivinanzas deben ser palabras reales, de acuerdo con un diccionario de palabras de cinco letras que Wordle permite como adivinanzas.<br>
Al acertar una letra de la palabra en la posición correcta está se marcará de color verde y al adivinar una letra pero fuera de su posición se marcará amarilla.*

<br>

---

## Ambiente de desarrollo

Ya con eso en mente empecé la construcción del backend usando el framework *NextJs* haciendo uso de un ambiente de desarrollo en fedora construido en un contenedor de podman y así no tener que instalar los binarios del framework. El contenedor se generó con las siguientes instrucciones:

```yaml
# Containerfile
FROM fedora:38                  # Usando la imagen de fedora v38
RUN mkdir -p /usr/src/app       # Se crea un directorio 
WORKDIR /usr/src/app            # Y se lo define como el directorio de trabajo

RUN dnf upgrade -y              # Actualizamos el SO
RUN dnf install -y \            # y empezamos a instalar todo lo que necesitaremos
  procps && \
  dnf module install -y \
  nodejs
RUN npm install -g npm@9.6.7 \
  @nestjs/cli
```

> \* **Nota importante**: el contenedor del hambiente de desarrollo no cuenta con permisos necesarios, por lo tanto el framework se debe generar desde fuera o habilitarle los permisos necesarios a los directorios.

Para generar el proyecto de nest se clonó un repositorio de github como se explica en las alternativas de instalación en la [documentación de NestJs](https://docs.nestjs.com/#installation).

Junto con este "hambiente" en un contenedor además se necesitará una base de datos en MongoDB donde cargar todas las palabar permitidas en el juego, que tambien monté en un contenedor. 

Para poder gestionar esos contenedores, estos deben estar en un "pod".

Ya que todo eso es muy laborioso, para que se genere todo con un simple comando simplemente se crea un manifiesto *yaml* que se encargue de construir todos los contenedores con el comando de podman

```sh
podman play kube devEnvironment.yaml
```

Este archivo `devEnvironment.yaml` contiene las siguientes instrucciones:

```yaml
# devEnvironment.yaml
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2023-05-31T13:44:16Z"
  labels:
    app: wordle-pod
  name: wordle-pod
spec:
  containers:
  - name: backend
    image: localhost/fedoradevnestjsimg:latest
    stdin: true
    tty: true
    ports:
      - containerPort: 3000
        hostPort: 3000
    volumeMounts:
    - mountPath: /usr/src/app
      name: fedoraVolume
  - name: mongoDB
    image: mongo
    ports: 
      - containerPort: 27017
        hostPort: 27017
    environment:
      - MONGO_INITDB_ROOT_USERNAME: root
      - MONGO_INITDB_ROOT_PASSWORD: dbPassword
    volumeMounts:
    - mountPath: /data/db
      name: wordleMongoDb
  volumes:
  - name: fedoraVolume
    hostPath:
      path: /mnt/c/.../WordleGame/wordleBackend
      type: Directory
  - name: wordleMongoDb
    persistentVolumeClaim:
        claimName: wordleMongoDb_-_db-volume
```

> \* **Nota importante**: en este archivo hay que definir `MONGO_INITDB_ROOT_PASSWORD` del contenedor de `mongodb` y `path` en `fedoraVolume`

La definición de los volumenes es la parte más importante ya que con ellos podremos decirle al hambiente de desarrollo en que path debe tomar los archivos que trabajaremos, y en el caso de la bd guardar la información fuera del contenedor y que podrá ser reutilizada por otros contenedores en caso de que lo necesitemos.

<br>

---

## Backend usando Nest y MongoDB

Lo que sigue es una explicación de codigo:

### Conectar BD

Como se explicó en [ambiente para el backend](#ambiente-para-el-backend) el servidor de MongoDB está en un contenedor que expone los puertos `27017` y la conexión se realiza a traves de `mongodb://localhost:27017/<databaseName>`.

Para que nuestro servidor de nestjs pueda conectarse es necesario instalar las dependencias de `mongoose` y `@nestjs/mongoose` como se explica en las [Técnicas](https://docs.nestjs.com/techniques/mongodb) de NestJs.


```ts
// app.modules.ts
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/wordleDb'),
  ],
})
export class AppModule {}
```

### Esquema de Palabras

Ahora que el backend está conectado al servidor de la BD es hora de crear el esquema que nos permitirá hacer uso de las funciones de mongoose para listar, guardar, modificar y borrar registros de la BD.

En este esquema solo es necesario guardar una palabra y también controladores.

```ts
// word.schemas.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Word {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  word: string;
}

export const WordSchema = SchemaFactory.createForClass(Word);
```

### Modulo, Controlador y Servicios

Despúes se generó la estructura de la api, empezando por el modulo `word.module.ts`, el controlador `word.controller.ts` y los servicios en `word.service.ts`.

En el modulo importaremos el esquema y el constructor:

```ts
// word.module.ts
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Word.name, schema: WordSchema }]),
  ],
  providers: [WordService],
  controllers: [WordController],
  exports: [WordService],
})
```
En los servicios se crearon las funciones básicas de listar todo, buscar por id, crear y eliminar.

```ts
// word.service.ts
@Injectable()
export class WordService {
  constructor(@InjectModel(Word.name) private wordleModel: Model<Word>) {}

  findAll() {
    return this.wordleModel.find();
  }

  findOne(id: string) {
    return this.wordleModel.findById(id);
  }

  async create(createWord: CreateWordleDto) {
    const newWord = new this.wordleModel(createWord);
    return await newWord.save();
  }

  async delete(id: string) {
    return this.wordleModel.findByIdAndDelete(id);
  }
}
```

La función que traera una palabra random de todo el registro, que será la que se tendra que adivinar

```ts
// word.service.ts
async findRandomeOne() {
  const randomWord = await this.wordleModel.aggregate([
    { $sample: { size: 1 } },
  ]);
  return { wordId: randomWord[0]._id };
}
```

Y la función principal del juego, que es la encargada de comparar y devolver un resultado de la palabra escrita con la que se debe adiviniar.

El funcionamiento es el siguiente:

La palabra ingresada y la que se debe adivinar se divide por letra y se las recorre una a una, y por cada una se le asigna un numero del 0 al 2 dependiendo de:

- Si la letra no está en la palabra a adivinar se le asigna un 0.
- Si la letra está en la palabra y está en la posición correcta se le asigna un 1
- Si la letra está en la palabra pero no está en la posición correcta se le asigna un 2

```ts
// word.service.ts
async requestWord(consult: requestWord): Promise<responseWord> {
  const wordToGuess = await this.wordService.findOne(consult.wordId);
  const arr = [...consult.updatedWord.split('')];
  const wordToGuessArr = [...wordToGuess.word];
  if (arr.length !== wordToGuessArr.length) {
    throw new Error('Los arrays deben tener la misma longitud');
  }

  let gameStatus = true;
  const resultado = [];
  const wordToGuessArrCopy = wordToGuessArr.slice();

  for (let i = 0; i < arr.length; i++) {
    const caracter = arr[i];
    let estado = 0;
    const caracterIndex = wordToGuessArrCopy.indexOf(caracter);

    if (caracterIndex !== -1) {
      if (caracterIndex === i) {
        estado = 1;
      } else {
        estado = 2;
      }

      wordToGuessArrCopy[caracterIndex] = null;
    } else if (arr.indexOf(caracter) < i) {
      estado = 0;
    }

    resultado.push({
      letter: caracter,
      status: estado,
    });
  }

  gameStatus =
    !resultado.some((letter) => letter.status === 0 || letter.status === 2) || consult.attempts === 0;

  return {
    wordId: consult.wordId,
    letters: resultado,
    attempts: consult.attempts,
    attemptsCount: consult.attemptsCount,
    done: gameStatus,
  };
}
```

El resultado final de está función es una objeto con todos los datos necesarios que indicarán al jugador si acertó o no.

```json
{
  "wordId": string, // Id de la palabra a adivinar
  "letters": Array<{letter, status}>, // Letras ingresadas y su estado
  "attempts": number, // Número de intentos restantes
  "attemptsCount": number, // Número de intentos realizados
  "done": boolean, // Indicador de juego finalizado
}
```

Un ejemplo:

```json
{
  "wordId": "sfgdfgbs4354",
  "letters": [
    {
      "letter": "p",
      "status": 1
    },
    {
      "letter": "e",
      "status": 1
    },
    {
      "letter": "r",
      "status": 1
    },
    {
      "letter": "r",
      "status": 1
    },
    {
      "letter": "o",
      "status": 1
    },
  ],
  "attempts": 2,
  "attemptsCount": 3,
  "done": true
}
```

Para controlar los tipos de datos que serán enviados y recibidos, antes de definir los controladores definiremos los DTOs. Estos se encargarán de verificar los tipos de datos y si son obligatiorios o no.

```ts
export class responseWord {
  @IsString()
  @IsNotEmpty()
  wordId: string;

  letters: letterStatus[];

  @IsNumber()
  @IsOptional()
  attempts: number;

  @IsNumber()
  @IsOptional()
  attemptsCount: number;

  @IsBoolean()
  @IsOptional()
  done: boolean;
}

interface letterStatus {
  letter: string;
  status: number;
}
```

En el controlador se definen las rutas de la API y a que servicios seran llamados desde estos.

```ts
// word.controller.ts
@Controller('word')
export class WordController {
  constructor(private wordService: WordService) {}

  @Get()
  findAll() {
    return this.wordService.findAll();
  }

  @Get('random')
  findRandomOne() {
    return this.wordService.findRandomeOne();
  }

  @Post()
  async createWord(@Body() body: CreateWordleDto) {
    try {
      return await this.wordService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Word already exists.');
      }
      throw error;
    }
  }

  @Post('requestWord')
  async submitWord(@Body() body: requestWord): Promise<responseWord> {
    return await this.wordService.requestWord(body);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteWordle(@Param('id') id: string) {
    const wordle = await this.wordService.delete(id);
    if (!wordle) throw new NotFoundException('Word not found');
    return wordle;
  }
}
```

Resultado de llamar a la función `findRandomOne`

![WordleBackend](https://github.com/Elias288/ElelisPage/blob/main/docs/src/assets/WordleBackend.png?raw=true)

## Siguiente paso

Con todo esto ya tenemos una API con el que se puede jugar, lo que faltaría es construir un frontend que permita al jugador ingresarle las palabras y juegar.

En el siguiente publicación se explica el [desarrollo del frontend de WordleToy](#/blog/post/wordletoy_-_frontend)