import React from "react";
import Playlists from "./Playlists";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Sounds of India",
      description: "",
    },
    {
      id: 2,
      name: "Charts",
      description: "Playlists which are in top chart",
    },
    {
      id: 3,
      name: "Party",
      description: "Get the party started with these upbeat playlists.",
    },
    {
      id: 4,
      name: "Soundtrack Your Home",
      description: "Make a feel in your Home.",
    },
  ];

  return (
    <div className="mainInner">
      {categories.map((category, id) => (
        <div className="cardsWrap" key={id}>
          <h2>{category.name}</h2>
          <p className="subText">{category.description}</p>

          <Playlists category_id={category.id} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
