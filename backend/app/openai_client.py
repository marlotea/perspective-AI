import openai
import os
openai.api_key = os.getenv("OPENAI_API_KEY")

def call_openai(prompt: str) -> str:
    res = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.5
    )
    return res["choices"][0]["message"]["content"]
