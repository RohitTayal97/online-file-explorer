import { useState } from "react";
import NavBar from "./components/NavBar";
import Explorer from "./components/Explorer";
import CreateNewModal from "./components/CreateNewModal";
import { clone } from "./utils/commonMethods";
import data from "./utils/data";
import "./App.css";

function App() {
  const [path, setPath] = useState([data[0].name]);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayRenameModal, setDisplayRenameModal] = useState(false);
  const [contents, setContents] = useState(data[0].contents);
  const [rightClickedFileIndex, setRightClickedFileIndex] = useState(-1);

  const navigateTo = (destinationIndex) => {
    const newPath = path.slice(0, destinationIndex + 1);
    setPath(newPath);
    const newContents = getContentsOnPath(newPath, data);
    setContents(newContents);
  };

  const getContentsOnPath = (path, contents, pathIndex = 0) => {
    if (pathIndex === path.length) {
      return contents;
    }
    let returnedValue;
    contents.forEach((FolderObj) => {
      if (FolderObj.name === path[pathIndex]) {
        returnedValue = getContentsOnPath(
          path,
          FolderObj.contents,
          pathIndex + 1
        );
      }
    });
    return returnedValue;
  };

  const updateData = (updatedContents) => {
    const contentsToUpdate = getContentsOnPath(path.slice(0, -1), data);
    const fileName = path[path.length - 1];
    contentsToUpdate.filter(
      (fileObj) => fileObj.name === fileName
    )[0].contents = updatedContents;
  };

  const openFolder = (folderIndex) => {
    if (contents[folderIndex].isFile) {
      return;
    }
    setPath([...path, contents[folderIndex].name]);
    setContents(contents[folderIndex].contents);
  };

  const updateContentsAndData = (newContents) => {
    setContents(newContents);
    updateData(newContents);
  };

  const createNew = (fileObj) => {
    const newContents = clone(contents);
    newContents.push(fileObj);
    updateContentsAndData(newContents);
    toggleDisplayModal();
  };

  const deleteFile = () => {
    const newContents = clone(contents);
    newContents.splice(rightClickedFileIndex, 1);
    updateContentsAndData(newContents);
  };

  const renameFile = (newName, extension) => {
    const newContents = clone(contents);
    if (!extension && newContents[rightClickedFileIndex].isFile) {
      extension = newContents[rightClickedFileIndex].name.includes(".")
        ? newContents[rightClickedFileIndex].name.split(".")[1]
        : "txt";
      newName += "." + extension;
    }
    newContents[rightClickedFileIndex].name = newName;
    updateContentsAndData(newContents);
    toggleDisplayRenameModal();
  };

  const toggleDisplayModal = () => {
    setDisplayModal((prevStatus) => !prevStatus);
  };

  const toggleDisplayRenameModal = () => {
    setDisplayRenameModal((prevStatus) => !prevStatus);
  };

  return (
    <div className="App" onContextMenu={(event) => event.preventDefault()}>
      <NavBar path={path} navigateTo={navigateTo} />
      <Explorer
        contents={contents}
        openFolder={openFolder}
        toggleDisplayCreateNewModal={toggleDisplayModal}
        toggleDisplayRenameModal={toggleDisplayRenameModal}
        deleteFile={deleteFile}
        setRightClickedFileIndex={setRightClickedFileIndex}
      />
      {displayModal && (
        <CreateNewModal
          contents={contents}
          createNew={createNew}
          toggleDisplayModal={toggleDisplayModal}
        />
      )}
      {displayRenameModal && (
        <CreateNewModal
          contents={contents}
          renameFile={renameFile}
          toggleDisplayModal={toggleDisplayRenameModal}
          isRenameModal={true}
        />
      )}
    </div>
  );
}

export default App;
