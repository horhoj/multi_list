export interface NoteItem {
  title: string;
  parentId: string | null;
}

export interface NoteList {
  [keys: string]: NoteItem;
}

export interface NoteViewItem {
  title: string;
  childIdList: string[];
}

export interface NoteViewList {
  [keys: string]: NoteViewItem;
}
