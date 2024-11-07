"use strict";

/**
 * @description Un exemple
 * @class Polygon
 */
class Polygon {
  /**
   * Creates an instance of Polygon.
   *
   * @param {*} height height
   * @param {*} width width
   * @memberof Polygon
   */
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  /**
   * @returns {number} height
   */
  get height() {
    return this._height;
  }

  /**
   *
   */
  set height(value) {
    this._height = value;
  }

  /**
   * @returns {number} width
   */
  get width() {
    return this._width;
  }

  /** */
  set width(value) {
    this._width = value;
  }

  /**
   * @returns {number} area
   */
  get area() {
    return this._height * this._width;
  }
}

const p = new Polygon(10, 8);
console.log(p.area);
