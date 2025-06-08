
import React, { useState } from "react";
import axios from "axios";

export default function CitySimUI() {
  const [state, setState] = useState({
    pollution: 80,
    happiness: 50,
    parks: 0,
    feedback: "시민 피드백을 확인하세요."
  });

  const handleClick = async () => {
    const res = await axios.post("http://localhost:8000/simulate", {
      policy: "pollution_policy",
      state: {
        pollution: state.pollution,
        happiness: state.happiness,
        parks: state.parks
      }
    });
    setState(res.data);
  };

  return (
    <div>
      <h1>🏙️ 지역사회 시뮬레이터</h1>
      <div>오염도: {state.pollution}</div>
      <div>행복도: {state.happiness}</div>
      <div>공원 수: {state.parks}</div>
      <button onClick={handleClick}>공원 건설 정책 실행</button>
      <p>📢 {state.feedback}</p>
    </div>
  );
}
