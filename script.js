/////////// USED TRY AND CATCH FOR ERRORS //////////////

document.body.innerHTML += `<section class="cat-list"></section>`;

///// ASYNC FUNCTION FOR GETTING DATA OF CAT BREEDS //////
async function getbreed() {
    const data = await fetch("https://api.thecatapi.com/v1/breeds");
    const cats = await data.json();
    console.log(cats);

    const catcontainer = document.querySelector(".cat-list");

    cats.forEach((cat)=>{
        console.log(cat);
        catcontainer.innerHTML += `
        <div class="cat-container">
            <h1 class="cat-name">${cat.name}</h1>
            <img class="cat-img" src="${cat.image.url}">
        </div>
            `;
    });

}


getbreed();












