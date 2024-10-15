import { createContext, useState } from "react";
import folderData from "../../data/folderData";
export const FileExplorerContext = createContext();

export default function FileExplorerContextWrappper({ children }) {
  const [nodes, setNodes] = useState(folderData);

  // const deleteNode = (id) => {
  //   const updatedNodes = { ...nodes };
  //   const parentID = updatedNodes[id].parentID;
  //   updatedNodes[parentID].children = updatedNodes[parentID].children.filter(
  //     (childId) => {
  //       return childId !== id;
  //     }
  //   );
  //   const queue = [id];
  //   while (queue.id > 0) {
  //     const currentId = queue.shift();
  //     queue.push(...nodes[currentId].children);
  //     delete updatedNodes[currentId];
  //   }
  //   setNodes(updatedNodes);
  // };
  const addNode = (parentId, value) => {
    const newId = Date.now();
    const newData = { id: newId, name: value, parentId: parentId };
    const isFolder = value.split(".");
    if (isFolder.length > 1) {
      newData.type = "file";
    } else {
      newData.type = "folder";
      newData.children = [];
    }
    const updatedNodes = { ...nodes, [newId]: newData };
    updatedNodes[parentId].children.push(newId);
    setNodes(updatedNodes);
  };

  const editNode = (id, value) => {
    const updatedNodes = { ...nodes };
    updatedNodes[id].name = value;
    setNodes(updatedNodes);
  };
  const deleteNode = (id) => {
    const updatedNodes = { ...nodes };
    const parentId = updatedNodes[id].parentId;
    if (parentId) {
      updatedNodes[parentId].children = updatedNodes[parentId].children.filter(
        (childId) => {
          return childId !== id;
        }
      );
    }
    const queue = [id];
    while (queue.length > 0) {
      const currentId = queue.shift();
      if (nodes[currentId].children) queue.push(...nodes[currentId].children);
      delete updatedNodes[currentId];
    }
    setNodes(updatedNodes);
  };

  return (
    <FileExplorerContext.Provider
      value={{ nodes, deleteNode, addNode, editNode }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
}
