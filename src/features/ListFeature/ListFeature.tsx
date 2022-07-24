import { FC, useState } from 'react';
import { getRandomId } from '../../utils/getRandomId';
import styles from './ListFeature.module.scss';
import { NoteItem, NoteList } from './types';
import { defaultNotesList } from './defaultData';
import { deleteItemFromNodeList, getNoteViewList } from './helpers';
import { NoteView } from './NoteView';

export const ListFeature: FC = () => {
  const [noteList, setNoteList] = useState<NoteList>(defaultNotesList);

  const [maxOrder, setMaxOrder] = useState<number>(1);

  const noteViewList = getNoteViewList(noteList);

  const handleAddItem = (parentId: string, title: string) => {
    const newId = getRandomId();

    const newMaxOrder = maxOrder + 1;

    setMaxOrder(newMaxOrder);

    const newNoteItem: NoteItem = {
      parentId,
      title,
      order: newMaxOrder,
      isEnableSubList: false,
    };
    setNoteList((prevState) => ({ ...prevState, [newId]: newNoteItem }));
  };

  const handleAddSubList = (id: string) => {
    setNoteList((prev) => ({
      ...prev,
      [id]: { ...prev[id], isEnableSubList: true },
    }));
  };

  const handleChangeOrder = (idA: string, idB: string) => {
    const orderA = noteList[idA].order;
    const orderB = noteList[idB].order;
    setNoteList((prev) => ({
      ...prev,
      [idA]: { ...noteList[idA], order: orderB },
      [idB]: { ...noteList[idB], order: orderA },
    }));
  };

  const handleDeleteItem = (id: string) => {
    const newNodeList = deleteItemFromNodeList(
      id,
      noteList,
      noteViewList,
      true,
    );
    setNoteList(newNodeList);
  };

  const handleDeleteSublist = (id: string) => {
    const newNodeList = deleteItemFromNodeList(
      id,
      noteList,
      noteViewList,
      false,
    );
    setNoteList({
      ...newNodeList,
      [id]: { ...noteList[id], isEnableSubList: false },
    });
  };

  return (
    <div className={styles.wrap}>
      {/*Здесь у нас корневой элемент с индексом 1*/}
      <NoteView
        noteViewItem={noteViewList[1]}
        noteViewList={noteViewList}
        onAddItem={handleAddItem}
        id={'1'}
        onAddSublist={handleAddSubList}
        onChangeOrder={handleChangeOrder}
        isEnableDeleteItem={false}
        onDeleteItem={handleDeleteItem}
        onDeleteSublist={handleDeleteSublist}
      />
    </div>
  );
};
