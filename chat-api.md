/makeStep при переходе на новую клетку

/getPractices получаем список практик, выбираем практику в соотиветсивии с той, которую хотим пройти (cell: № практики)

game-chat/practices/{practiceId}/send-message берем из getPractices id - practiceId, просто инициализация

/getMessages получаем историю чата, передаем chat.id практики из getPractices

На этапе онбординга (создание игры)

/postMessage
Этапы:
Выбираем сферу в на которой фокусируемся (Любовь, семья, деньги ...)

```json
{
  "blockType": "chooseSphere",
  "chatId": "de9a9c98-051a-4cd0-8d35-44ac6708b4f8",
  "response": "chooseSphereGlory",
  "message": ""
}
```

Пишем запрос на игру

```json
{
  "blockType": "submitRequest",
  "chatId": "de9a9c98-051a-4cd0-8d35-44ac6708b4f8",
  "response": "submitRequest",
  "message": "Много много всего"
}
```

в модал щите на главной
/game/steps

# Чат создания игры

Кеймапа: libs/shared/game-structures/src/lib/game-chat-configuration.ts

- после отправки запроса на выбор сферы из post-message вернутся ключи для реплик eft, которые берутся из локализации chat*message*<KEY>, они и выводятся в чат после запроса
- Далее идет выбор из 3 запросов:
  1. **Да, я готов написать запрос**. Отправить post-message со следующими данными:
  ```ts
  {
    "blockType": "submitRequest",
    "chatId": currentGame.chatId,
    "response": "submitRequest",
    "message": "Мой запрос"
  }
  ```
  - после этого отображаем сообщения eft
  - и отправлемя post-message:
    ```ts
    {
      "blockType": "submitRequest",
      "chatId": currentGame.chatId,
      "response": "???",
      "message": "???"
    }
    ```
  2. **Я не знаю, что написать**. Отправить post-message со следующими данными:
  ```ts
  {
    "blockType": "submitRequestExplain",
    "chatId": currentGame.chatId,
    "response": "???",
    "message": "???"
  }
  ```
  3. **Выбрать другую сферу**. Отправить post-message со следующими данными:
  ```ts
  {
    "blockType": "submitRequest",
    "chatId": currentGame.chatId,
    "response": "chooseAnotherSphere",
    "message": ""
  }
  ```
