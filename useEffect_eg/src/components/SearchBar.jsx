function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search student by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "8px",
        width: "250px",
        marginRight: "10px"
      }}
    />
  );
}

export default SearchBar;
