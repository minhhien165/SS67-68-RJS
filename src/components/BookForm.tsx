import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../action/actions';
import { Book } from '../types';
import './css/BookForm.css';

interface BookFormProps {
  book?: Book;
  isEdit: boolean;
  onClose: () => void;
  onUpdate: (updatedBook: Book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ book, isEdit, onClose, onUpdate }) => {
  const [formData, setFormData] = useState<Book>(book || {
    id: Date.now(),
    title: '',
    borrowerName: '',
    borrowDate: '',
    returnDate: '',
    status: false,
  });
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEdit) {
      onUpdate(formData);
    } else {
      dispatch(addBook(formData));
    }
    onClose();
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Tên Sách</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label>Tên sinh viên mượn</label>
          <input
            type="text"
            name="borrowerName"
            value={formData.borrowerName}
            onChange={handleChange}
            placeholder="Borrower Name"
          />
        </div>
        <div className="form-group">
          <label>Ngày mượn</label>
          <input
            type="date"
            name="borrowDate"
            value={formData.borrowDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ngày trả</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Trạng thái</label>
          <select name="status" value={formData.status ? 'returned' : 'borrowed'} onChange={handleChange}>
            <option value="borrowed">Chưa trả</option>
            <option value="returned">Đã trả</option>
          </select>
        </div>
      </div>
      <div className="form-actions">
        <button type="submit">{isEdit ? 'Cập nhật' : 'Thêm'}</button>
        <button type="button" onClick={onClose}>Đóng</button>
      </div>
    </form>
  );
};

export default BookForm;
