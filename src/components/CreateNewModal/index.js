import { useState, useRef } from "react";
import constants from "../../utils/constants";
import Modal from "../Common Components/Modal";
import "./createNewModal.css";

const CreateNewModal = ({
  contents,
  createNew,
  renameFile,
  toggleDisplayModal,
  isRenameModal = false,
}) => {
  const [isFile, setIsFile] = useState(true);
  const [error, setError] = useState("");
  const inputRef = useRef();

  const runUniqueNameValidation = (fileName) => {
    const isFileNameDuplicate = contents
      .filter((fileObj) => fileObj.isFile === isFile)
      .map((fileObj) => {
        return fileObj.name.split(".")[0];
      })
      .includes(fileName);

    if (isFileNameDuplicate) {
      setError(constants.DUPLICATE_NAME_ERROR);
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (inputRef.current.value.length === 0) {
      return;
    }

    const fullFileName = inputRef.current.value;
    const [fileName, extension] = fullFileName.split(".");
    if (fileName.length === 0 || !runUniqueNameValidation(fileName)) {
      return;
    }

    if (isRenameModal) {
      renameFile(fullFileName, extension);
    } else {
      const fileObj = {
        name: fullFileName + (!extension && isFile ? ".txt" : ""),
        isFile: isFile,
        contents: [],
      };
      createNew(fileObj);
    }
  };

  return (
    <Modal toggleDisplayModal={toggleDisplayModal}>
      <div className="row">{isRenameModal ? "Rename" : "Create New"}</div>
      {!isRenameModal && (
        <div className="row modal-menu">
          <div
            className={"cell" + (isFile ? " active" : "")}
            onClick={() => setIsFile(true)}
          >
            File
          </div>
          <div
            className={"cell" + (isFile ? "" : " active")}
            onClick={() => setIsFile(false)}
          >
            Folder
          </div>
        </div>
      )}
      <div className="row">
        <input
          className={"modal-input" + (error.length > 0 ? " error-outline" : "")}
          type="text"
          ref={inputRef}
        />
        {error.length > 0 && <span className="modal-input-error">{error}</span>}
      </div>
      <button className="row active modal-button" onClick={handleSubmit}>
        {isRenameModal ? "Rename" : "Create"}
      </button>
    </Modal>
  );
};

export default CreateNewModal;
