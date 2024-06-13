function contact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const contactTitle = document.createElement("h1");
    contactTitle.id = "contactTitle";
    contactTitle.innerHTML = "contact us!";

    content.appendChild(contactTitle);

    const contactBox = document.createElement("div");
    contactBox.id = "contactBox";
    
    const addy = document.createElement("p");
    addy.innerHTML = "Address: Out of this world";
    addy.className = "info";

    const number = document.createElement("p");
    number.innerHTML = "Phone Number: 123-456-7890";
    number.className = "info";

    contactBox.appendChild(addy);
    contactBox.appendChild(number);

    content.appendChild(contactBox);
}

export { contact }


