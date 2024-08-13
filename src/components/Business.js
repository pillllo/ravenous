import React from 'react';

const business = {
    image: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/271726852_949492359329744_4075964811737373797_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hmOZFVDggFsQ7kNvgG1uAqr&_nc_ht=scontent-waw2-1.xx&oh=00_AYB7U5aIhZnSdHlUml5qj2A5vKUVafMuccOLN_g08bDseg&oe=66C17AE3',
    name: 'The Farm',
    address: 'ulica Chmielna 20',
    city: 'Warsaw',
    state: 'Mazowieckie',
    zipcode: '00-020',
    category: 'Steak',
    rating: 4.9,
    reviewCount: 354
};

function Business() {
    return (
        <div>
            <img src={business.image}/>
            <p>{business.name}</p>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state}</p>
            <p>{business.zipcode}</p>
            <p>{business.category}</p>
            <p>{business.rating}</p>
            <p>{business.reviewCount}</p>
        </div>
    )
};


/* function Business({image, name, address, city, state, zipcode, category, rating, reviewCount}) {
    return (
        <div>
            <img src={image}/>
            <p>{name}</p>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zipcode}</p>
            <p>{category}</p>
            <p>{rating}</p>
            <p>{reviewCount}</p>
        </div>
    )
}; */

export default Business;