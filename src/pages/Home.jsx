import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

// 다른 페이지로 이동하는 btn
const StartBtn = styled.button`
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ff0000;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #cc0000;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <StartBtn onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</StartBtn>
    </HomeContainer>
  );
};

export default Home;
