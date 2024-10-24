// 모든 포켓몬을 리스트로 보여주는 컴포넌트
import styled from "styled-components";
import PockemonCard from "./PockemonCard";

const ListContainer = styled.div`
  /* justify-content: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: #d3d3d3;
  padding: 8px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const PockemonList = ({ pockemonList, addPockemon }) => {
  return (
    <ListContainer>
      {pockemonList.map((pockemon) => (
        <PockemonCard
          key={pockemon.id}
          pockemon={pockemon}
          addPockemon={addPockemon}
        />
      ))}
    </ListContainer>
  );
};

export default PockemonList;
