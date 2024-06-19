import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state: RootState) => state.books);
  const filter = useSelector((state: RootState) => state.filter);

  const filteredBooks = books.filter((book) => {
    if (filter === 'ALL') return true;
    return filter === 'BORROWED' ? !book.status : book.status;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Sách</th>
            <th>Tên sinh viên mượn</th>
            <th>Ngày mượn</th>
            <th>Ngày trả</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <BookItem key={book.id} book={book} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
