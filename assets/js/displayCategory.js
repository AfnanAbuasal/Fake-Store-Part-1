const getProductsByCategory = async () => {
    const category = new URLSearchParams(window.location.search).get('category');
    document.querySelector('title').innerHTML = category;
    document.querySelector('.products-by-category h2').innerHTML = `${category} products`;
    const { data } = await axios.get(`https://dummyjson.com/products/category/${category}`);
    return data;
}
const displayProductsByCategory = async () => {
    const data = await getProductsByCategory();
    const products = data.products;
    const result = products.map(product => `
        <div class="product">
                        <img src=${product.thumbnail} alt=${product.title}/>
                        <h3>${product.title}</h3>
                        <span>$${product.price}</span>
                        <button>Add to Cart</button>
                    </div>
        `).join('');
    document.querySelector('.products-by-category .row').innerHTML = result;
}
displayProductsByCategory();