/**
 * global description
 */
class Polygon {
  /**
   * @param area - comment
   */
  area = 0;

  /**
   * description
   *
   * @param height - comment
   * @param width - comment
   */
  constructor(height: number, width: number) {
    this.area = height * width;
  }

  /**
   * description
   *
   * @param name - comment
   * @returns returned value
   */
  trace(name: string): string {
    return name;
  }
}

const p = new Polygon(10, 8);
p.trace("test");
