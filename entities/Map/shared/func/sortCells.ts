import { Map } from "./cells";
import lodash from "lodash";

/**
 * трансформируем массив таким образом, чтобы
 * он правильно отображался в grid 5x8
 *
 * По-сути делаем так (упрощено до сетки 3x4):
 * шаг № 1 (инвертируем нечетные строки)
 * [1 2 3 4 5 6 7 8 9 10 11 12]
 *
 * [[1 2 3] [4 5 6] [7 8 9] [10 11 12]]
 *
 * [[1 2 3] [6 5 4] [7 8 9] [12 11 10]]
 *
 * [1 2 3 6 5 4 7 8 9 12 11 10]
 *
 * шаг № 2 (тут магия, я хз если честно)
 * [3 4 9 10 2 5 8 11 1 6 7 12]
 *
 * шаг № 3 (reverse)
 * [12 7 6 1 11 8 5 2 10 9 4 3]
 */
export const sortCells = (cells: typeof Map.cells) => {
  const cols = 8;
  const rows = 5;

  const idOdd = (num: number) => num % 2 === 0;

  // шаг № 1
  const cellsToSort = lodash
    .chunk(cells, rows)
    .map((row, index) => {
      if (!idOdd(index)) {
        return row.reverse();
      }
      return row;
    })
    .flat();

  const sortedCells = [];

  // шаг № 2
  for (let row = rows - 1; row >= 0; row--) {
    for (let col = 0; col < cols; col++) {
      sortedCells.push(cellsToSort[row + col * rows]);
    }
  }

  // шаг № 3
  return sortedCells.reverse();
};
