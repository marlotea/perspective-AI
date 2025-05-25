from fastapi import FastAPI, Request
from app.rag_pipeline import run_rag
from app.schema import AnalyzeRequest

app = FastAPI()

@app.post("/analyze")
async def analyze(request: AnalyzeRequest):
    summary, sources = run_rag(request.text)
    return {"summary": summary, "sources": sources}
