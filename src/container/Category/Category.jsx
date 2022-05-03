import React from 'react';
import './Category.css';
import { data } from '../../constants';

const CategoryItem = ({ category: { name, icon, text } }) => (
    <li className={`category-${name}`}>
        <div className='category-box'>
            <div className='category-icon'>{icon}</div>
            <p className='head3 category-name'>{name}</p>
            <p className='main__regular category-desc'>{text}</p>
        </div>
    </li>
);

const Category = () => (
    <div className='app__wrapper'>
        <div className='category'>
            <h2 className='head2 category__title'>
                <span>explore</span> by category
            </h2>

            <ul className='category-list'>
                {data.categories.map(category => (
                    <CategoryItem category={category} key={category.name} />
                ))}
            </ul>
        </div>
    </div>
);

export default Category;
