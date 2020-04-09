exports.config = {
  projectRoot: "./src",
  projectName: "workfromhome-store",
  outDir: './dist/static',
  routes: {
    '/products/:productId': {
        type: 'json',
        productId: {
            url: 'https://scully-snipcart-api.netlify.com/products.json',
            property: 'id'
        }
    }
  }
};