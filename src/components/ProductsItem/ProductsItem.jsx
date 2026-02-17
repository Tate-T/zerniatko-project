import React from "react";
import { Container } from "../Container/ContainerLayout.jsx";

export default function ProductsItem() {
  return (
    <li>
      <article>
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <span></span>

          <h3>Еспресо Класік</h3>

          <p>
            Суміш арабіки та робусти з насиченим смаком і нотами темного
            шоколаду.
          </p>

          <span>280грн</span>
        </div>

        <a href="#">Детальніше</a>
      </article>
    </li>
  );
}
