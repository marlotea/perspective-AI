export const getArticleContent = async (): Promise<string> => {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
            chrome.tabs.sendMessage(tab.id!, { action: "get_article" }, (res) => {
                resolve(res.content);
            });
        });
    });
};

export const analyzeArticle = async (text: string) => {
    const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    });
    return response.json();
};
