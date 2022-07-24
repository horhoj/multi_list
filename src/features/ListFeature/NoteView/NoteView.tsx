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
  onAddSublist: (id: string) => void;
  onChangeOrder: (idA: string, idB: string) => void;
}

const NOTE_EDIT_FORM_INITIAL_STATE: NoteEditFormValues = {
  title: '',
  formReinitializeKey: 0,
};

export const NoteView: FC<NoteViewProps> = ({
  noteViewItem,
  noteViewList,
  onAddItem,
  onAddSublist,
  id,
  children,
  onChangeOrder,
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

  const childListView = [...noteViewItem.childIdList]
    .sort((a, b) => noteViewList[a].order - noteViewList[b].order)
    .reverse();

  return (
    <div className={styles.wrap}>
      <div>{noteViewItem.title}</div>
      {children && <div className={styles.positionButtonList}>{children}</div>}
      <div>
        {noteViewItem.isEnableSubList ? (
          <NoteEditForm
            initialValues={noteEditFormInitialState}
            onSubmit={handleFormSubmit}
            placeholder={'add element'}
            autoFocus={false}
            onCancel={handleFormCancel}
          />
        ) : (
          <button
            className={styles.addSublistButton}
            onClick={() => onAddSublist(id)}
          >
            Add Sublist
          </button>
        )}
      </div>

      <div className={styles.childList}>
        {childListView.map((childId, index) => (
          <NoteView
            noteViewItem={noteViewList[childId]}
            key={childId}
            noteViewList={noteViewList}
            onAddItem={onAddItem}
            id={childId}
            onAddSublist={onAddSublist}
            onChangeOrder={onChangeOrder}
          >
            {index > 0 && (
              <button
                onClick={() =>
                  onChangeOrder(childListView[index], childListView[index - 1])
                }
              >
                up
              </button>
            )}
            {index < childListView.length - 1 && (
              <button
                onClick={() =>
                  onChangeOrder(childListView[index + 1], childListView[index])
                }
              >
                down
              </button>
            )}
          </NoteView>
        ))}
      </div>
    </div>
  );
};
