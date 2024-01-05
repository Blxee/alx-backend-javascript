export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (!('evacuationWarningMessage' in this)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() { return this._sqft; }
}
