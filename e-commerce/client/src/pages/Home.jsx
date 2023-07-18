import React, { useEffect, useRef } from 'react';

const Home = () => {
  const slideRef = useRef(null);
  const images = [
 
  ];
  let i = 0;
  const time = 3000;

  useEffect(() => {
    const changeIMG = () => {
      if (slideRef.current) {
        slideRef.current.src = images[i];
        i = (i + 1) % images.length;
      }
    };

    const interval = setInterval(changeIMG, time);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="div" >
      <body>
      <section class="bg1">
    
      </section>
        <section className="main">
          <p className="p">
            JDM, which stands for Japanese Domestic Market, refers to vehicles
            manufactured in Japan and intended for sale in the Japanese market. JDM
            car sales have become increasingly popular in recent years, with car
            enthusiasts around the world seeking out unique and high-performance
            Japanese cars that were never officially sold in their home
            countries.<br /><br />
            The JDM car market includes a wide range of vehicles, including sports
            cars, sedans, SUVs, and trucks, from popular brands such as Toyota,
            Honda, Nissan, Mazda, and Mitsubishi. Many of these vehicles are highly
            sought-after for their performance, reliability, and unique styling. JDM
            car sales can take various forms, including private sales between
            individuals, auctions, and imports through specialized dealerships.
            <br /><br />
            Importing JDM cars can be a complex process, as these vehicles often
            need to meet certain safety and emissions regulations before they can be
            legally driven on the roads. Despite the challenges of importing JDM
            cars, the popularity of these vehicles has continued to grow, with many
            enthusiasts willing to go through the process to get their hands on a
            rare and exciting piece of automotive history.
          </p>
          <img
            ref={slideRef}
            name="slide"
            className="productslide"
            alt="cars"
          />
          <div className="products"></div>
          <p className="p">
JDM cars are known for their exceptional reliability and durability. Japanese automakers prioritize quality and craftsmanship, resulting in vehicles that can withstand demanding driving conditions and offer long-term reliability.<br /><br />
 This reputation for reliability has contributed to the worldwide appeal of JDM cars, as owners appreciate the peace of mind and confidence that comes with owning a Japanese vehicle.
JDM cars are renowned for their unique styling, blending aggressive lines with sleek aesthetics. 
 Whether it's the iconic design of the Nissan Skyline GT-R, the sporty appeal of the Honda Civic Type R, or the timeless elegance of the Toyota Supra, JDM cars have left a lasting impression on automotive design.<br /><br />
  The culture encompasses not only the cars themselves but also the vibrant community of enthusiasts, events, and gatherings. Car meets, races, and shows dedicated to JDM cars provide opportunities for like-minded individuals to come together, share their passion, and celebrate the rich heritage of Japanese automotive engineering.
</p>
          <video autoPlay loop muted className="video">
          </video>
        </section>
      </body>
    </div>
  );
};

export default Home;



