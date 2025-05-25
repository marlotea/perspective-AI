from typing import List

# Simulate context retrieval
def search_context(query: str) -> List[dict]:
    return [
        {"content": "Wikipedia context on major events related to article.", "source": "Wikipedia"},
        {"content": "Fact-checking site data on similar topic.", "source": "Snopes"}
    ]
