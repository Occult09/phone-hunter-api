const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json()
    const phones = data.data
    displayPhones(phones)
}

const displayPhones = phones => {

    const phoneContainer = document.getElementById
        ('phones-container')

    phones.forEach(phone => {
        console.log(phone)
        // 2. create a div
        const phoneCard = document.createElement('div')
        phoneCard.classList = "card bg-gray-100 w-96 shadow-sm"
        // 3. set innerHTML
        phoneCard.innerHTML = `
        <figure>
            <img src="${phone.image}"
                 />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts
            </p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        // 4. append child
        phoneContainer.appendChild(phoneCard)
    });
}

loadPhone()