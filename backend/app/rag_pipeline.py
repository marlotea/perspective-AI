from app.openai_client import call_openai
from app.vectorstore import search_context

def run_rag(article_text: str):
    query = article_text[:300]  # Naive query
    context_docs = search_context(query)
    context = "\n\n".join(doc["content"] for doc in context_docs)
    prompt = f"""You are an AI assistant. Here's a news article:

{article_text}

Provide a summary and context from reliable sources:
{context}
"""
    summary = call_openai(prompt)
    return summary, [doc["source"] for doc in context_docs]
