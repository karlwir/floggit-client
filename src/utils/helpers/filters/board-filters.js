const searchFilter = (boards, searchQuery) =>
  boards.filter((board) => {
    if (board.title.toUpperCase().includes(searchQuery.toUpperCase())) {
      return true;
    }
    return false;
  });

export { searchFilter };
export default searchFilter;
