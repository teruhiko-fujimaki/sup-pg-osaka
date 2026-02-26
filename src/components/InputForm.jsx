import React from 'react';

export default function InputForm({ data, onChange, onSubmit, isLoading, hasApiKey }) {

    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value });
    };

    return (
        <div className="glass-panel" style={{ padding: '32px', marginBottom: '32px' }}>
            <div style={{ marginBottom: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
                <h2>児童・生徒の実態と評価</h2>
                <p>詳細情報と観察メモを入力して、個別の教育支援計画案を作成します。</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '24px' }}>
                <div>
                    <label>氏名 (イニシャル等)</label>
                    <input
                        type="text"
                        placeholder="例: 山田 太郎"
                        value={data.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                    />
                </div>
                <div>
                    <label>学年 / 年齢</label>
                    <input
                        type="text"
                        placeholder="例: 小学2年生, 8歳"
                        value={data.grade}
                        onChange={(e) => handleChange('grade', e.target.value)}
                    />
                </div>
                <div>
                    <label>障がい・身体状況</label>
                    <input
                        type="text"
                        placeholder="例: 自閉スペクトラム症, ADHD"
                        value={data.condition}
                        onChange={(e) => handleChange('condition', e.target.value)}
                    />
                </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
                <label>実態把握メモ (観察記録)</label>
                <textarea
                    placeholder="日常生活、学習行動、対人関係などについて具体的に記述してください。\n(例: 特定のルーチンがある、興奮すると衝動的になる、電車に対して強い集中力を示す)"
                    value={data.memo}
                    onChange={(e) => handleChange('memo', e.target.value)}
                    rows={6}
                    style={{ resize: 'vertical' }}
                />
            </div>

            <div style={{ marginBottom: '32px' }}>
                <label>本人・保護者の願い</label>
                <textarea
                    placeholder="将来の生活や、身につけさせたい力についての要望。"
                    value={data.wishes}
                    onChange={(e) => handleChange('wishes', e.target.value)}
                    rows={3}
                    style={{ resize: 'vertical' }}
                />
            </div>

            <div style={{ textAlign: 'right' }}>
                {!hasApiKey && (
                    <span style={{ color: 'var(--color-accent-secondary)', marginRight: '16px', fontSize: '0.9rem' }}>
                        APIキーを入力してください。
                    </span>
                )}
                <button
                    className="btn btn-primary"
                    onClick={onSubmit}
                    disabled={isLoading || !hasApiKey}
                    style={{ opacity: (isLoading || !hasApiKey) ? 0.7 : 1, cursor: (isLoading || !hasApiKey) ? 'not-allowed' : 'pointer' }}
                >
                    {isLoading ? (
                        <>
                            <span className="spinner" style={{
                                width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)',
                                borderTopColor: 'white', borderRadius: '50%', display: 'inline-block',
                                animation: 'spin 1s linear infinite'
                            }}></span>
                            生成中...
                        </>
                    ) : (
                        <>
                            ✨ 計画案を生成
                        </>
                    )}
                </button>
                <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
            </div>
        </div>
    );
}
