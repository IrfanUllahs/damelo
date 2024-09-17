"use client";
import Card1 from "@/components/addPropertiesCards/Card1";
import Card10 from "@/components/addPropertiesCards/Card10";
import Card11 from "@/components/addPropertiesCards/Card11";
import Card12 from "@/components/addPropertiesCards/Card12";
import Card2 from "@/components/addPropertiesCards/Card2";
import Card3 from "@/components/addPropertiesCards/Card3";
import Card4 from "@/components/addPropertiesCards/Card4";
import Card5 from "@/components/addPropertiesCards/Card5";
import Card6 from "@/components/addPropertiesCards/Card6";
import Card7 from "@/components/addPropertiesCards/Card7";
import Card8 from "@/components/addPropertiesCards/Card8";
import Card9 from "@/components/addPropertiesCards/Card9";
import LayoutAdmin from "@/components/layout/LayoutAdmin";
import { useState } from "react";
export default function DashboardAddProperties() {
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

  const handleNextCard = (e) => {
    e.preventDefault();
    setVisibleCardIndex((prevIndex) => prevIndex + 1);
    console.log(visibleCardIndex);
  };

  // List of card components
  const cards = [
    <Card2 key="Card2" handleNextCard={handleNextCard} />,
    <Card1 key="Card1" handleNextCard={handleNextCard} />,
    <Card3 key="Card3" handleNextCard={handleNextCard} />,
    <Card4 key="Card4" handleNextCard={handleNextCard} />,
    <Card5 key="Card5" handleNextCard={handleNextCard} />,
    <Card6 key="Card6" handleNextCard={handleNextCard} />,
    <Card7 key="Card7" handleNextCard={handleNextCard} />,
    <Card8 key="Card8" />,
    <Card9 key="Card9" />,
    <Card10 key="Card10" />,
    <Card11 key="Card11" />,
    <Card12 key="Card12" />,
  ];
  const display = true;
  return (
    <>
      <LayoutAdmin
        breadcrumbTitle="Add New Property"
        mainContentCls="spacing-20"
        display={display}
      >
        {cards.map((cart, index) => cart)}
      </LayoutAdmin>
    </>
  );
}
