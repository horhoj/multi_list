export interface NoteItem {
  title: string;
  isEnableSubList: boolean;
  parentId: string | null;
  order: number;
}

export interface NoteList {
  [keys: string]: NoteItem;
}

export interface NoteViewItem {
  title: string;
  isEnableSubList: boolean;
  childIdList: string[];
  order: number;
}

export interface NoteViewList {
  [keys: string]: NoteViewItem;
}
