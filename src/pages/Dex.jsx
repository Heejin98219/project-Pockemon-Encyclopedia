import styled from "styled-components";
import Dashboard from "../components/DashBoard";
import PockemonList from "../components/PockemonList";
import { useState } from "react";
import MOCK_DATA from "../mock";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default function Dex() {
  // selectedPockemon 관리
  // 빈배열로 설정하는 이유
  // 1. 처음에는 어떤 포켓몬도 선택이 안 될거기 때문
  // 2. 하나씩 누를 때마다 선택할 것이기 때문
  const [selectedPockemon, setSelectedPockemon] = useState([]);

  const addPockemon = (pockemon) => {
    console.log(pockemon);
    // selectedPockemon에
    // pockemon이 포함되어 있다면
    if (selectedPockemon.includes(pockemon)) {
      alert("이미 선택된 포켓몬입니다.");
    } else {
      // setSelectedPocketmon에
      // 기존의 setSelectedPocketmon의 데이터와
      // pockemon 데이터를 넣음
      setSelectedPockemon([...selectedPockemon, pockemon]);
    }
  };

  // 선택된 포켓몬을 props로 전달
  return (
    <DexContainer>
      <Dashboard selectedPokemon={selectedPockemon} />
      {/* 
      MOCK_DATA를 pockemonList라는 변수를 사용해서
      props로 넘겨줌*/}
      <PockemonList pockemonList={MOCK_DATA} addPockemon={addPockemon} />
    </DexContainer>
  );
}
