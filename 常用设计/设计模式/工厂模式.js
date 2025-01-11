class Product {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class ProductFactory {
  static createProduct(name) {
    return new Product(name);
  }
}

// 使用示例
const product = ProductFactory.createProduct('Example Product');
console.log(product.getName()); // "Example Product"
