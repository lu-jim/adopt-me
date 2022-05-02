import React from 'react';
import { render } from 'react-dom';

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me pls"),
    React.createElement(Pet, {
      name: "Calci",
      animal: "Cat",
      breed: "Surprise",
    }),
    React.createElement(Pet, {
      name: "Ceniza",
      animal: "Cat",
      breed: "Surprise JR.",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
