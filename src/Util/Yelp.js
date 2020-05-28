const apiKey = 'kALJZhAbFP-KZuyvILCvxqOaPuS9_YxmZGzp4toE2TCWomh-DQ6aCi3K7Pxrtrm5QCEYbFmPgTmJKkV9xG3qB8blEykZ3rRcAvkdzDx7Huk7nu_aMLM_s1a3_ibOXnYx';

const Yelp = {

    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
            headers: {
                Authorization : `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json()

        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        adress: business.adress1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                });
            }
        });
    }
};

export default Yelp;