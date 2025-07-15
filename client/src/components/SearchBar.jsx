export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by title..."
      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    />
  );
} 