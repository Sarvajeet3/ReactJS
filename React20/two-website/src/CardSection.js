import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const CardSection = () => (
    <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">
        We love new friends!
      </h2>
      <div className="row">
        <div className="col-4">
        <Card1 Cardtitle="Just Learning" ButtonName="Knowledge" Text="Aadhar Number is IMP"/>
        </div>
        <div className="col-4">
        <Card2 Cardtitle="From Learn Code Online" ButtonName="Gives"/>
        </div>
        <div className="col-4">
        <Card3 Cardtitle="From Learn Code Online" ButtonName="Knowledge"/>
        </div>
      </div>
    </div>
  </section>
)

export default CardSection;