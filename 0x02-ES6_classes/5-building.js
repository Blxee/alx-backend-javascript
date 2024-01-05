export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() { return this._sqft; }

  evacuationWarningMessage() {
    this.toString();
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
