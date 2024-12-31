import React from "react";
import Slider from "../Slider";

const Insights = () => {
  //   const slidesData = [
  //     {
  //       image: "/assets/images/landingPage/leaf.png",
  //       categrory: "NEWS",
  //       header: "7 Secrets For Leadership Success",
  //       blurb: "How ServiceNow Walk-Up Experience Transforms Your Service Desk",
  //     },
  //     {
  //       image: "/assets/images/landingPage/reload.png",
  //       categrory: "NEWS",
  //       header: "Lets Write A Journal for Your Own",
  //       blurb:
  //         "ServiceNow ITSM and CSM implementation for a leading cyber security provider organization",
  //     },
  //     {
  //       image: "/assets/images/landingPage/tag.png",
  //       categrory: "NEWS",
  //       header: "10 Best place for Travel",
  //       blurb:
  //         "ServiceNow Security Operations: Fasten Processing 6X via Automation and Integration",
  //     },
  //     {
  //       image: "/assets/images/landingPage/time.png",
  //       categrory: "NEWS",
  //       header: "10 Best place for Travel",
  //       blurb:
  //         "ServiceNow ITSM and CSM implementation for a leading cyber security provider organization",
  //     },
  //   ];
  const slidesData = [
    {
      image: "/assets/images/landingPage/insight1.png",
      category: "Technology Workflow",
      header:
        "Nurturing Talent, Transforming Futures: Dyooti’s Nexus Program 4.0 Unveiled",
    },
    {
      image: "/assets/images/landingPage/insight2.png",
      category: "Events",
      header:
        "Dyooti Set to Ignite Innovation: Anticipating the Servicenow Sales & Partner Kickoff (SKO 2024)",
    },
    {
      image: "/assets/images/landingPage/insight3.png",
      category: "News",
      header:
        "Dyooti Attains Perfect CSAT Score (5/5): A Game-Changer in ServiceNow Delivery",
    },
    {
      image: "/assets/images/landingPage/insight4.png",
      category: "Culture",
      header:
        "Dyooti’s Client-First Philosophy: Building Trust, Forging Lasting Relationships",
    },
  ];

  return (
    <section className="py-10 lg:py-12 px-5 md:px-12 xl:px-24 h-full bg-white">
      <div className="text-3xl font-bold">Insights</div>
      <Slider slides={slidesData} />
    </section>
  );
};

export default Insights;
