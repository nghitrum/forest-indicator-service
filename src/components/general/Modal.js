import React, { Component } from "react";
import ReactModal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div>
        <a onClick={this.openModal}>
          <h4>{this.props.guidanceLabel}</h4>
        </a>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={this.props.guidanceLabel}
          style={customStyles}
        >
          <h1 ref={subtitle => (this.subtitle = subtitle)}>Welcome to the Forest Indicator Service</h1>
          <h2>This guidance will show you how to use our application</h2>
          <h3>Step 1: Choose the regional level, region and scenario collection by clicking the option in the dropdown menu.</h3>
          <h3>Step 2: Choose the scenario and time periods as you wish to use in the graph.</h3>
          <h3>step 3: Choose the indicators from the indicator categories.</h3>
          <h3>Step 4: Choose the type of chart that you want to use.</h3>
          <h4>Additionally, if you discover any error on our application please giving us feedback. By clicking “Give us a feedback” button, you’ll be lead to Mail app of Microsoft where you can sign in and type the feedback. The e-mail address of feedback receiver is automatically being filled so that after typing the feedback, you just need to click sent.
</h4>
          <button onClick={this.closeModal}>close</button>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
