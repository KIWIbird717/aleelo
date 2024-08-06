# Чат создания игры

Кеймапа: libs/shared/game-structures/src/lib/game-chat-configuration.ts

Пример запроса post-message:

```ts
const currentGame = useCurrentGame();
const { data } = await ChatService.postMessage({...});

{
  "blockType": data.reverse()[-1].blockType,
  "chatId": currentGame.chatId,
  "response": "<КЛЮЧ ИЗ КНОПКИ>",
  "message": "<ТЕКСТ ИЗ КНОПКИ>"
}
```

# Начало игры

- проверка статуса кнопки броска кубика.
  /game/status
  Если report === null и reportSkipped === false, то отображается кнопка отчета
  ```json
  "currentStep": {
  "cell": 7,
  "diceRoll": 4, // кость которая выпадет
  "reportAfter": "2024-08-06T13:55:12.227Z", // время когда будет доступен следующий репорт
  "intensity": null,
  "emotion": null,
  "reportSkipped": false,
  "id": "c2e6cc5b-e3d7-4a99-bd9d-51706fffd4ba",
  "usefulness": null,
  "created": "2024-08-05T13:55:12.229Z",
  "report": null
  },
  ```
  Отчет когда запрос был написан. Можно проверить по report что отчет был написан. Если в reportSkipped стоит значение false, то пользователь захотел скипнуть отчет
  ```json
    "currentStep": {
    "cell": 3,
    "diceRoll": 2,
    "reportAfter": "2024-08-05T13:51:06.079Z",
    "intensity": 7,
    "emotion": "joy",
    "reportSkipped": false,
    "id": "5d3a6179-7a0f-4828-9099-050f08b3c9cd",
    "usefulness": 8,
    "created": "2024-08-05T13:51:06.080Z",
    "report": {
      "text": "Плтл",
      "length": 4,
      "spirit": "earth",
      "energy": "female",
      "id": "2374a824-62ca-481e-b116-f6b03d522903",
      "created": "2024-08-05T13:52:42.204Z"
    }
  // GET /game/status
  ```
- переход на страницу отчета
- получение чата через getMessages + currentGame?.chatId
- работа с сообщениями через post-message
- после окончания отчета переход обратно на главную страницу
- если в /game/status reportAfter < currentDate то бросок доступен
