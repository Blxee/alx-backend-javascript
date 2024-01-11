import { RowID, RowElement } from './interface';

export type InsertType = (RowElement) => number;
export type DeleteType = (RowID) => void;
export type UpdateType = (RowID, RowElement) => RowID;
