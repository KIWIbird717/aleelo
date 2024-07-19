/makeStep при переходе на новую клетку

/getPractices получаем список практик, выбираем практику в соотиветсивии с той, которую хотим пройти (cell: № практики)

game-chat/practices/{practiceId}/send-message берем из getPractices id - practiceId, просто инициализация

/getMessages получаем историю чата, передаем chat.id практики из getPractices

На этапе онбординга (создание игры)
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
