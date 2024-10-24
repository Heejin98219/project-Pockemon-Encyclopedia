import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0 0 0.1);
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0.2s;
  color: black;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0 0 0 0.2);
  }
`;

export default function PockemonCard({ pockemon, addPockemon }) {
  return (
    <Card
      onClick={() => {
        addPockemon(pockemon);
      }}
    >
      <div>{pockemon.id}</div>
      <div>{pockemon.korean_name}</div>
      <img src={pockemon.img_url} />
      <div>{pockemon.description}</div>
    </Card>
  );
}
