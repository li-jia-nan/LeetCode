/**
 不返回任何东西，而是修改原矩阵
 */

export const rotate = (matrix: number[][]): void => {
  matrix.reverse();
  // 对角线交换
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
