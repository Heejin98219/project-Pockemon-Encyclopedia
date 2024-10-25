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

const Message = styled.p`
  color: black;
`;

const Dashboard = ({ selectedPokemon, removePockemon }) => {
  return (
    <DashboardContainer>
      <Title>대시보드</Title>
      {selectedPokemon.length === 0 ? (
        <Message>선택된 포켓몬이 없습니다.</Message>
      ) : (
        <ul>
          {selectedPokemon.map((pockemon) => (
            <PockemonCard
              key={pockemon.id}
              pockemon={pockemon}
              handleOnClick={removePockemon}
            />
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
