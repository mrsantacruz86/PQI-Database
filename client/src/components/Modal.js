import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="modal" tabindex="-1" role="dialog" onClick={props.onDismiss}>
      <div onClick={e => e.stopPropagation()} className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">{props.title}</div>
            <button type="button" className="close" onClick={props.onDismiss} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">{props.actions}</div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  actions: PropTypes.element.isRequired
};

export default Modal;
