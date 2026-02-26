import React, { useState } from 'react';

export default function AppHeader({ apiKey, setApiKey }) {
  const [showKey, setShowKey] = useState(false);

  return (
    <header style={{
      height: 'var(--header-height)',
      borderBottom: '1px solid var(--color-border)',
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: 'white'
          }}>AI</div>
          <h1 style={{ fontSize: '1.25rem', margin: 0 }}>特別支援教育計画作成アシスタント</h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative' }}>
            <input
              type={showKey ? "text" : "password"}
              placeholder="OpenAI APIキーを入力"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              style={{
                width: '240px',
                height: '36px',
                paddingRight: '36px',
                fontSize: '0.85rem'
              }}
            />
            <button
              onClick={() => setShowKey(!showKey)}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              {showKey ? "隠す" : "表示"}
            </button>
          </div>
          <a
            href="https://platform.openai.com/api-keys"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.8rem', color: 'var(--color-accent-tertiary)', textDecoration: 'none' }}
          >
            キーを取得
          </a>
        </div>
      </div>
    </header>
  );
}
