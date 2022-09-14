import React from 'react';

const editorTypesConfig = [
  { value: 'short', display: 'Short' },
  { value: 'long', display: 'Long' },
  { value: 'radio', display: 'Single-choice Question' },
  { value: 'checkbox', display: 'Multi-choice Question' },
  { value: 'number', display: 'Scale' },
] as const;

type QuestionaireItemType = typeof editorTypesConfig[number]['value'];

export type QuestionaireItem =
  | {
      type: Exclude<
        QuestionaireItemType,
        'checkbox' | 'radio' | 'scale' | 'number'
      >;
      question: string;
    }
  | {
      type: Exclude<
        QuestionaireItemType,
        'short' | 'long' | 'scale' | 'number'
      >;
      question: string;
      predefinedAnswers?: string[];
    };

const EditorNewItem: React.FC<{
  item: QuestionaireItem;
  setQuestionaireItem: (item: QuestionaireItem) => void;
}> = ({ item, setQuestionaireItem }) => {
  const createChangeHandler =
    (key: keyof QuestionaireItem) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setQuestionaireItem({ ...item, [key]: event.target.value });

  const editorTypeOptions = editorTypesConfig.map((editorType) => (
    <option key={editorType.value} value={editorType.value}>
      {editorType.display}
    </option>
  ));

  const newOptionButton = (item.type === 'checkbox' ||
    item.type === 'radio') && (
    <button
      onClick={() => {
        setQuestionaireItem({
          ...item,
          predefinedAnswers: [...(item.predefinedAnswers || []), ''],
        });
      }}
    ></button>
  );

  return (
    <div>
      <input value={item.question} onChange={createChangeHandler('question')} />
      <select onChange={createChangeHandler('type')}>
        {editorTypeOptions}
      </select>
      {(item.type === 'checkbox' || item.type === 'radio') &&
        item.predefinedAnswers?.map((answer, index) => {
          return <input key={index} type="text" value={answer} />;
        })}
      {/** map po item?.predefinedAnswers zeby wyswietlic inputy */}
      {newOptionButton}
    </div>
  );
};

export default EditorNewItem;
