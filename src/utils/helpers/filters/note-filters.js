const searchFilter = (notes, searchQuery) =>
  notes.filter((note) => {
    if (note.title.toUpperCase().includes(searchQuery.toUpperCase())) {
      return true;
    }
    let infoHit = false;
    note.information.forEach((subItem) => {
      if (subItem.text.toUpperCase().includes(searchQuery.toUpperCase())) {
        infoHit = true;
      }
    });
    return infoHit;
  });

const boardFilter = (notes, boardId) =>
  notes.filter((note) => {
    if (note.boardId === boardId) {
      return true;
    }
    return false;
  });

export { searchFilter, boardFilter };
