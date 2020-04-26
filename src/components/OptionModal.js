import React from "react";
import Modal from "react-modal";

const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">You Should</h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button className="button" onClick={handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
