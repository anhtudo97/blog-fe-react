export interface ICategory {
    name: string
}

export interface IPost {
  _id: string;
  title: string;
  desc: string;
  photo: string;
  username: string;
  categories: ICategory[];
  createdAt: Date;
}
