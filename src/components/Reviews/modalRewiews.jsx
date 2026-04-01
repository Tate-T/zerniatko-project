import { Component } from "react";
import styled from "./modalRewiews.module.css";

export class RewiewsModal extends Component {
  state = {
    name: "",
    text: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.text) return;

    const newReview = {
      name: this.state.name,
      text: this.state.text,
      product: "Товар Зернятко",
    };

    this.props.onAddReview(newReview);

    this.setState({
      name: "",
      text: "",
    });

    this.props.onClose();
  };

  render() {
    return (
      <div className={styled.backdrop} onClick={this.props.onClose}>
        <div className={styled.modal} onClick={(e) => e.stopPropagation()}>
          <button onClick={this.props.onClose}>X</button>

          <h1 className={styled.title}>Залишити відгук</h1>

          <form className={styled.form} onSubmit={this.handleSubmit}>
            <h3>Ваше ім'я</h3>
            <input
              type="text"
              placeholder="Ваше ім'я"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <h3>Ваш відгук</h3>
            <textarea
              placeholder="Ваш відгук"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            ></textarea>

            <button type="submit" className={styled.button__submit}>
              Надіслати
            </button>
          </form>
        </div>
      </div>
    );
  }
}
