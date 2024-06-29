Ссылка на деплой - https://hacker-news-ycombinator-app.netlify.app/


<!-- 
#### Вопрос 2

### **Задание:**

Необходимо сделать SPA приложение с использованием библиотеки React.

### **Продуктовое описание:**

Необходимо реализовать аналог сервиса Hacker News. Нужно реализовать ленту новостей и переход на каждую конкретную новость. Дизайн на твое усмотрение.

#### Лента новостей:

*   Должен быть бесконечный скролл/пагниция, ограниченный 15/30/60 новостями на странице (точное кол-во на твое усмотрение).
*   Должны быть 3 вида сортировки (beststories, newstories и topstories).
*   При клике на заголовок должна открываться новость. При клике на комментарии, должна открыться лента комментариев для этой новости [Пример того, что должно открыться при клике на комментарии.](https://news.ycombinator.com/item?id=40704179)

Новости должны обновляться раз в 30 секунд, также должна быть кнопка для ручного обновления списка новостей (при этом после нажатия на нее таймер по обновлению списка должен сбрасываться).

#### Новость:

*   Должна содержать заголовок и ссылку на новость, score и автора новости(by).
*   Список комментариев (kids). Не забудь сделать вложенность комментариев.
*   Каждый комментарий должен содержать поле score и автора комментария.

### **Техническое описание:**

*   Необходимо реализовать **typescript** SPA приложение.
*   Описывай комментарии к функциям в формате JSDoc.
*   Постарайся по максимуму использовать нативные средства браузера. Запрещено использовать css библиотеки (tailwind, bootstrap, etc). Можно (даже нужно) использовать css modules/sass.
*   Рекомендуется **не** использовать библиотеки для запросов в api (типа Axios, React Query).
*   Сайт должен быть адаптивным и нормально выглядеть на устройствах типа iPhone SE (375\*667px).

  
Для сборки js рекомендуется использовать webpack или vite.

### **Будет плюсом:**

*   Возможность сохранять в избранное новости (можно использовать localstorage, websql). Подразумевается отдельная страницы с избранными новостями.
*   Service Worker (offline режим работы, уведомления о новых новостях, PWA).
*   Деплой на бесплатный хостинг и ссылка на него.

  
Hacker News api: [https://github.com/HackerNews/API](https://github.com/HackerNews/API)

### **Формат решения:**

Ссылка на github/gitlab репозиторий. Будем смотреть только ветку master/main, не коммить после окончания времени в них.  
Если приложению нужны переменные окружения, добавь файл .env.default. -->