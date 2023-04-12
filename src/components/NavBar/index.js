import goBackLogo from "../../assets/arrow_up.png";
import "./navbar.css";

const NavBar = ({ path, navigateTo }) => {
  const currentPathIndex = path.length - 1;
  return (
    <div className="navbar">
      <button
        disabled={currentPathIndex === 0}
        onClick={() => navigateTo(currentPathIndex - 1)}
        className="navbar-button"
      >
        <img src={goBackLogo} className="navbar-button-logo" alt="goBackLogo" />
      </button>
      <div className="path">
        {path.map((folderName, index) => (
          <span key={folderName}>
            <span onClick={() => navigateTo(index)} className="breadcrumb">
              {folderName}
            </span>
            <span>{index < currentPathIndex ? " / " : ""}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
