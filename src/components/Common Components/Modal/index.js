import closeLogo from "../../../assets/close.png";
import "./modal.css";

const Modal = ({ children, toggleDisplayModal }) => {
  return (
    <div className="modal-overlay" onClick={toggleDisplayModal}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <img
          className="modal-closeLogo"
          src={closeLogo}
          alt="closeLogo"
          onClick={toggleDisplayModal}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
