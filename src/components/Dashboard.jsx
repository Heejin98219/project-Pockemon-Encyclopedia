import styled from "styled-components";
import PockemonCard from "./PockemonCard";

// 선택된 포켓몬을 보여주는 컴포넌트
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #ff0000;
`;

const SlotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const EmptySlot = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const PockballImage = styled.img`
  width: 50px;
  height: 50px;
`;

const Message = styled.p`
  color: black;
`;

const Dashboard = ({ selectedPokemon }) => {
  return (
    <DashboardContainer>
      <Title>대시보드</Title>
      {selectedPokemon.length === 0 ? (
        <Message>선택된 포켓몬이 없습니다.</Message>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.korean_name}</li>
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
