export const pageLoad = () => {
  const body = document.querySelector("body");
  const createDiv = document.createElement("div");
  const contentWrapper = createDiv;
  contentWrapper.setAttribute("id", "content-wrapper");
  body.appendChild(contentWrapper);
  return contentWrapper;
};
