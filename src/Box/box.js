import React from 'react';
import './Box.css';

const boxData = [
    { image: '/images.webp', title: 'Pizza', links: [] },
    { image: '/image.webp', title: 'www', links: [] },
    { image: '/im1.webp', title: 'Fish & Meat', links: ['Fish', 'Meat'] },
    { image: '/im2.webp', title: 'Fruits & Vegetable', links: ['Baby Food', 'Fresh Fruits', 'Dry Fruits'] },
    { image: '/im3.webp', title: 'Cooking Essentials', links: ['Flour', 'Oil'] },
    { image: '/im4.webp', title: 'Biscuits & Cakes', links: ['Biscuits', 'Cakes'] },
    { image: '/im5.webp', title: 'Household Tools', links: ['Water Filter', 'Cleaning Tools', 'Pest Control'] },
    { image: '/im6.webp', title: 'Pet Care', links: ['Dog Care', 'Cat Care'] },
    { image: '/im7.webp', title: 'Beauty & Healths', links: ['Women', 'Men'] },
    { image: '/im8.webp', title: 'Jam & Jelly', links: [] },
    { image: '/im9.webp', title: 'Milk & Dairy', links: ['Butter & Ghee', 'Ice Cream', 'Dairy'] },
    { image: '/im10.webp', title: 'Drinks', links: ['Tea', 'Water', 'Juice'] },
    { image: '/im11.webp', title: 'Breakfast', links: ['Bread', 'Cereal'] },
];

const Box = () => {
    return (
        <div className="box-section">
            <h2 className="box-title">Featured Categories</h2>
            <p className='para'>Choose your necessary products from these feature categories.</p>
            <hr className="box-line" />
            <div className="box-container">
                {boxData.map((box, index) => (
                    <div key={index} className="box-item">
                        <div className="box-header">
                            <img src={box.image} alt={box.title} />
                            <h3>{box.title}</h3>
                        </div>
                        <ul>
                            {box.links.map((link, i) => (
                                <li key={i}>
                                    <span className="arrow">&gt;</span> {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Box;
