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
