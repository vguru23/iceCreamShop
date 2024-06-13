import ice from "./logo.png";

function Home() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const imageContainer = document.createElement("div");
    imageContainer.id = "imgContainer";

    const textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    const title = document.createElement("h1");
    title.innerHTML = "i scream 'ice cream"
    textContainer.appendChild(title);
    const caption = document.createElement("h3");
    caption.innerHTML = "you scream ice cream, we deliver! Welcome to the first vegan ice cream shop where you can indulge with no pains or need to use Lactaid later!"
    textContainer.appendChild(caption);

    imageContainer.appendChild(textContainer);

    const logo = new Image();
    logo.src = ice;
    imageContainer.appendChild(logo);

    content.appendChild(imageContainer);


}

export { Home };