function SortBar({ setSortOrder }) {
  return (
    <select
      onChange={(e) => setSortOrder(e.target.value)}
      style={{ padding: "8px" }}
    >
      <option value="">Sort By Name</option>
      <option value="asc">A → Z</option>
      <option value="desc">Z → A</option>
    </select>
  );
}

export default SortBar;
