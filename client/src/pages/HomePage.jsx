import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import { Link } from "react-router-dom";

const dummyTextbooks = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Textbook ${i + 1}`,
  image: i % 2 === 0 ? reactLogo : viteLogo,
  link: "/dummy-textbook-page",
  category: ["Math", "Science", "Literature"][i % 3],
  date: `2025-05-${String((i % 30) + 1).padStart(2, "0")}T10:00:00Z`,
  megaLink: `https://mega.nz/file/dummy${i + 1}`,
}));

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [month, setMonth] = useState("");

  const filtered = dummyTextbooks.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? book.category === category : true;
    const matchesMonth = month ? book.date.startsWith(month) : true;
    return matchesSearch && matchesCategory && matchesMonth;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-4">
          <SearchBar value={search} onChange={setSearch} />
          <FilterBar
            category={category}
            month={month}
            onCategoryChange={setCategory}
            onMonthChange={setMonth}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
            {filtered.map((book) => (
              <Link
                to={book.link}
                key={book.id}
                state={{ fileName: book.title, megaLink: book.megaLink }}
                className="group relative block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="aspect-square w-full bg-white flex items-center justify-center">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {book.title}
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-gray-500 italic">No results found.</p>
          )}
        </div>
      </main>
    </div>
  );
} 