import { NoteList, NoteViewList } from './types';

export const getNoteViewList = (noteList: NoteList): NoteViewList => {
  const noteViewList: NoteViewList = {};

  const noteListKeyList = Object.keys(noteList);

  noteListKeyList.forEach((noteListKey) => {
    const note = noteList[noteListKey];
    noteViewList[noteListKey] = {
      title: note.title,
      isEnableSubList: note.isEnableSubList,
      childIdList: [],
      order: note.order,
    };
  });

  noteListKeyList.forEach((noteListKey) => {
    const parentId = noteList[noteListKey].parentId;
    if (parentId !== null) {
      noteViewList[parentId].childIdList.push(noteListKey);
    }
  });

  return noteViewList;
};
