import React, { FC, Fragment, useState } from 'react';
import './EditorNew.css';
import { EditorNewItem, QuestionaireItem } from './EditorNewItem';

const NewEditor: FC = () => {
  const [title, setTitle] = useState('');
  const [questionnareItems, setQuestionnareItems] = useState<
    QuestionaireItem[]
  >([]);

  console.log(title);
  console.log(questionnareItems);

  const handleAddQuestionaireItem = () =>
    setQuestionnareItems((items) => [
      ...items,
      { question: 'default', type: 'short' },
    ]);

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => setTitle(event.target.value);

  return (
    <main>
      <h2>New Editor</h2>
      <input type="text" value={title} onChange={handleTitleChange} />
      ITEMS:
      {questionnareItems.map((item, index) => (
        <EditorNewItem
          key={index}
          item={item}
          setQuestionaireItem={(item) => {
            setQuestionnareItems((items) => {
              const newItems = [...items];
              newItems[index] = item;

              return newItems;
            });
          }}
        />
      ))}
      <button onClick={handleAddQuestionaireItem}>Add new question</button>
    </main>
  );
};

export default NewEditor;
