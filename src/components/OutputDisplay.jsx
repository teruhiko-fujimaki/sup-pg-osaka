import React from 'react';
import ReactMarkdown from 'react-markdown';

// Helper to split markdown content by headers into sections
const parseSections = (markdown) => {
    if (!markdown) return [];

    // Simple heuristic: split by H2 "##"
    // Note: This assumes the AI follows the requested format strictly.
    const rawSections = markdown.split(/^##\s+/m);

    return rawSections.filter(s => s.trim().length > 0).map(section => {
        const titleEnd = section.indexOf('\n');
        const title = section.slice(0, titleEnd).trim();
        const content = section.slice(titleEnd).trim();
        return { title, content };
    });
};

export default function OutputDisplay({ result }) {
    if (!result) return null;

    const sections = parseSections(result);

    return (
        <div className="grade-grid">
            {sections.map((section, idx) => (
                <div key={idx} className="glass-panel result-card">
                    <div className="result-card-header">
                        <h3>{section.title}</h3>
                    </div>
                    <div className="result-card-body markdown-content">
                        <ReactMarkdown>{section.content}</ReactMarkdown>
                    </div>
                </div>
            ))}

            {/* Fallback if parsing fails or simple display is needed */}
            {sections.length === 0 && (
                <div className="glass-panel result-card" style={{ gridColumn: '1 / -1' }}>
                    <div className="result-card-body markdown-content">
                        <ReactMarkdown>{result}</ReactMarkdown>
                    </div>
                </div>
            )}
        </div>
    );
}
