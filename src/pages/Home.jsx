import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    // 버튼 감싸는 div
    <div className="startBtn-div">
      {/* 포켓몬 도감 시작하기 btn */}
      <button className="startBtn" onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </button>
    </div>
  );
};

export default Home;
