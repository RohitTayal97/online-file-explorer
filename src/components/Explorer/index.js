import { useState } from "react";
import File from "../File";
import ContextMenu from "../ContextMenu";
import createNewLogo from "../../assets/add_new_button.png";
import "./explorer.css";

const Explorer = ({
  contents,
  openFolder,
  toggleDisplayCreateNewModal,
  toggleDisplayRenameModal,
  deleteFile,
  setRightClickedFileIndex,
}) => {
  const [displayContextMenu, setDisplayContextMenu] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState(["0px", "0px"]);

  const onFileRightClick = (event, fileIndex) => {
    setClickCoordinates([`${event.pageX}px`, `${event.pageY}px`]);
    setRightClickedFileIndex(fileIndex);
    toggleDisplayMenu();
  };

  const toggleDisplayMenu = () => {
    setDisplayContextMenu((prevStatus) => !prevStatus);
  };

  const onClickingRename = () => {
    toggleDisplayRenameModal();
    toggleDisplayMenu();
  };

  const onClickingDelete = () => {
    deleteFile();
    toggleDisplayMenu();
  };

  return (
    <div className="explorer">
      {contents.map((fileData, index) => (
        <File
          fileData={fileData}
          key={fileData.name}
          fileIndex={index}
          openFolder={openFolder}
          onFileRightClick={onFileRightClick}
        />
      ))}
      <img
        className="createnew"
        src={createNewLogo}
        alt="createNewLogo"
        onClick={toggleDisplayCreateNewModal}
      />
      {displayContextMenu && (
        <ContextMenu
          toggleDisplayMenu={toggleDisplayMenu}
          onClickingRename={onClickingRename}
          onClickingDelete={onClickingDelete}
          clickCoordinates={clickCoordinates}
        />
      )}
    </div>
  );
};

export default Explorer;
