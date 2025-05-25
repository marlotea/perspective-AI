// Extracts article content using DOM heuristics and sends to background
const getArticleText = () => {
    const article = document.querySelector('article') || document.body;
    return article?.innerText || '';
};

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.action === "get_article") {
        sendResponse({ content: getArticleText() });
    }
});
