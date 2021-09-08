import React from "react";

const TouristInfoCards = () => {
  const cities = [
    {
      city: "Glasgow",
      image:
        "https://www.hisour.com/wp-content/uploads/2018/05/Architecture-in-Glasgow.jpg",
      description: "Glasgow City",
      url: "https://peoplemakeglasgow.com/"
    },
    {
      city: "Manchester",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1",
      description: "Manchester City",
      url: "https://www.visitmanchester.com/"
    },
    {
      city: "London",
      image:
        "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A",
      description: "London City",
      url: "https://visitlondon.com/"
    }
  ];

  return (
    <div className="d-flex m-3 justify-content-center">
      {cities.map(({ city, image, description, url }, index) => {
        return (
          <div key={index} className="card m-3">
            <img src={image} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{city}</h5>
              <p className="card-text">{description}</p>
              <a href={url} className="btn btn-primary">
                Go {city}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
