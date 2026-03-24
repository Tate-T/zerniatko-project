import { Component } from "react";
import styled from "./modalRewiews.module.css";

export class RewiewsModal extends Component {
  render() {
    return (
      <div className={styled.backdrop} onClick={this.modModal}>
        <div className={styled.modal}>
          <button onClick={this.props.onClose}>X</button>
          <h1 className={styled.title}>Залишити відгук</h1>
          <form className={styled.form}>
            <h3>Ваше ім'я</h3>
            <input type="text" placeholder="Ваше ім'я" />
            <h3>Ваш відгук</h3>
            <textarea placeholder="Ваш відгук"></textarea>
            <button className={styled.button__submit}>Надіслати</button>
          </form>
        </div>
      </div>
    );
  }
}
