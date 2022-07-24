import { NoteList } from './types';

export const defaultNotesList: NoteList = {
  1: { parentId: null, title: 'root', isEnableSubList: true, order: 1 },
  // 2: { parentId: '1', title: '1', isEnableSubList: true, order: 2 },
  // 3: { parentId: '2', title: '2', isEnableSubList: true, order: 3 },
  // 4: { parentId: '3', title: '3', isEnableSubList: true, order: 4 },
  // 5: { parentId: '4', title: '4', isEnableSubList: true, order: 5 },
  // 6: { parentId: '4', title: '5', isEnableSubList: true, order: 5 },
  // 7: { parentId: '4', title: '6', isEnableSubList: true, order: 5 },
  // 8: { parentId: '4', title: '7', isEnableSubList: true, order: 5 },
  // 9: { parentId: '2', title: '8', isEnableSubList: true, order: 5 },
};
