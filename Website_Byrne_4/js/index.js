paper.install(window);
window.onload = () => {
  const themes = ["Flower", "Fruit", "Animal", "Fictional Character"];
  const themeClasses = ["flower", "fruit", "animal", "fictional-character"];
  const themeNumber = Math.round(Math.random() * 10) % themes.length;

  document.getElementById("theme-text").textContent = themes[themeNumber];

  const elements = document.getElementsByClassName(
    `${themeClasses[themeNumber]}`
  );

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }

  // Code below based on code found on paper documentation
  paper.setup("canvas");

  const tool = new Tool();
  let path;

  tool.onMouseDown = (event) => {
    path = new Path();
    path.strokeColor = "black";
    path.strokeWidth = 7;
    path.add(event.point);
  };

  const onResize = (event) => {
    path.position = view.center;
  };
  tool.onMouseDrag = (event) => {
    path.add(event.point);
  };

};
