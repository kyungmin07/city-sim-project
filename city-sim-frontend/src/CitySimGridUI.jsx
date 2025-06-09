import React, { useState } from "react";
import "./CitySimUI.css"; // 별도 css 파일 필요

export default function CitySimGridUI() {
  const initialGrid = Array(5 * 5).fill("empty");

  const [grid, setGrid] = useState(initialGrid);
  const [state, setState] = useState({
    pollution: 80,
    happiness: 50,
    parks: 0,
    feedback: "시민 피드백을 확인하세요."
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

  return (
    <div>
      <h1>🏙️ 지역사회 시뮬레이터 (심시티 스타일)</h1>

      <div className="grid-container">
        {grid.map((cell, index) => (
          <div
            key={index}
            className={`grid-cell ${cell}`}
            onClick={() => buildAt(index, "house")}
          >
            {cell === "empty" && "⬜️"}
            {cell === "house" && "🏠"}
            {cell === "factory" && "🏭"}
            {cell === "park" && "🌳"}
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => setGrid(grid.map(() => "house"))}>🏠 주택 건설</button>
        <button onClick={() => setGrid(grid.map(() => "factory"))}>🏭 공장 건설</button>
        <button onClick={() => setGrid(grid.map(() => "park"))}>🌳 공원 건설</button>
      </div>

      <div>
        <p>오염도: {state.pollution}</p>
        <p>행복도: {state.happiness}</p>
        <p>공원 수: {state.parks}</p>
        <p>📢 {state.feedback}</p>
      </div>
    </div>
  );
}

