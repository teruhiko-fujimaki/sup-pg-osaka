import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import InputForm from './components/InputForm';
import OutputDisplay from './components/OutputDisplay';
import { generateEducationPlan } from './utils/openai';

function App() {
  const [apiKey, setApiKey] = useState('');
  const [inputData, setInputData] = useState({
    name: '',
    grade: '',
    condition: '',
    memo: '',
    wishes: ''
  });
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const generatedText = await generateEducationPlan(apiKey, inputData);
      setResult(generatedText);
    } catch (err) {
      setError(err.message || "生成に失敗しました。APIキーを確認して、もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <AppHeader apiKey={apiKey} setApiKey={setApiKey} />

      <main className="container" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
        <InputForm
          data={inputData}
          onChange={setInputData}
          onSubmit={handleGenerate}
          isLoading={isLoading}
          hasApiKey={!!apiKey}
        />

        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid #ef4444',
            color: '#fca5a5',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '32px'
          }}>
            <strong>エラー:</strong> {error}
          </div>
        )}

        <OutputDisplay result={result} />
      </main>
    </div>
  );
}

export default App;
