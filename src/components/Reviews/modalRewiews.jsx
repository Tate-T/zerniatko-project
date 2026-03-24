import { Component } from "react";
import styled from "./modalRewiews.module.css";

export class RewiewsModal extends Component {
  render() {
    return (
      <div className={styled.backdrop} onClick={this.openModal}>
        <div className={styled.modal}>
          <h1 className={styled.title}>Залишити відгук</h1>
          <form>
            <h3>Ваше ім'я</h3>
            <input type="text" placeholder="Ваше ім'я" />
            <h3>Ваш відгук</h3>
            <textarea placeholder="Ваш відгук"></textarea>
            <button className={styled.button__submit}></button>
          </form>
        </div>
      </div>
    );
  }
}
