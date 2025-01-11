function component() {
  const element = document.createElement("div");

  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  element.innerHTML = "webpack1234";

  return element;
}

document.body.appendChild(component());
