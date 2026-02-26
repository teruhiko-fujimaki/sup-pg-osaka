import systemPrompt from '../../system_prompt.md?raw';

export const generatePrompt = (inputData) => {
    return `
${systemPrompt}

---

# User Input (ユーザー入力情報)

## 1. 基本情報
* **氏名:** ${inputData.name}
* **学年:** ${inputData.grade}
* **障がい・身体状況:** ${inputData.condition}

## 2. 実態把握メモ
${inputData.memo}

## 3. 本人・保護者の願い
${inputData.wishes}

---

上記の入力情報に基づき、行動指針に従って4つのセクション（①生かしたいよさ、②長期計画、③短期計画、④指導方法）を出力してください。
`;
};
