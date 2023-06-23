interface ArrayItem {
  id: number;
  name: string;
  parentId: number;
}

interface TreeItem extends ArrayItem {
  children?: TreeItem[];
}

const list: ArrayItem[] = [
  { id: 3, name: '节点C', parentId: 1 },
  { id: 6, name: '节点F', parentId: 3 },
  { id: 0, name: 'root', parentId: null },
  { id: 1, name: '节点A', parentId: 0 },
  { id: 8, name: '节点H', parentId: 4 },
  { id: 4, name: '节点D', parentId: 1 },
  { id: 2, name: '节点B', parentId: 0 },
  { id: 5, name: '节点E', parentId: 2 },
  { id: 7, name: '节点G', parentId: 2 },
  { id: 9, name: '节点I', parentId: 5 },
];

const convert = (arr: ArrayItem[]): TreeItem[] => {
  const result: TreeItem[] = [];
  const map = new Map<number, TreeItem>();
  arr.forEach(item => {
    map.set(item.id, item);
  });
  arr.forEach(item => {
    const parent = map.get(item.parentId);
    if (parent) {
      if (parent.children) {
        parent.children.push(item);
      } else {
        parent.children = [item];
      }
    } else {
      result.push(item);
    }
  });
  return result;
};

console.log(convert(list));

export default convert;
