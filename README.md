# City Sim Project
전체 프로젝트 설명

# 🏙️ City Sim Project

**지역사회 이슈 시뮬레이터**  
React + FastAPI 기반으로 구현한 **정책 시뮬레이션 프로젝트**입니다.  
사용자가 정책을 적용하면 **도시 상태**와 **시민 반응**이 시뮬레이션됩니다.

---

## 📌 주요 기능

- 🌫️ 오염도, 😊 행복도, 🌳 공원 수 상태 표시
- 정책 버튼 클릭 → 정책 실행 → FastAPI 통해 상태 변화
- 시민 반응 피드백 표시
- React 프론트 + FastAPI 백엔드 연동

---

## 🗂️ 프로젝트 구조
city-sim-project/
├── city-sim-backend/ # FastAPI 백엔드
│ ├── main.py
│ ├── requirements.txt
│
├── city-sim-frontend/ # React 프론트엔드
│ ├── src/
│ │ ├── App.js
│ │ ├── CitySimUI.jsx
│
└── README.md


---

## ⚙️ 설치 및 실행 방법

### 1️⃣ 백엔드 실행 (FastAPI)

```bash
cd city-sim-backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000


프론트엔드 실행 (React)
cd city-sim-frontend
npm install
npm start
프론트 URL → http://localhost:3000


앞으로 확장 가능성

다양한 정책 추가 (교통, 복지 등)
결과 시각화 (Chart.js 활용)
도시 맵 기반 애니메이션 추가
상태 저장 기능 추가 (localStorage, Firebase 등)

🙏 기여

학습 목적으로 만든 프로젝트입니다.
자유롭게 사용 및 수정 가능 🚀.
