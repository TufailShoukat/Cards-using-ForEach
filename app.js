const cardData = Array.from({ length: 10 }, (_, i) => ({
    heading: `Card title ${i + 1}`,
    body: `Some quick example text to build on the card title and make up the bulk of the card's content.${i + 1}`
}));

const postContainer = document.querySelector(".card-container");

const postMethods = () => {

    postContainer.innerHTML = '';

    cardData.forEach((postData, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add('card');
        postElement.innerHTML = `
            <h3 class="card-heading">${postData.heading}</h3>
            <p class="card-body">${postData.body}</p>
            <button class="btn edit-btn">Edit</button>
            <button class="btn delete-btn">Delete</button>
        `;


        const editBtn = postElement.querySelector('.edit-btn');
        editBtn.addEventListener('click', () => {
            const newHeading = prompt('Enter new title:', postData.heading);
            const newBody = prompt('Enter new body:', postData.body);
            if (newHeading !== null && newBody !== null) {
                postData.heading = newHeading;
                postData.body = newBody;
                postElement.querySelector('.card-heading').textContent = newHeading;
                postElement.querySelector('.card-body').textContent = newBody;
            }
        });


        const deleteBtn = postElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            cardData.splice(index, 1);
            postMethods();
        });

        postContainer.appendChild(postElement);
    });
};

postMethods();

