import React from "react";
import { ReactComponent as PlayIcon } from "../svgsCollection/play.svg";

const Playlists = (props) => {
  const playListCategories = [
    {
      id: 101,
      category_id: 3,
      name: "Party 1",
      img: "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      desc: "Party 1",
    },
    {
      id: 102,
      category_id: 3,
      name: "Party 2",
      img: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFydHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      desc: "Party 2",
    },
    {
      id: 103,
      category_id: 3,
      name: "Party 3",
      img: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcnR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      desc: "Party 3",
    },
    {
      id: 103,
      category_id: 3,
      name: "Party 4",
      img: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      desc: "Party 4",
    },
    {
      id: 10,
      category_id: 1,
      name: "Song 1",
      img: "https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      desc: "Song 1 details",
    },
    {
      id: 11,
      category_id: 1,
      name: "Song 2",
      img: "https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80",
      desc: "Song 2 details",
    },
    {
      id: 12,
      category_id: 1,
      name: "Song 3",
      img: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      desc: "Song 3 details",
    },
    {
      id: 13,
      category_id: 1,
      name: "Song 4",
      img: "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      desc: "Song 4 details",
    },
    {
      id: 14,
      category_id: 1,
      name: "Song 5",
      img: "https://images.unsplash.com/photo-1583740814210-976032d40dea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
      desc: "Song 5 details",
    },
    {
      id: 105,
      category_id: 4,
      name: "Sound Track your Home 1",
      img: "https://images.unsplash.com/photo-1594724201056-76945d547091?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhpbmRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      desc: "Sound Track your Home 1",
    },
    {
      id: 106,
      category_id: 4,
      name: "Sound Track your Home 2",
      img: "https://images.unsplash.com/photo-1511461744085-90a4d1c66be3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWUlMjBwYXJ0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      desc: "Sound Track your Home 2",
    },
    {
      id: 107,
      category_id: 4,
      name: "Sound Track your Home 3",
      img: "https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80",
      desc: "Sound Track your Home 3",
    },
    {
      id: 106,
      category_id: 2,
      name: "Charts 1 ",
      img: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      desc: "Charts 1",
    },
    {
      id: 107,
      category_id: 2,
      name: "Charts 2",
      img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      desc: "Charts 2",
    },
    {
      id: 108,
      category_id: 2,
      name: "Charts 3",
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      desc: "Charts 3",
    },
  ];

  let displayPlaylists = playListCategories
    .filter((playlist) => playlist.category_id === props.category_id)
    .slice(0, props.limiter);

  return (
    <div className="cardsWrapInner">
      {displayPlaylists.map((playlist, id) => (
        <div className="card" key={id}>
          <div className="cardImage">
            <img src={playlist.img} alt="Pic 1" />
          </div>
          <div className="cardContent">
            <h3>{playlist.name}</h3>
            <span>{playlist.desc}</span>
          </div>
          <span className="playIcon">
            <PlayIcon />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Playlists;
