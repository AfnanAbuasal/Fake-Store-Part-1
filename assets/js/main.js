const getCategories = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/category-list`);
    return data;
};
const displayCategories = async () => {
    const categories = await getCategories();
    const result = categories.map(category => `
        <div class="category">
            <a href='displayCategory.html?category=${category}'>${category}</a>
            <a href='displayCategory.html?category=${category}'><i class="fa-solid fa-chevron-right"></i></a>
        </div>
    `).join('');
    document.querySelector('.categories-section .row').innerHTML = result;
};
displayCategories();

const getProducts = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products`);
    return data;
}
const displayProducts = async () => {
    const data = await getProducts();
    const products = data.products;
    const result = products.map(product => `
        <div class="product">
                        <img src=${product.thumbnail} alt=${product.title}/>
                        <h3>${product.title}</h3>
                        <span>$${product.price}</span>
                        <button>Add to Cart</button>
                    </div>
        `).join('');
    document.querySelector('.products-section .row').innerHTML = result;
}
displayProducts();