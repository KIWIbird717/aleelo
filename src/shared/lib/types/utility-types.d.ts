/**
 * Change the type of Keys of T from NewType
 *
 * @example
 * // initial type
 * type User = {
 *   id: number
 *   name: string
 *   age: number
 *   hobbies: []
 * }
 * // use `ChangeTypeOfKeys` utility type
 * type OtherUser = ChangeTypeOfKeys<User, 'id' | 'age', string>
 * // now we have type with changed keys type
 * type OtherUser = {
 *  id: string
 *  name: string
 *  age: string
 *  hobbies: []
 * }
 */
export type ChangeTypeOfKeys<T extends object, Keys extends keyof T, NewType> = {
  [key in keyof T]: key extends Keys ? NewType : T[key];
};

/**
 * Remove null and undefined from T
 */
export type NonNullable<T> = Exclude<T, null | undefined>;

/**
 * If you want a partial implementation that works recursively on
 * objects then you can use the following type (only applied for TS 4.1+):
 *
 * @example
 * type myObjectType = {
 *   user: {
 *     firstName: string,
 *     lastName: string,
 *     dopInfo: {
 *       location: string,
 *       geoposition: string
 *     }
 *   },
 *   currency: {
 *     current: stirng,
 *     amount: number,
 *   }
 * }
 *
 * type myDeapPartialObjectType = DeepPartial<myObjectType>
 * // now it has type like in example below 👇
 * type myDeapPartialObjectType = {
 *   user: {
 *     firstName: string | null,
 *     lastName: string | null,
 *     dopInfo: {
 *       location: string | null,
 *       geoposition: string | null,
 *     } | null
 *   } | null,
 *   currency: {
 *     current: stirng | null,
 *     amount: number | null,
 *   } | null
 * }
 */
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Oбъединяет 2 тиаа объектов
 * Ссылка с объяснением: https://habr.com/ru/articles/526998/
 */
export type DeepMergeTwoTypes<T, U> =
  // проверяет являются ли типы массивами, распаковывает их и
  // запускает рекурсию
  [T, U] extends [(infer TItem)[], (infer UItem)[]]
    ? DeepMergeTwoTypes<TItem, UItem>[]
    : // если типы это объекты
      [T, U] extends [{ [key: string]: unknown }, { [key: string]: unknown }]
      ? MergeTwoObjects<T, U>
      : [T, U] extends [
            { [key: string]: unknown } | undefined,
            { [key: string]: unknown } | undefined,
          ]
        ? MergeTwoObjects<NonNullable<T>, NonNullable<U>> | undefined
        : T | U;

/**
 * Получить типы аргументов функции
 * Взял от сюда: https://stackoverflow.com/questions/51851677/how-to-get-argument-types-from-function-in-typescript
 */
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

/**
 * Получить тип в красивом виде
 * Нужно только для просмотра тиапа в IDE
 */
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * Пример использования:
 * interface MyType {
 *   required: string;
 *   optional: number;
 *   anotherRequired: boolean;
 * }
 *
 * Делаем поле "optional" необязательным
 * type MyPartialType = MakeFieldsPartial<MyType, 'optional'>;
 *
 * Теперь поле "optional" в MyPartialType является необязательным, а остальные поля остаются без изменений.
 */
export type MakeFieldsPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
