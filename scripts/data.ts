import { HomeShowcases, Banner, AccountMenuItem, User } from "./types";

const data: HomeShowcases[] = [
    {
        title: "Top Hotels", id: 0, hotels: [
            {
                id:0,
                name: "Sheraton Grand", price: "5999",
                imageUrl: "https://i.hizliresim.com/mlzz41n.png", isSaved: true,
                hotelInfo: "4 star hotel • 96%", priceType: "per night",
                images:[]
            },
            {
                id:1,
                name: "Taj Vista", price: "6999", 
                imageUrl: "https://i.hizliresim.com/91bufc0.png", isSaved: false,
                hotelInfo: "4 star hotel • 90%", priceType: "per night",
                images:[]

            },
            {
                id:2,
                name: "Sarovar Portico", price: "4999",
                imageUrl: "https://i.hizliresim.com/asv35xx.png", isSaved: true,
                hotelInfo: "4 star hotel • 90%", priceType: "per night",
                images:[]

            }],

    },

    {
        title: "Top Deals", id: 1, hotels: [
            {
                id:3,
                name: "Lotus Park", price: "2999", imageUrl: "https://i.hizliresim.com/4g5rynb.png",
                isSaved: true, hotelInfo: "4 star hotel • 96%", priceType: "per night",
                images:[]

            },
            {
                id:4,
                name: "Goldfinch Hotel", price: "1999", imageUrl: "https://i.hizliresim.com/o78me8z.png",
                isSaved: false, hotelInfo: "4 star hotel • 96%", priceType: "per night",
                images:[]

            },
            {
                id:5,
                name: "Park Plaza", price: "1899", imageUrl: "https://i.hizliresim.com/ip7sjlz.png",
                isSaved: false, hotelInfo: "4 star hotel • 96%", priceType: "per night",
                images:[]

            }]
    }

]

export const banner: Banner = {
    iconUrl: "https://i.hizliresim.com/b7wip05.png",
    info: "We have deals for your favorite and relaxing stay.",
}

export const accountMenuItems: AccountMenuItem[] = [
    {icon: 'cog', title:'Settings'},
    {icon:'bell', title:'Notifications'},
    {icon:'heart', title:'Wishlist'},
    {icon:'credit-card', title:'Payment Methods'},
    {icon:'user', title:'Account'},
    {icon:'question', title:'Help'},
    {icon:'info', title:'About'}
]

export const user: User = {
    name:'SBasbug',
    email:'suleyman.basbug@smartface.io',
    imgUrl:'https://cdn.iconscout.com/icon/free/png-256/profile-417-1163876.png'
}

export default data;

