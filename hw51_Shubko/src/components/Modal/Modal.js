import "./Modal.css";
const Modal = ({ isShown, children }) => {
  if (isShown) {
    return <div className="modal-holder">{children}</div>;
  }
  return;
};
export default Modal;
