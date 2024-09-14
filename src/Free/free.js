import React from 'react';
import './Free.css'; // Import your CSS file

const products = [
  { id: 1, name: 'Mint', price: '$30.78', stock: 703, imgSrc: '/f1.webp' },
  { id: 2, name: 'Atlantic Salmon', price: '$10.36', stock: 718, imgSrc: '/f2.webp' },
  { id: 3, name: 'Calabaza Squash', price: '$98.03', stock: 569, imgSrc: '/f3.webp' },
  { id: 4, name: 'Dan Cake Lemon', price: '$74.93', stock: 777, imgSrc: '/f4.webp' },
  { id: 5, name: 'Clementine', price: '$48.12', stock: 447, imgSrc: '/f5.webp' },
  { id: 6, name: 'Organic Baby Carrot', price: '$150.00', stock: 255, imgSrc: '/f6.webp', discount: '10.84% Off' },
  { id: 7, name: 'Mint', price: '$30.78', stock: 703, imgSrc: '/f6.webp' },
  { id: 8, name: 'Atlantic Salmon', price: '$10.36', stock: 718, imgSrc: '/f7.webp' },
  { id: 9, name: 'Calabaza Squash', price: '$98.03', stock: 569, imgSrc: '/f8.webp' },
  { id: 10, name: 'Dan Cake Lemon', price: '$74.93', stock: 777, imgSrc: '/f9.webp' },
  { id: 11, name: 'Clementine', price: '$48.12', stock: 447, imgSrc: '/f10.webp' },
  { id: 12, name: 'Mint', price: '$30.78', stock: 703, imgSrc: '/f11.webp' },
  { id: 13, name: 'Atlantic Salmon', price: '$10.36', stock: 718, imgSrc: '/f12.webp' },
  { id: 14, name: 'Calabaza Squash', price: '$98.03', stock: 569, imgSrc: '/f13.webp' },
  { id: 15, name: 'Dan Cake Lemon', price: '$74.93', stock: 777, imgSrc: '/f14.webp' },
  { id: 16, name: 'Clementine', price: '$48.12', stock: 447, imgSrc: '/f15.webp' },
  { id: 17, name: 'Dan Cake Lemon', price: '$74.93', stock: 777, imgSrc: '/f14.webp' },
  { id: 18, name: 'Clementine', price: '$48.12', stock: 447, imgSrc: '/f15.webp' },
  // Add more products as needed
];

const Free = () => {
  return (
    <div>
      {/* Centered text section */}
      <div className="text-center">
        <h4>Popular Products for Daily Shopping</h4>
        <p>
          See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.
        </p>
      </div>

      {/* Product grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <div className="product-stock">
              Stock: <span className="stock-number">{product.stock}</span>
            </div>
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <div className="product-name">{product.name}</div>
            <div className="product-bottom">
              <div className="product-price">{product.price}</div>
              <div className="product-icon">🛒</div> {/* Replace with basket icon */}
            </div>
            {product.discount && <div className="product-discount">{product.discount}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Free;

