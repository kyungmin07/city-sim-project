
from fastapi import FastAPI, Body
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

class State(BaseModel):
    pollution: int
    happiness: int
    parks: int

@app.post("/simulate")
def simulate(policy: str = Body(...), state: State = Body(...)):
    if policy == "pollution_policy" and state.pollution > 70:
        state.pollution -= 10
        state.happiness += 5
        state.parks += 1
        feedback = "✅ 공원이 지어졌습니다!\n"
    else:
        feedback = "공원 건설 조건을 충족하지 않습니다.\n"

    if state.happiness > 70:
        feedback += "😊 시민들: 매우 만족합니다!"
    elif state.happiness < 40:
        feedback += "😠 시민들: 불만이 많아요!"
    else:
        feedback += "😐 시민들: 괜찮은 편이에요."

    return state.dict() | {"feedback": feedback}
