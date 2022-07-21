import { FC, useState } from 'react';
import { NoteViewItem, NoteViewList } from '../types';
import styles from './NoteView.module.scss';
import { NoteEditForm } from './NoteEditForm';
import { NoteEditFormValues } from './types';

interface NoteViewProps {
  noteViewItem: NoteViewItem;
  noteViewList: NoteViewList;
  onAddItem: (parentId: string, title: string) => void;
  id: string;
}

const NOTE_EDIT_FORM_INITIAL_STATE: NoteEditFormValues = {
  title: '',
  formReinitializeKey: 0,
};

export const NoteView: FC<NoteViewProps> = ({
  noteViewItem,
  noteViewList,
  onAddItem,
  id,
}) => {
  const [noteEditFormInitialState, setNoteEditFormInitialState] =
    useState<NoteEditFormValues>({ ...NOTE_EDIT_FORM_INITIAL_STATE });

  const handleFormSubmit = (values: NoteEditFormValues) => {
    setNoteEditFormInitialState((prev) => ({
      ...NOTE_EDIT_FORM_INITIAL_STATE,
      formReinitializeKey: prev.formReinitializeKey + 1,
    }));
    onAddItem(id, values.title);
  };

  const handleFormCancel = () => {
    setNoteEditFormInitialState((prev) => ({
      ...NOTE_EDIT_FORM_INITIAL_STATE,
      formReinitializeKey: prev.formReinitializeKey + 1,
    }));
  };

  return (
    <div className={styles.wrap}>
      <div>{noteViewItem.title}</div>
      <div>
        <NoteEditForm
          initialValues={noteEditFormInitialState}
          onSubmit={handleFormSubmit}
          placeholder={'add element'}
          autoFocus={false}
          onCancel={handleFormCancel}
        />
      </div>
      <div className={styles.childList}>
        {[...noteViewItem.childIdList].reverse().map((childId) => (
          <NoteView
            noteViewItem={noteViewList[childId]}
            key={childId}
            noteViewList={noteViewList}
            onAddItem={onAddItem}
            id={childId}
          />
        ))}
      </div>
    </div>
  );
};
