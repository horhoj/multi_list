import { NoteList } from './types';

export const defaultNotesList: NoteList = {
  1: { parentId: null, title: 'item 1' },
  2: { parentId: '1', title: 'item 2' },
  3: { parentId: '1', title: 'item 3' },
  4: { parentId: '2', title: 'item 4' },
  5: { parentId: '2', title: 'item 5' },
  6: { parentId: '3', title: 'item 6' },
  7: { parentId: '3', title: 'item 7' },
  8: { parentId: '4', title: 'item 8' },
  9: { parentId: '4', title: 'item 9' },
};
