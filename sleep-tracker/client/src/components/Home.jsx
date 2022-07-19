import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Become a better sleeper</h1>
            <p>
                Sleep is essential for your health and wellbeing.
                Sleep affects mental functioning, the ability to fight disease and develop immunity, 
                and reduces disease risk.
                <br></br>
                <br></br>
                Track your sleep to improve your sleeping patterns so you
                can experience these benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;