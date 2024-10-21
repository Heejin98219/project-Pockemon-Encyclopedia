import { useState } from "react";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [pockemonData, setPockemonData] = useState(MOCK_DATA);
  const [selectedPokemon, setSelectedPockemon] = useState("");

  const addPokemon = (pokemon) => {
    // 포켓몬을 선택하는 로직을 완성해봅시다
  };

  const removePokemon = (pokemon) => {
    // 제거는 필터를 이용해 봅시다
  };

  return (
    <div className="cards-grid">
      {pockemonData.map(function (cards) {
        return (
          <div key={cards.id}>
            <img src={cards.img_url}></img>
            <br />
            {cards.id}
            <br />
            {cards.korean_name}
            <br />
            {cards.types}
            <br />
            {cards.description}
          </div>
        );
      })}
    </div>
  );
};

export default Dex;
