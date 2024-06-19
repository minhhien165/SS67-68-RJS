// src/types.ts
export interface Book {
  id: number;
  title: string;
  borrowerName:string;
  borrowDate: string;
  returnDate: string;
  status: boolean;
}



export interface Action<T = any> {
  type: string;
  payload?: T;
}
