import "./file.css";
import { shortenString } from "../../utils/commonMethods";
import fileLogo from "../../assets/file.png";
import folderLogo from "../../assets/folder.png";

const File = ({ fileIndex, fileData, openFolder, onFileRightClick }) => {
  return (
    <div
      className="file"
      onDoubleClick={() => openFolder(fileIndex)}
      onContextMenu={(event) => onFileRightClick(event, fileIndex)}
    >
      {fileData.isFile ? (
        <>
          <img className="logo" src={fileLogo} alt="fileLogo"></img>
          <div className="extension">{"." + fileData.name.split(".")[1]}</div>
        </>
      ) : (
        <img className="logo" src={folderLogo} alt="folderLogo"></img>
      )}
      <div className="fileName">{shortenString(fileData.name)}</div>
    </div>
  );
};

export default File;
