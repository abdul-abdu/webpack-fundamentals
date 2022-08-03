const makeButton = (name) => {
  const button = document.createElement("button");
  button.innerText = name;
  return button;
};

module.exports = makeButton;
