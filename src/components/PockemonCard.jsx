// 개별 포켓몬의 정보를 카드 형식으로 보여주는 컴포넌트
const Card = styled.div``;

const Button = styled.button``;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  return (
    <Card>
      <img src={""} alt={""} />
      <p>{pokemon.korean_name}</p>
      {isSelected ? (
        <Button onClick={() => {}}>삭제</Button>
      ) : (
        <Button onClick={() => {}}>추가</Button>
      )}
    </Card>
  );
}

export default PokemonCard;
