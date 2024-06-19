import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Filter from './components/Filter';

const App = () => {
  const [isEdit, setIsEdit] = useState(false); // State to manage if BookForm is in edit mode

  // Function to handle closing BookForm
  const handleCloseForm = () => {
    setIsEdit(false); // Set isEdit to false to close BookForm
  };

  return (
    <Provider store={store}>
      <div>
        <h1>Library Management</h1>
        <Filter />
        {/* Pass isEdit and onClose props to BookForm */}
        <BookForm isEdit={isEdit} onClose={handleCloseForm} />
        <BookList />
      </div>
    </Provider>
  );
};

export default App;
