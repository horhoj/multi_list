import { FC, useState } from 'react';
import { getRandomId } from '../../utils/getRandomId';
import styles from './ListFeature.module.scss';
import { NoteItem, NoteList } from './types';
import { defaultNotesList } from './defaultData';
import { getNoteViewList } from './helpers';
import { NoteView } from './NoteView';

export const ListFeature: FC = () => {
  const [noteList, setNoteList] = useState<NoteList>(defaultNotesList);

  const noteViewList = getNoteViewList(noteList);

  const handleAddItem = (parentId: string, title: string) => {
    const newId = getRandomId();

    const newNoteItem: NoteItem = {
      parentId,
      title,
    };
    setNoteList((prevState) => ({ ...prevState, [newId]: newNoteItem }));
  };

  return (
    <div className={styles.wrap}>
      {/*Здесь у нас корневой элемент с индексом 1*/}
      <NoteView
        noteViewItem={noteViewList[1]}
        noteViewList={noteViewList}
        onAddItem={handleAddItem}
        id={'1'}
      />
    </div>
  );
};
