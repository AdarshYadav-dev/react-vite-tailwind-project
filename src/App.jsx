import React from "react";
import "./App.css";

const BoxContent = ({ imgSrc, iconSrc, title, description }) => (
  <div className="box-content bg-white w-80 absolute top-[300px] left-[26px] p-[26px] rounded-[19px] flex flex-col gap-5 items-start">
    <img src={iconSrc} alt="icon" className="absolute bottom-[202px] right-[41px]" />
    <h3 className="text-[22px] font-semibold">{title}</h3>
    <p>{description}</p>
    <button className="bg-orange-500 px-5 py-2.5 rounded-2xl text-[17px] font-medium">
      Learn More
    </button>
  </div>
);

const Container = ({ imgSrc, iconSrc, title, description }) => (
  <div className="container relative">
    <div className="img">
      <img src={imgSrc} alt={title} />
    </div>
    <BoxContent
      iconSrc={iconSrc}
      title={title}
      description={description}
    />
  </div>
);

const App = () => {
  const sections = [
    {
      imgSrc: "./airport.png",
      iconSrc: "./aeroplane-icon.png",
      title: "Airport",
      description:
        "We have over 25 years in supplying the airport sector with uniform. Find out how we can help you. Ask about airport uniform.",
    },
    {
      imgSrc: "./cleaning.png",
      iconSrc: "./cleaning-icon.png",
      title: "Cleaning",
      description:
        "We have over 25 years in supplying the cleaning sector with uniform. Find out how we can help you. Ask about cleaning uniform.",
    },
    {
      imgSrc: "./construcation.png",
      iconSrc: "./construction-con.png",
      title: "Construction",
      description:
        "We have over 25 years in supplying the construction sector with uniform. Find out how we can help you. Ask about construction uniform.",
    },
    {
      imgSrc: "./courier.png",
      iconSrc: "./courier-icon.png",
      title: "Courier",
      description:
        "We have over 25 years in supplying the courier sector with uniform. Find out how we can help you. Ask about courier uniform.",
    },
    {
      imgSrc: "./leisure.png",
      iconSrc: "./leisure-icon.png",
      title: "Leisure",
      description:
        "We have over 25 years in supplying the leisure sector with uniform. Find out how we can help you. Ask about leisure uniform.",
    },
    {
      imgSrc: "./logistics.png",
      iconSrc: "./logistic-icon.png",
      title: "Logistics",
      description:
        "We have over 25 years in supplying the logistics sector with uniform. Find out how we can help you. Ask about logistics uniform.",
    },
    {
      imgSrc: "./retail.png",
      iconSrc: "./retail-icon.png",
      title: "Retail",
      description:
        "We have over 25 years in supplying the retail sector with uniform. Find out how we can help you. Ask about retail uniform.",
    },
    {
      imgSrc: "./security.png",
      iconSrc: "./security-icon.png",
      title: "Security",
      description:
        "We have over 25 years in supplying the security sector with uniform. Find out how we can help you. Ask about security uniform.",
    },
    {
      imgSrc: "./security (1).png",
      iconSrc: "./security-icon.png",
      title: "Transport",
      description:
        "We have over 25 years in supplying the transport sector with uniform. Find out how we can help you. Ask about transport uniform.",
    },
  ];

  return (
    <div className="bg-gray-500 p-5">
      {sections.map((section, index) => (
        <div key={index} className="child-container flex gap-8 mb-10">
          <Container
            imgSrc={section.imgSrc}
            iconSrc={section.iconSrc}
            title={section.title}
            description={section.description}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
