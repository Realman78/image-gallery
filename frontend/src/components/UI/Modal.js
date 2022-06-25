import './modal.css';
import { useMediaQuery } from 'react-responsive'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  return (
    <div className={showHideClassName}>
      <section className="modal-main" style={{width: isMobile ? '80%' : '40%'}}>
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal