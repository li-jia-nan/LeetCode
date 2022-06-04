export class Solution {
  private readonly radius: number;
  private readonly x_center: number;
  private readonly y_center: number;
  constructor(radius: number, x_center: number, y_center: number) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
  }
  public randPoint = (): number[] => {
    const { radius, x_center, y_center } = this;
    while (true) {
      const x1 = x_center - radius + Math.random() * 2 * radius;
      const y1 = y_center - radius + Math.random() * 2 * radius;
      if ((x1 - x_center) ** 2 + (y1 - y_center) ** 2 <= radius ** 2) {
        return [x1, y1];
      }
    }
  };
}
