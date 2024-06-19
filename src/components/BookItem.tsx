import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, toggleBookStatus, updateBook } from '../action/actions';
import { Book } from '../types';
import BookForm from './BookForm';
import './css/BookItem.css';

interface BookItemProps {
  book: Book;
  index: number; // Index for STT
}

const BookItem: React.FC<BookItemProps> = ({ book, index }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(book.id));
  };

  const handleToggleStatus = () => {
    dispatch(toggleBookStatus(book.id));
  };

  const handleUpdateClick = () => {
    setIsEdit(true); // Set isEdit to true to show the BookForm for editing
  };

  const handleUpdate = (updatedBook: Book) => {
    dispatch(updateBook(updatedBook));
    setIsEdit(false); // After updating, set isEdit to false to hide the BookForm
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{book.title}</td>
      <td>{book.borrowerName}</td>
      <td>{book.borrowDate}</td>
      <td>{book.returnDate}</td>
      <td>{book.status ? 'Đã trả' : 'Chưa trả'}</td>
      <td>
        {!isEdit && (
          <>
            <button onClick={handleUpdateClick}>Sửa</button>
            <button onClick={handleRemove}>Xóa</button>
          </>
        )}
      </td>
      <td>
        {isEdit && (
          <BookForm book={book} isEdit={true} onClose={() => setIsEdit(false)} onUpdate={handleUpdate} />
        )}
      </td>
    </tr>
  );
};

export default BookItem;
