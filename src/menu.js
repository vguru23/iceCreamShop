function menu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const menuTitle = document.createElement("h1");
    menuTitle.innerHTML = "flavors"
    menuTitle.id = "menuTitle";
    content.appendChild(menuTitle);

    const flavorsContainer = document.createElement("div");
    flavorsContainer.id = "flavorsContainer";

    const choc = document.createElement("div");
    choc.className = "flavor";
    choc.innerHTML = "Choclate";
    flavorsContainer.appendChild(choc);

    const vanilla = document.createElement("div");
    vanilla.className = "flavor";
    vanilla.innerHTML = "Vanilla";
    flavorsContainer.appendChild(vanilla);

    const strawberry = document.createElement("div");
    strawberry.className = "flavor";
    strawberry.innerHTML = "Strawberry";
    flavorsContainer.appendChild(strawberry);

    const seaSalt = document.createElement("div");
    seaSalt.className = "flavor";
    seaSalt.innerHTML = "Sea Salt Caramel";
    flavorsContainer.appendChild(seaSalt);

    const mint = document.createElement("div");
    mint.className = "flavor";
    mint.innerHTML = "Mint";
    flavorsContainer.appendChild(mint);

    const coffee = document.createElement("div");
    coffee.className = "flavor";
    coffee.innerHTML = "Coffee";
    flavorsContainer.appendChild(coffee);

    content.appendChild(flavorsContainer);
    


}

export { menu }