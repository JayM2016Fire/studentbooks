export default function TextbookList({ textbooks }) {
  if (!textbooks.length)
    return <p className="text-gray-500 italic">No results found.</p>;

  const grouped = textbooks.reduce((acc, book) => {
    const date = book.date.split("T")[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(book);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([date, books]) => (
        <div
          key={date}
          className="bg-white rounded-lg shadow p-4 border border-gray-100"
        >
          <h2 className="text-lg font-semibold text-gray-700 mb-2">{date}</h2>
          <ul className="space-y-1">
            {books.map((book) => (
              <li key={book.id}>
                <a
                  href={book.link}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {book.title}
                </a>{" "}
                <span className="text-xs text-gray-500">({book.category})</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
