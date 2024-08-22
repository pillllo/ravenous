const apiKey = "";
const yelpBaseUrl = "https://api.yelp.com/v3/";

export const getBusinesses = async (search, location, sorting) => {
  const searchEndpoint = "businesses/search";
  const searchParams = `?term=${search}&location=${location}&sort_by=${sorting}`;
  const urlToFetch = yelpBaseUrl + searchEndpoint + searchParams;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const businesses = jsonResponse.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipcode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
      }));
      return businesses;
    }
  } catch (error) {
    console.log(error);
  }
};
