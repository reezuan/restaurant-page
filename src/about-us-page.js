import RowImage1 from "./about-us-row-image-1.jpeg";
import RowImage2 from "./about-us-row-image-2.jpeg";
import RowImage3 from "./about-us-row-image-3.jpeg";

export default function aboutUsPage() {
    const content = document.querySelector("#content");
    content.setAttribute("class", "");
    content.classList.add("about-us");
    
    const pageTitleContainer = document.createElement("section");
    pageTitleContainer.classList.add("about-us");
    pageTitleContainer.classList.add("page-title-container");

    const contentContainer = document.createElement("section");
    contentContainer.classList.add("about-us");
    contentContainer.classList.add("page-content-container");

    // Create & append page title.
    const pageTitle = document.createElement("h2");
    pageTitle.textContent = "About us";
    pageTitle.classList.add("about-us");
    pageTitleContainer.appendChild(pageTitle);

    let aboutUsDescriptions = [
        `It was said that long ago, when cats ruled over people (they
         still do) and ran the world, there was a noble by the name of
         Cat Johnson VII. He loved seafood so much, he wanted every
         single member of the feline race to taste it and be mesmerized
         by it.`,
         `But everything changed when the dog nation attacked. With the
         United Catdom's army being outnumbered 10 to 1 by the invading
         forces, every fit & capable man and woman had to serve in Her
         Meowjesty's Royal Army.`,
         `Now, with the memories of the war long gone, Cat Johnson XXII
         wants to rebuild everything his family had lost all those
         years ago.`
    ]

    let rowImages = [RowImage1, RowImage2, RowImage3];

    for (let i = 0; i < rowImages.length; i++) {
        const aboutUsRow = document.createElement("div");
        aboutUsRow.classList.add("about-us-row");
        aboutUsRow.setAttribute("id", `row-${i + 1}`);
        contentContainer.appendChild(aboutUsRow);

        const rowImageContainer = document.createElement("div");
        rowImageContainer.classList.add("image-container");
        const rowImage = new Image();
        rowImage.src = rowImages[i];
        rowImageContainer.appendChild(rowImage);
        aboutUsRow.appendChild(rowImageContainer);
        
        const rowTextContainer = document.createElement("div");
        rowTextContainer.classList.add("text-container");
        aboutUsRow.appendChild(rowTextContainer);
        
        const rowText = document.createElement("p");
        rowText.textContent = aboutUsDescriptions[i];
        rowTextContainer.appendChild(rowText);
    };

    content.appendChild(pageTitleContainer);
    content.appendChild(contentContainer);
};