const folderData = {
  1: {
    id: 1,
    name: "File Explorer",
    type: "folder",
    parentId: null,
    children: [2, 3, 4, 15, 16, 17, 18]
  },
  2: {
    id: 2,
    name: "node_modules",
    type: "folder",
    parentId: 1,
    children: []
  },
  3: {
    id: 3,
    name: "public",
    type: "folder",
    parentId: 1,
    children: [5, 6, 7, 8]
  },
  4: {
    id: 4,
    name: "src",
    type: "folder",
    parentId: 1,
    children: [9, 13, 14]
  },
  5: {
    id: 5,
    name: "index.html",
    type: "file",
    parentId: 3,
    children: []
  },
  6: {
    id: 6,
    name: "favicon.ico",
    type: "file",
    parentId: 3,
    children: []
  },
  7: {
    id: 7,
    name: "manifest.json",
    type: "file",
    parentId: 3,
    children: []
  },
  8: {
    id: 8,
    name: "robots.txt",
    type: "file",
    parentId: 3,
    children: []
  },
  9: {
    id: 9,
    name: "Components",
    type: "folder",
    parentId: 4,
    children: [10, 11, 12]
  },
  10: {
    id: 10,
    name: "Header.js",
    type: "file",
    parentId: 9,
    children: []
  },
  11: {
    id: 11,
    name: "Footer.js",
    type: "file",
    parentId: 9,
    children: []
  },
  12: {
    id: 12,
    name: "App.js",
    type: "file",
    parentId: 9,
    children: []
  },
  13: {
    id: 13,
    name: "App.css",
    type: "file",
    parentId: 4,
    children: []
  },
  14: {
    id: 14,
    name: "App.test.js",
    type: "file",
    parentId: 4,
    children: []
  },
  15: {
    id: 15,
    name: ".gitignore",
    type: "file",
    parentId: 1,
    children: []
  },
  16: {
    id: 16,
    name: "package.json",
    type: "file",
    parentId: 1,
    children: []
  },
  17: {
    id: 17,
    name: "package-lock.json",
    type: "file",
    parentId: 1,
    children: []
  },
  18: {
    id: 18,
    name: "README.md",
    type: "file",
    parentId: 1,
    children: []
  }
};

export default folderData;
