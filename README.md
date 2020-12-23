# Лабораторная работа 6. React-приложение<br>Выполнил студент ИСТ-191 Клюев Андрей

## Установка

* Проверить, установлены ли:
  * **node**, введя в терминале **node -v**. Если в терминале не появилась версия, **[установить LTS версию](https://nodejs.org)**
  * **npm**, введя в терминале **npm -v**. Если в терминале не появилась версия, установить глобально, введя в терминале **npm i npm@latest -g**
* Склонировать репозиторий, введя в терминале команду **git clone https://github.com/libgit2/libgit2**
* Установить зависимости, введя в терминале **npm i**
* Запустить, введя в терминате **npm run start**

## Зависимости

* **create-react-app** как базовый шаблон react-приложения.
* **prop-types** для использования пропсов.
* **react-router-dom** для роутинга страниц.
* **node-sass** для компиляции scss стилей.
* **axios** для работы с сервером.
* **eslint** для линтинга кода.
* **eslint-config-airbnb** как конфиг линтера.

## Использованные ресурсы

* **[bootstrap](https://getbootstrap.com)** для базовых стилей элементов.
* **[placehold.it](https://placeholder.com)** для заглушки изображений.
* **[jsonplaceholder.typicode.com](http://jsonplaceholder.typicode.com)** для имитации ответа сервера.

## Что реализовано

* Страницы:
  * Main.
  * News.
  * Profile.
  * Login.
* Навигация по страницам.
* Хранение состояния авторизованности в localStore.
* Редирект на страницу "Login", при попытке перейти на страницу "Profile" если пользователь не авторизован.
* Авторизация на странице "Login".
* Логаут при нажатии на кнопку "Выйти".
* Получение списка новостей с REST API сервиса и вывод их на странице "News".

## Что не работает

* Ререндер компонентов при изменении в localStore. Придется каждый раз перезагружать страницу при авторизации/логауте - эту проблему решает Redux.
* Редирект на страницу "Profile", при успешной авторизации.

## Почему не использовал Redux

Потому что еще не успел с ним разобраться, а использовать модули-обертки не хотелось. С **react-redux** можно избавиться от этого и использовать хуки.

## Файловая структура проекта

```
web-lab6-react
├── index.js
├── App.js
├── README.md
├── package.json
├── package-lock.json
├── .eslintrc.json
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
    │   └── Profile.js
    │   └── Login.js
    │
    ├── components
    │   ├── Header.js
    │   ├── Nav.js
    │   ├── Footer.js
    │   ├── NewsCard.js
    │   └── PageTitle.js
    │
    └── assets
        │
        ├── img
        │   └── logo.svg
        │
        └── scss
            ├── _base.scss
            ├── _header.scss
            ├── _nav.scss
            ├── _footer.scss
            ├── _main.scss
            ├── _news.scss
            ├── _newsCard.scss
            ├── _login.scss
            ├── app.scss
            └── bootstrap.min.css
```
