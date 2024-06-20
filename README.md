# 🚀 Get started

## Запуск в dev моде

Данная инструкция описывает как запустить проект для его разработки

### 1. Установка зависимостей

```shell
npm install
```

### 2. Создание local https сертификата

На этом проекте данный сертификат уже создан, который действителен до 20 сентября 2026 года. Если проблем с сертификатом нет, то **данный шаг можно пропустить**.

Для создания сертификата нужно прописать команду (для macos/linux), указав название хоста в <НАЗВАНЕ ХОСТА>, например tg-mini-app.local

```shell
mkdir -p .cert && mkcert -key-file ./.cert/localhost-key.pem -cert-file ./.cert/localhost.pem '<НАЗВАНЕ ХОСТА>'
```

Не забыть поменять название хоста в `.env` файле в переменной `DEV_HOST`

### 3. Добавление локального домена

Для добавления локального домена нужно обновить файл `/etc/hosts` на вашей системе, для этого нужно выполнить следующие шаги. Эти шаги нужны для настройки локального резолвинга домена `tg-mini-app.local` на `127.0.0.1`

##### Шаги для macOS и Linux

1. **Откройте терминал**

2. **Откройте файл `/etc/hosts` с правами администратора**:
   Введите следующую команду и нажмите `Enter`:

   ```sh
   sudo nano /etc/hosts
   ```

   Вам потребуется ввести пароль администратора.

3. **Добавьте новую строку для вашего локального домена**:
   Прокрутите вниз файла и добавьте следующую строку:

   ```plaintext
   127.0.0.1 tg-mini-app.local
   ```

4. **Сохраните изменения и выйдите**:

   - Нажмите `Ctrl + O`, затем `Enter`, чтобы сохранить файл.
   - Нажмите `Ctrl + X`, чтобы выйти из редактора.

5. **Проверьте изменения**:
   В терминале выполните команду `ping`, чтобы убедиться, что домен резолвится правильно:
   ```sh
   ping tg-mini-app.local
   ```
   Вы должны увидеть ответ от `127.0.0.1`.

##### Шаги для Windows

1. **Откройте блокнот с правами администратора**:

   - Нажмите `Win + S`, введите `Notepad`, затем правой кнопкой мыши выберите `Run as administrator`.

2. **Откройте файл `hosts`**:
   В блокноте выберите `File > Open`, затем введите следующий путь в поле для файлов:

   ```plaintext
   C:\Windows\System32\drivers\etc\hosts
   ```

   Убедитесь, что внизу выбрано отображение всех файлов (`All Files`), чтобы вы могли видеть файл `hosts`.

3. **Добавьте новую строку для вашего локального домена**:
   Добавьте следующую строку в конец файла:

   ```plaintext
   127.0.0.1 tg-mini-app.local
   ```

4. **Сохраните изменения и закройте блокнот**.

5. **Проверьте изменения**:
   Откройте командную строку (Cmd) и выполните команду:
   ```sh
   ping tg-mini-app.local
   ```
   Вы должны увидеть ответ от `127.0.0.1`.

#### Пример измененного файла `/etc/hosts`

```plaintext
# /etc/hosts

127.0.0.1   localhost
127.0.1.1   mymachine
# Добавьте эту строку
127.0.0.1   tg-mini-app.local
```

### 4. Запуск проекта

Для запуска проекта можно использовать одну из следующих команд:

- Запуск nextjs приложения в dev режиме с локальным https сертификатом. Равносильно команде `npm run dev`, только следующая для запуска на локальном https сертификатом
  ```shell
  npm run cert dev
  ```
- Запуск билда приложения nextjs с локальным https сертификатом. Равносильно команде `npm run build & npm run start`, только следующая для запуска на локальном https сертификатом
  ```shell
   npm run cert start
  ```

### 5. Запуск в telegram webapp

Для запуска проекта в telegram webapp можно воспользоваться уже готовым ботом [Swipy Dating](https://t.me/swipy_dating_bot). Данный бот поддерживает команду для запуска другого проекта по предоставленной https ссылке.

- Необходимо отправить в бота следующее сообщение или вместо `https://tg-mini-app.local:3000/` вставить свою если был сгенерирован новый сертификат с новой ссылкой:
  ```sh
  /link https://tg-mini-app.local:3000/
  ```
- Открыть telegram webapp приложение по высланной от бота ссылке

## Запуск в production моде

Для деплоя на сервер

1. **Выключить логирование в консоль**
   В .env файле установить следующие переменные в состояние выключено
   ```dosini
   # logger
   NEXT_PUBLIC_LOGGER_STATE = off
   NEXT_PUBLIC_TRACE_ERRORS = false
   ```
2. **Запуск проекта**
   Запустить проект, сконфигурированный на docker
   ```shell
   docker-compose up --build -d
   ```
3. **Готово!**
   Приложение доступно по адресу `http://localhost:3000`

# 🏗️ Структура проекта

На проекте используется структура FSD

- ссылка на подробную документацию FSD структуры [Feature-Sliced Design](https://feature-sliced.design/)
- ссылка на статью из документации FSD по использованию данной структуры с nextjs [Dealing with App Router](https://feature-sliced.design/docs/guides/tech/with-nextjs#app-router)
- На данном проекте структура немного адаптирована под nextjs.
  - `app` - директория для роутинга и страниц. Заменяет директорию `page` из FSD стиля
  - `entities` - директория согласно идеологии FSD
  - `features` - директория согласно идеологии FSD
  - `public` - директория для хранения медиа, конфигов и подобное. Объединяет в себе фолдер **public** из базовой структуры проекта на nextjs и фолдер **app** согласно идеологии FSD
  - `shared` - директория согласно идеологии FSD
  - `widgets` - директория согласно идеологии FSD

# 🔒 Предотвращение закрытия окна telegram webapp

**МОЖНО ОЗНАКОМИТСЯ С ДЕМО ПРОЕКТОМ, ГДЕ ПОКАЗАНО ВСЕ НА ПРИМЕРАХ** ВОТ ССЫЛКА НА РЕПОЗИТОРИЙ: https://github.com/KIWIbird717/prevent-tg-webapp-con-swipe-close

Окно telegram webapp может закрываться при свайпе вниз, если пользователь долистал с низу страницы до верха, или когда пользователь находится на странице, где нет скрола (то-есть контент помещается по высоте экрана) то если он сделает свайп вниз, то окно telegram webapp также свернется. Для каждого из этих случаев предусмотрено 3 сценария предотвращения закрытия окна telegram webapp:

##### 1. Для страниц со скролом.

Если на странице размещен контент который не помещается по ширине экрана (то-есть появляется скрол), то нужно использовать layout обвертку `View`. При использовании данной обертки предотвращается закрытие окна telegram webapp при скроле сверху вниз в начале страницы.

Пример:

```tsx
export default function WithViewFull() {
  return (
    <View className="flex flex-col gap-4 p-4">
      <Link href="./" className="rounded-xl bg-slate-100 px-4 py-2 text-[20px]">
        Назад
      </Link>
      <h1 className="text-center text-[40px] font-bold leading-[45px]">
        <span className="text-emerald-500">View</span> компонент и страница со скролом
      </h1>

      <PseduoContent />
    </View>
  );
}
```

##### 2. Для страниц без скрола. Кейс № 1

Если на странице контент помещается по ширине экрана без скрола, то для предотвращения закрытия страницы по свайпу внизу, можно также использовать обвертку `View`, контент от этого никак не изменится, но пропадет закрытие окна webapp по скролу вниз.

Это самый оптимальный вариант и в большинстве кейсов на страницах лучше использовать обвертку `View`. Но у первых 2-х способов есть небольшой минус в виде оверскрола страницы в самой верхней и нижней части страницы. Для предотвращения такого поведения есть 3-й способ.

#### 3. Для страниц без скрола. Кейс № 2

Если требуется полностью зафиксировать страницу с контентом который полностью помещается на экране (то-есть скрол при этом отсутствует) и при этом предотвратить закрытие окна telegram webapp, то для этого можно использовать хук `usePreventScroll`. Данный хук полностью блокирует эвент скрола в компоненте.
Описание хука и примеры использования в самом файле с хуком `usePreventScroll.ts`

# 🈶 Локализация

Локализация имплементирована с помощью библиотеки `next-intl`. Более подробная документация тут: [Документация для next-intl](https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing). Локализация на проекте была выполнена по инструкции с вышеупомянутого источника.

### Где находятся все переводы?

Переводы хранятся на сервере (base url указывается в .env `NEXT_PUBLIC_MEDIA_BASE_URL`). Для получения файла с переводом нужно сделать GET запрос по роуту `/localisation/<locale>.json`, где locale - это iso код языка для которого нужен перевод (доступны `ru` и `en`)

### Как использовать переводы в компонентах?

Для создания переводов на сайте нужно просто воспользоваться хуком `useTranslations`. Данный хук работает как на client-side, так и на server-side. Пример использования:

```tsx
import { useTranslations } from "next-intl";

export function HelloComponent() {
  // в функцию можно сразу передать рабочий путь
  const t = useTranslations("Main");

  return <h1>{t("hello")}</h1>;
}
```

Внимание! Для того чтобы хук работал на client-side нужно обвернуть компонент в котором используется хук в `NextIntlClientProvider` и передать туда значение из хука `useMessages`. Пример:

```tsx
export default function Layout({ children }: { children: ReactNode }) {
  // этот хук можно использовать и в серверном компоненте
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <section>{children}</section>
    </NextIntlClientProvider>
  );
}
```

### Реализация установки нужного языка

1. При отправке запроса на сервер next для получения бандла отрабатывает `middleware`, который стразу перенаправляет пользователя по дефолтному указанному в настройках языку `en` (добавляет `../en` в конец роута). В middleware отключена автоматическое обнаружение языка.
2. В фале `i18n.ts` в корне проекта происходит запрос на сервер для получения необходимого перевода
3. Затем пользователь попадает на страницу первой загрузки приложения на дефолтный роут `{{ host }}/en`.

# ⚛️ Как использовать redux на проекте

### Структура

Директория для redux в проекте расположена в `src/shared/lib/redux-store`

```
└── redux-store
    └── ...
```

- Для каждой или компонента страницы в проекте создается отдельный фолдер в папке `/redux-store/slices`.
- В каждой папке слайса обязательно нахождение самого файла с моделью слайса `<slice name>Slice.ts` и его экшены. А также файл `types.d.ts`, в котором находятся все используемые типы в слайсе.

  Название папки для каждого слайса должно быть связано со страницей на которой используется данный слайс. Например: если redux actions будут использованы на странице `my`, то название папки для слайса в директории `/redux-store/slices` должно быть `/my-slice`

  Итоговая структура фолдера для слайса должна выглядеть так:

  ```
  	└── my-slice
  	    ├── mySlice.ts
  	    └── types.ts
  ```

- **Опционально**. Если компонент на проекте требует слишком большого кол-ва экшенов, то в папке слайса для страницы можно поместить отдельную папку со слайсами для отдельного компонента. Вложенная структура должна повторять вышеописанную структуру для папки слайса. За исключением названия, оно должно быть связано не со страницей, а с названием компонента. Например:
  ```
  └── my-slice
  	  ├── component-slice
  	  │  ├── componentSlice.ts
  	  │  └── types.ts
  	  ├── mySlice.ts
  	  └── types.ts
  ```

### Создание слайса

На проекте используется **Reducers and Actions with createSlice** схема. Подробнее про архитектуру и примеры использования можно прочитать на официальном сайте redux: [Reducers and Actions with createSlice](https://redux.js.org/usage/migrating-to-modern-redux#reducers-and-actions-with-createslice)

- После создания слайса не забыть добавить его в `configureStore` и `combineReducers`. Обе функции находятся в `utils/redux/store.ts`.

  Название для поля слайса в `configureStore` и `combineReducers` должно совпадать с установленным названием для слайса в файле с моделью слайса (поле `name` в функции `createSlice`). Название для полей в `configureStore` и `combineReducers` должно быть одинаковым.

- Также хорошей практикой будет экспорт переменных из слайса с помощью namespace

- Пример создания слайса:

  ```ts
  // utils/redux/my-slice/mySlice.ts
  "use client";

  import { createSlice } from "@reduxjs/toolkit";
  import type IMySlice from "./types.d.ts";

  export namespace MySlice {
    /**
     * Создаем изначальное состояния для значений в слайсе.
     * Также применяем к изначальному состоянию тип этого состояния.
     *
     * Представим, что из файла utils/redux/my-slice/types.d.ts
     * экспортируется по дефолту такой интерфейс:
     * interface IMySlice {
     *   something: string | null
     * }
     */
    const initialState: IMySlice = {
      something: null,
    };

    // создаем слайс
    export const mySlice = createSlice({
      name: "my",
      initialState,
      reducers: {
        setSomething: (state, action: PayloadAction<IMySlice["something"]>) => {
          state.something = action.payload;
        },
      },
    });

    // экспорт слайса. Экспортируем экшены и редьюсеры
    export const { setSomething } = authSlice.actions;
    export const myReducer = mySlice.reducer;
    export const Type = IMySlice; // экспортируем тип слайса, чтобы его удобно можно было достать из namespace
  }
  ```

- Пример объединения редьюсеров:

  ```ts
  // frontend/src/shared/lib/redux-store/store.ts

  import { configureStore } from "@reduxjs/toolkit";
  import { MySlice } from "./slices/user-slice/userSlice";

  export const store = () => {
    return configureStore({
      reducer: {
        user: MySlice.myReducer,
      },
      /**
       * You cant set up more middlewares
       * Check instruction: @see https://redux-toolkit.js.org/api/serializabilityMiddleware
       */
      middleware: (gDM) => gDM({ serializableCheck: false }),
    });
  };

  // Infer the type of makeStore
  export type AppStore = ReturnType<typeof store>;
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<AppStore["getState"]>;
  export type AppDispatch = AppStore["dispatch"];
  ```

### Получение состояния

Для получения состояния из redux нужно использовать хук `useAppSelector` из файла `src/shared/lib/redux-store/hooks/index.ts`. Пример:

```ts
import { useAppSelector } from "@/shared/lib/redux-store/hooks";
import type { StoreState } from "@/utils/redux/store";

function Component() {
	const myState = useAppSelector((state: StoreState) => state.my.something)
	return (...)
}
```

### Мутация состояния

Для мутации (изменения) состояния в redux store используется хук `useDispatch` из библиотеки `react-redux`. А также необходимо импортировать редьюсер из вашего слайса. Пример мутации:

```ts
import { useAppDispatch } from "@/shared/lib/redux-store/hooks";
import { setSomething } from "@/utils/redux/my-slice/mySlice"

function Components() {
 const dispatch = useAppDispatch()

	const changeSomethingState = () => {
		dispatch(setSomething("something2"))
	}

	return (...)
}
```

# 🖨️ Logger

Класс Logger выводит сообщения в консоль в зависимости от настроек окружения.

## Get started with logger

Использовать вместо обычного console.log, console.error, console.warn. Данный
класс должен использоваться только во время разработки. После сборки проекта
отключить вывод сообщений в консоль в .env файле поставив переменную окружения
`NEXT_PUBLIC_LOGGER_STATE = off`. Изначально переменная окружения `NEXT_PUBLIC_LOGGER_STATE`

стоит в значении `on`.

Если в логере нужно отслеживать где была вызвана ошибка, то в переменной окружения
в .env файле нужно поставить переменную окружения `NEXT_PUBLIC_NEXT_PUBLIC_TRACE_ERRORS = true`.
Таким образом в консоли будет отображаться стек вызовов функций.

## Usage

```typescript
// Логирование без контекста
Logger.log("log message"); // [LOG] 05:10:21 - log message
Logger.debug("debug message"); // [DEBUG] 05:10:21 - debug message
Logger.warn("warn message"); // [WARN] 05:10:21 - warn message
Logger.error("error message"); // [ERROR] 05:10:21 - error message

// Логирование c контекста
const logger = new Logger("context");
logger.log("log message with context"); // [LOG] 05:10:21 [context] - log message with context
logger.debug("debug message with context"); // [DEBUG] 05:10:21 [context] - debug message with context
logger.warn("warn message with context"); // [WARN] 05:10:21 [context] - warn message with context
logger.error("error message with context"); // [ERROR] 05:10:21 [context] - error message with context
```
