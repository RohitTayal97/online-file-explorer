import "./menu.css";

const Menu = ({ children, toggleDisplayMenu, menuCoodinates }) => {
  const [left, top] = menuCoodinates;
  return (
    <div
      className="menu-overlay"
      onClick={toggleDisplayMenu}
      onContextMenu={toggleDisplayMenu}
    >
      <div
        className="menu-body"
        style={{ left, top }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Menu;
