function BookList({ books }) {
    if (books.length === 0) {
        return <p>No books available</p>
    }
    return (
        <ul>
            {books.map(book => (
                <li key={book.id}>
                    {book.title} - {book.author} - ({book.year})
                </li>
            ))}
        </ul>
    )
        
}
export default BookList;