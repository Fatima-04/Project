import React from 'react';

export default function Body() {
  return (
    <body>
      <div className="container-fluid">
        <div className="container-text-center">
          <div className="container">
            <h2>
              Welcome to Code Confectioners <br/> Where Every Cake Tells a Delicious
              Story!
            </h2>
            <div className="row">
              <div className="col">
                <div className="col d-flex align-items-center justify-content-center">
                  <img
                    className="rounded mx-auto d-block"
                    src="./images/cakes.jpg"
                    alt="Load of Cakes"
                  />
                </div>
              </div>

              <div className="col">
                <p>
                  Dear Valued Guests and Cake Enthusiasts,
                  <br></br>
                  At Code Confectioners, we&apos;re not just bakers; we&apos;re
                  creators of edible masterpieces that celebrate the joy of
                  life. Step into our world where the aroma of freshly baked
                  cakes mingles with the excitement of endless possibilities.
                  Whether you have a sweet tooth craving our signature creations
                  or a vision for a custom cake that&apos;s uniquely yours, we
                  are here to make your cake dreams come true!
                </p>
              </div>
            </div>
            <h2>Our Mission Statement</h2>

            <blockquote className="blockquote">
              <p className="blockquote">
                &quot;Crafting Sweet Moments, <br/> Empowering Celebrations&quot;
              </p>
            </blockquote>
            <div className="row">
              <div className="col">
                <p>
                  At Code Confectioners, our mission is to redefine the art of
                  baking by infusing creativity, passion, and a dash of
                  innovation into every cake we craft. We believe that cakes are
                  not just desserts; they are an expression of love, happiness,
                  and memorable moments. Our team of skilled bakers, inspired by
                  the world of coding and technology, brings a fresh perspective
                  to the traditional art of baking. We take pride in offering a
                  diverse range of delectable cakes, each with its own story to
                  tell.
                </p>
              </div>
              <div className="col">
                <div className="col d-flex align-items-center justify-content-center">
                  <img
                    className="rounded mx-auto d-block"
                    src="./images/cheese-cake.jpg"
                    alt="Load of Cakes"
                  />
                </div>
              </div>
            </div>
            <h2>Our Offerings</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card">
                  <img src="./images/sig-cakes.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3>Signature Cakes</h3>
                    <p className="card-text">
                      Indulge in our carefully curated selection of signature
                      cakes, each a symphony of flavors and textures that will
                      tantalize your taste buds. From classic favorites to
                      avant-garde creations, there&apos;s a cake for every
                      palate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./images/custom-cake.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3>Custom Cake Orders</h3>
                    <p className="card-text">
                      Elevate your celebrations with a cake that&apos;s as
                      unique as you are! Our talented cake artists are ready to
                      collaborate with you to bring your vision to life. Whether
                      it&apos;s a themed birthday cake, a wedding masterpiece,
                      or a corporate event showstopper - we&apos;ll turn your
                      ideas into a delicious reality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./images/specialty-treat.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3>Specialty Treats</h3>
                    <p className="card-text">
                      Beyond cakes, we offer an array of delightful treats, from
                      cupcakes to cookies, ensuring that every visit to Code
                      Confectioners is a delightful experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./images/3d-cake.avif" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3>Tech-Infused Creations</h3>
                    <p className="card-text">
                      As proud &quot;Code Confectioners,&quot; we love to infuse a touch
                      of technology into our creations. From QR code cakes to
                      edible 3D-printed decorations, we bring a modern twist to
                      the world of baking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
