interface IArtist {
    id: number;
    name: string;
    sex: number;
    yearofbirth: number;
    country: ICountry
}
interface ICountry {
    id?: number;
    name: string;
}
interface IGenre {
    id?: number;
    name: string
}
interface ICategory {
    id?: number;
    name: string
}
interface INews {
    id: number;
    title: string;
    datecreated: number;
    headline: string;
    thumbnail: string;
    content: string;
    category: ICategory;
}
interface IAlbum {
    id: number;
    name: string;
    price: number;
    genre: IGenre;
    artist: IArtist;
    releasedate: number;
    cover: string
}
interface IRealEstate {
    id: number;
    name: string;
    price: string;
    description: string;
    location: string;
    area: string;
    type: string;
    cover: string
}
interface IUser {
    id: number;
    username: string;
    password: string;
    name: string;
    address: string;
    role: string;
    token: string;
}
interface IBook {
    id: number;
    name: string;
    price: number;
    author: string;
    releasedate: number;
    description: string;
    type: string
}
interface ILoginFormErrors {
    username: {
      required?: boolean;
    };
    password: {
      required?: boolean;
    };
}
export {
    IArtist,
    IAlbum,
    IGenre,
    ICountry,
    IUser,
    ILoginFormErrors,
    IBook,
    INews,
    IRealEstate
};