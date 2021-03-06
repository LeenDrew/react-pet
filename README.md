# SPA React-приложение

## Демо

Посмотреть рабочую версию приложения можно по **[ссылке](https://practical-pare-fc7514.netlify.app/)**

## Установка

- Проверить, установлены ли:
  - **node**, введя в терминале **node -v**. Если в терминале не появилась версия, **[установить LTS версию](https://nodejs.org)**
  - **npm**, введя в терминале **npm -v**. Если в терминале не появилась версия, установить глобально, введя в терминале **npm i npm@latest -g**
- Склонировать репозиторий, введя в терминале **git clone https://github.com/LeenDrew/react-pet.git**
- Установить зависимости, введя в терминале **npm i** или **yarn install** (если установлен)
- Запустить, введя в терминате **npm run start** или **yarn start** (если установлен)

## Зависимости

- **create-react-app** как базовый шаблон react-приложения.
- **typescript** для статической типизации.
- **react-router-dom** для роутинга страниц.
- **node-sass** для компиляции scss стилей.
- **axios** для работы с сервером.
- **redux** как глобальное хранилище.
- ~~**redux-thunk** для асинхронных action'ов.~~
- **prettier** для форматирования кода.
- **eslint** для линтинга кода.
- **eslint-config-airbnb** как конфиг линтера.

## Использованные ресурсы

- **[bootstrap](https://getbootstrap.com)** для базовых стилей.
- **[picsum.photos](https://picsum.photos)** для заглушки изображений.
- **[jsonplaceholder.typicode.com](http://jsonplaceholder.typicode.com)** для имитации ответа сервера.
- **[Netlify](https://www.netlify.com/)** для хостинга.

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
