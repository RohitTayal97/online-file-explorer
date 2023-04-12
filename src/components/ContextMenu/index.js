import Menu from "../Common Components/Menu";
import "./contextMenu.css";

const ContextMenu = ({
  toggleDisplayMenu,
  onClickingRename,
  onClickingDelete,
  clickCoordinates,
}) => {
  return (
    <Menu
      toggleDisplayMenu={toggleDisplayMenu}
      menuCoodinates={clickCoordinates}
    >
      <div className="contextmenu-rename" onClick={onClickingRename}>
        Rename
      </div>
      <div className="contextmenu-delete" onClick={onClickingDelete}>
        Delete
      </div>
    </Menu>
  );
};

export default ContextMenu;
