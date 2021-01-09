# SPA React-приложение

## Установка

- Проверить, установлены ли:
  - **node**, введя в терминале **node -v**. Если в терминале не появилась версия, **[установить LTS версию](https://nodejs.org)**
  - **npm**, введя в терминале **npm -v**. Если в терминале не появилась версия, установить глобально, введя в терминале **npm i npm@latest -g**
- Склонировать репозиторий, введя в терминале **git clone https://github.com/libgit2/libgit2**
- Установить зависимости, введя в терминале **npm i** или **yarn install** (если установлен)
- Запустить, введя в терминате **npm run start** или **yarn run start** (если установлен)

## Зависимости

- **create-react-app** как базовый шаблон react-приложения.
- **prop-types** для использования пропсов.
- **react-router-dom** для роутинга страниц.
- **node-sass** для компиляции scss стилей.
- **axios** для работы с сервером.
- ~~**redux** для хранения глобального состояния.~~
- ~~**redux-thunk** для асинхронных action'ов.~~
- **prettier** для форматирования кода.
- **eslint** для линтинга кода.
- **eslint-config-airbnb** как конфиг линтера.

## Использованные ресурсы

- **[bootstrap](https://getbootstrap.com)** для базовых стилей элементов.
- **[placehold.it](https://placeholder.com)** для заглушки изображений.
- **[jsonplaceholder.typicode.com](http://jsonplaceholder.typicode.com)** для имитации ответа сервера.

## Что реализовано

- Страницы:
  - Main.
  - News.
  - Profile.
  - Login.
- Навигация по страницам.
- Хранение состояния авторизованности в localStore.
- Редирект на страницу "Login", при попытке перейти на страницу "Profile" если пользователь не авторизован.
- Авторизация на странице "Login".
- Редирект на страницу "Profile" при успешной авторизации.
- Логаут при нажатии на кнопку "Выйти" в шапке.
- Получение списка новостей с REST API сервиса и вывод их на странице "News".
- TODO лист:
  - Добавление задач.
  - Удаление задач.
  - Пометка выполнения задач.
  - Хранение задач в localStore.

## Файловая структура проекта

```
web-lab6-react
├── index.js
├── App.js
├── README.md
├── package.json
├── yarn.lock
├── .eslintrc
├── .prettierrc
├── .gitignore
│
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
└── src
    │
    ├── pages
    │   ├── Main.js
    │   ├── News.js
    │   ├── Profile.js
    │   └── Login.js
    │
    ├── components
    │   ├── Header.js
    │   ├── Nav.js
    │   ├── Footer.js
    │   ├── NewsCard.js
    │   ├── PageTitle.js
    │   ├── TodoList.js
    │   ├── TodoItem.js
    │   └── Alert.js
    │
    └── assets
        │
        ├── img
        │   └── logo.svg
        │
        └── scss
            ├── app.scss
            ├── _base.scss
            ├── _header.scss
            ├── _nav.scss
            ├── _footer.scss
            ├── _news.scss
            ├── _newsCard.scss
            ├── _login.scss
            └── _todoList.scss
```
