export type Hotel = {
    name: string;
    price: string;
    priceType:string;
    imageUrl: string;
    hotelInfo:string;
    isSaved:boolean;
    id:number;
    images:string[]
}

export type HomeShowcases = {
    id:number;
    title: string;
    hotels: Hotel[];
}

export type Banner = {
    iconUrl: string,
    info: string,
}

export type AccountMenuItem = {
    icon: string,
    title: string
}

export type User = {
    name:string;
    email:string;
    imgUrl:string;
}