# Online Tips

## Запуск 
npm i  
npm run dev

## Адрес сервера
Адрес сервера находится в переменной окружения .env.development
Остальная часть внутри  /shared/api/apiConfig.ts

## Сервис запросов 
Все запросы с энд-поинтами находятся в /shared/api/apiService.ts

# Фронтенд разработка

## Архитектура приложения - FSD
Ссылка на документацию - https://feature-sliced.github.io/documentation/ru/

## Наименование классов - БЭМ
Ссылка на документацию - https://ru.bem.info/methodology/

## SCSS
Основные вспомогательные функции находятся в app/styles/helpers.
Импорт миксинов в scss файлы - @use '../../../../app/styles/helpers' as *;( используем относительный путь, алиасы почему-то не работают, нужно пофиксить)

### Основные миксины:

fluid-text - адаптация размера шрифтов без необходимости писать медиазапросы

_mediaMixin - миксины для адаптива


