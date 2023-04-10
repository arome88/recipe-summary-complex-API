function getInfo() {

    const protien = document.getElementById('thing').value;
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=85ae9e8fcf0040fd9fd459784e776f77&query=${protien}&addRecipeInformation=true&number=1`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            document.getElementById('info').innerText = data.results[0].summary;

            const picofRecipe = `https://api.unsplash.com/search/photos?client_id=pwGnh8_ylwrNwdbBl0pTpzghSc2zVksDutcNMKmt9vs&page=1&query=${data.results[0].title}&per_page=1&order_by=relevant`;

            fetch(picofRecipe)
                .then(res => res.json())
                .then(data2 => {
                    console.log(data2);
                    document.querySelector("img").src = data2.results[0].urls.regular;
                });
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}

document.querySelector('button').addEventListener('click' , getInfo);
