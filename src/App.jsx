import { useState } from 'react'
import Book from './components/Book'
import BookArray from './book'
import './App.css'

const App = () => {

  const [allBook, setAllBook] = useState(BookArray)

  const handleClear = () => {
    {
      allBook.length > 0 ? setAllBook([]) : setAllBook(BookArray)
    }
  }

  const handleRemove = (id) => {

    const bookToRemove = allBook.find(book => book.id === id);

    if (bookToRemove) {
      const newBook = allBook.filter(book => book.id !== id);
      alert(`Book Number ${id} is removed. The author is: ${bookToRemove.author}`);
      setAllBook(newBook);
    }
  }


  const allBooks = allBook.map(book => <Book {...book} key={book.id} handleRemove={handleRemove} />)

  return (

    <div className='app container'>

      <h1 className='best-book'>Top 10 Best Amazon seller books</h1>

      <div>
        <button className='clear-btn' onClick={handleClear}> {allBook.length > 0 ? "Clear All Books" : "Show All books"}</button>
      </div>

      <div className="books container">
        {allBooks}
      </div>
    </div>
  )
}

export default App

