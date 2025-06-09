import React, { useState } from "react";
import "./CitySimUI.css";

export default function CitySimStorylineUI() {
  const problems = [
    "미세먼지 급증! 시민들이 마스크를 쓰고 있습니다.",
    "등교길 교통 체증 발생 중!",
    "쓰레기 무단투기로 거리 미관이 나빠졌습니다.",
    "밤길이 너무 어두워 시민들이 불안해합니다.",
    "공원이 부족해 시민 만족도가 낮아지고 있습니다."
  ];

  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  const [state, setState] = useState({
    pollution: 80,
    happiness: 50,
    parks: 0,
    feedback: "문제 상황을 확인하고 정책을 선택하세요."
  });

  const buildAt = (index, type) => {
    const newGrid = [...grid];
    newGrid[index] = type;
    setGrid(newGrid);

    if (type === "park") {
      setState(prev => ({
        ...prev,
        pollution: prev.pollution - 10,
        happiness: prev.happiness + 5,
        parks: prev.parks + 1,
        feedback: "🌳 공원이 지어졌습니다!"
      }));
    }
    if (type === "factory") {
      setState(prev => ({
        ...prev,
        pollution: prev.pollution + 20,
        happiness: prev.happiness - 5,
        feedback: "🏭 공장이 지어졌습니다! 오염도가 증가했습니다."
      }));
    }
    if (type === "house") {
      setState(prev => ({
        ...prev,
        feedback: "🏠 주택이 지어졌습니다!"
      }));
    }
  };

  const handlePolicy = (policyType) => {
    if (policyType === "waste_policy") {
      setState(prev => ({
        ...prev,
        pollution: prev.pollution - 15,
        feedback: "♻️ 쓰레기 처리 정책 실행 → 오염도 감소!"
      }));
    }
    if (policyType === "traffic_policy") {
      setState(prev => ({
        ...prev,
        happiness: prev.happiness + 5,
        feedback: "🚦 신호등 설치 → 시민 행복도 증가!"
      }));
    }
    if (policyType === "safety_policy") {
      setState(prev => ({
        ...prev,
        happiness: prev.happiness + 10,
        feedback: "🚓 안전 강화 정책 실행 → 시민 안전 증가!"
      }));
    }
    if (policyType === "health_policy") {
      setState(prev => ({
        ...prev,
        happiness: prev.happiness + 15,
        feedback: "🏥 보건 정책 강화 → 건강한 도시!"
      }));
    }
    if (policyType === "public_transport_policy") {
      setState(prev => ({
        ...prev,
        pollution: prev.pollution - 5,
        happiness: prev.happiness + 5,
        feedback: "🚍 대중교통 확충 → 오염도 감소 + 행복도 증가!"
      }));
    }
  };

  const nextProblem = () => {
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
      setState(prev => ({
        ...prev,
        feedback: "새로운 문제 상황입니다. 정책을 선택하세요!"
      }));
    } else {
      setState(prev => ({
        ...prev,
        feedback: "🎉 모든 문제를 해결했습니다!"
      }));
    }
  };

  return (
    <div>
      <h1>🏙️ 지역사회 시뮬레이터 (심시티 스타일)</h1>

      <h2>📢 문제 상황:</h2>
      <p>{problems[currentProblemIndex]}</p>

      <div className="grid-container">
        {/* Grid UI는 이전 코드와 동일하게 추가 */}
      </div>

      <div>
        <button onClick={() => setGrid(grid.map(() => "house"))}>🏠 주택 건설</button>
        <button onClick={() => setGrid(grid.map(() => "factory"))}>🏭 공장 건설</button>
        <button onClick={() => setGrid(grid.map(() => "park"))}>🌳 공원 건설</button>
      </div>

      <div>
        <button onClick={() => handlePolicy("waste_policy")}>♻️ 쓰레기 처리 정책</button>
        <button onClick={() => handlePolicy("traffic_policy")}>🚦 신호등 설치</button>
        <button onClick={() => handlePolicy("safety_policy")}>🚓 안전 강화 정책</button>
        <button onClick={() => handlePolicy("health_policy")}>🏥 보건 정책 강화</button>
        <button onClick={() => handlePolicy("public_transport_policy")}>🚍 대중교통 확충</button>
      </div>

      <div>
        <p>오염도: {state.pollution}</p>
        <p>행복도: {state.happiness}</p>
        <p>공원 수: {state.parks}</p>
        <p>📢 {state.feedback}</p>
      </div>

      <div>
        <button onClick={nextProblem}>➡️ 다음 문제로 이동</button>
      </div>
    </div>
  );
}
