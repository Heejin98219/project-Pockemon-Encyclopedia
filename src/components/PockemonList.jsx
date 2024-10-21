// 모든 포켓몬을 리스트로 보여주는 컴포넌트
const ListContainer = styled.div``;

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={{}}
          onAdd={() => {}}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
