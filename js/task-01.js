console.log(
  `Number of categories: ${
    document.querySelectorAll("#categories .item").length
  }`
);

const titleCategory = document
  .querySelectorAll("#categories .item")
  .forEach((item) =>
    console.log(
      `
Category: ${item.children[0].textContent}
Elements: ${item.children[1].childElementCount}`
    )
  );
