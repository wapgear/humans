import {IHuman} from "types/humans.types";

export interface IHumanSearchProps {
  updateSearch: (value: string, list: IHuman[]) => void;
  list: IHuman[];
  searchField: string;
}

export interface IHumanListProps extends IHumanSearchProps {
  searchList: IHuman[];
  updateSelectedHuman: (id: number) => void;
  selectedHuman: IHuman;
  removeHuman: (id: number) => void;
}

export interface IHumanComponentProps extends IHumanListProps {
  createOrUpdateHuman: (human: IHuman) => void;
}


export interface IHumanDetailsProps {
  onSubmit: (values: IHuman) => void;
  initialValues: IHuman;
}
