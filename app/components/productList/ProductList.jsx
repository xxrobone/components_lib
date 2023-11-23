import { useState, useEffect } from 'react';
import './ProductList.scss';
import Link from 'next/link';
import { restaurants } from '@/data/data';

const ProductList = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(restaurants);


    useEffect(() => {
        if (data) {
            setLoading(false)
        }

    }, [])
   


  return (
    <div className='App'>
      <h1 className='header'>Popular Restaurants</h1>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='restaurant-container'>
          {data ? (
            <div className='restaurant-row'>
              {data.slice(0, 4).map((restaurant) => (
                <div key={restaurant.location_id} className='restaurant-item'>
                  {restaurant.photo && restaurant.photo.images.large.url && (
                    <div className='overlay-effect'>
                      <img
                        src={restaurant.photo.images.large.url}
                        alt={`Image for ${restaurant.name}`}
                        className='restaurant-item-img'
                      />
                    </div>
                  )}
                  <p className='name'>{restaurant.name}</p>
                  <p>Rating: {restaurant.rating}</p>
                  <p>{restaurant.address_obj.street1}</p>
                  <p>Phone: {restaurant.phone}</p>
                  {/* Displaying cuisine names */}
                  {restaurant.cuisine && (
                    <p className='cuisine'>
                      {restaurant.cuisine &&
                        restaurant.cuisine.slice(0, 2).map((cuisine, index) => (
                          <span
                            key={cuisine.key}
                            className={`cuisine-item-${index}`}
                          >
                            {cuisine.name}
                          </span>
                        ))}
                    </p>
                  )}
                  <p className='link'>
                    <a
                      href={`${restaurant.website}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='link'
                    >
                      More info
                    </a>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>Error loading data.</div>
          )}
          <div className='button-container'>
            <Link href='/restaurants'>
              <button className='link-button'>More +</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
