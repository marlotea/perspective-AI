import React, { useState } from 'react';
import { getArticleContent, analyzeArticle } from '../utils/api';

const Popup = () => {
    const [response, setResponse] = useState<string>('Loading...');

    const handleAnalyze = async () => {
        const content = await getArticleContent();
        const result = await analyzeArticle(content);
        setResponse(result.summary);
    };

    return (
        <div className="popup-container">
            <h1>PerspectiveAI</h1>
            <button onClick={handleAnalyze}>Analyze Article</button>
            <div className="response-box">{response}</div>
        </div>
    );
};

export default Popup;
