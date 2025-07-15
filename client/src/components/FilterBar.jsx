export default function FilterBar({ category, month, onCategoryChange, onMonthChange }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between my-4">
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="p-2 pr-8 border rounded-md"
      >
        <option value="">All Categories</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="Literature">Literature</option>
      </select>

      <select
        value={month}
        onChange={(e) => onMonthChange(e.target.value)}
        className="p-2 pr-8 border rounded-md"
      >
        <option value="">All Months</option>
        <option value="2025-05">May 2025</option>
        <option value="2025-04">April 2025</option>
        <option value="2025-03">March 2025</option>
      </select>
    </div>
  );
} 