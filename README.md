# ElelisPage

Elelispage es un portafolio donde exponer informacion de estudios y abilidades personales.

## Blog

Cada publicación del blog se debe guardar en un formato `Markdown` en la carpeta `./src/content` con el siguiente formato de cabecera:
```sh
---
id: title_post
title: Title Post
description: desc
date: Month day, year hour
modified_date: Month day, year hour
---

content...
```

Al tener la publicación terminada ejecutar el comando cargará la publicación en el blog:
```sh
npm run serve
```

Y para publicar el blog:
```sh
npm run deploy
```