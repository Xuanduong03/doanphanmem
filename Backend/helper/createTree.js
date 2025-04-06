const createTree = (arr, parent_id = "") => {
  const trees = [];
  arr.forEach((item) => {
    if (item.parent_id === parent_id) {
      const newItem = item.toObject ? item.toObject() : { ...item }; // clone an toàn
      const children = createTree(arr, item.id);
      if (children.length > 0) {
        newItem.children = children;
      }
      trees.push(newItem);
    }
  });
  return trees;
};

module.exports = (arr, parent_id = "") => {
  return createTree(arr, parent_id); // remove gán sai
};
