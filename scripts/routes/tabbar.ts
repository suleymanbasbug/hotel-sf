import { BottomTabBarRouter, NativeStackRouter, Route, NativeRouter } from '@smartface/router';
import Color from '@smartface/native/ui/color';
import * as Pages from 'pages';
import Image from '@smartface/native/ui/image';

function hotelDetailRouter (basePath:string){
    return NativeStackRouter.of({
        path: `${basePath}/hotelDetail`,
        to: `${basePath}/hotelDetail/main`,
        modal: true,
        routes: [
            Route.of<Pages.PgHotelDetail>({
                path:`${basePath}/hotelDetail/main`,
                build(router,route){
                    const page = new Pages.PgHotelDetail(router,route);
                    router.setState({view:page})
                    return page;
                }
            })
        ]
    })
}

const bottomTabBarRouter = BottomTabBarRouter.of({
  path: '/btb',
  to: '/btb/tab1/pgHome',
  homeRoute: 0,
  tabbarParams: () => ({
    ios: { translucent: true },
    itemColor: {
      normal: Color.GRAY,
      selected: Color.RED
    },
    backgroundColor: Color.WHITE
  }),
  items: [
    {
      title: 'Explore',
      icon: Image.createFromFile('images://explore.png')
    },
    {
      title: 'Wishlist',
      icon: Image.createFromFile('images://wishlist.png')
    },
    {
      title: 'Profile',
      icon: Image.createFromFile('images://profile.png')
    }
  ],
  // tab1
  routes: [
    // tab1
    NativeStackRouter.of({
      path: '/btb/tab1',
      to: '/btb/tab1/pgHome',
      routes: [
        Route.of<Pages.pgHome>({
          path: `/btb/tab1/pgHome`,
          build(router, route) {
            return new Pages.pgHome(router, route);
          },
          headerBarParams: () => ({
            visible: true
          }),
          
        }),
        hotelDetailRouter('/btb/tab1'),

        Route.of<Pages.PgViewAll>({
            path: '/btb/tab1/viewAll',
            build(router,route){
                const page = new Pages.PgViewAll(router,route)
                router.setState({view:page})
                return page;
            },
            headerBarParams: () => ({
                visible:true
            })
        })
      ]
    }),
    NativeStackRouter.of({
      path: '/btb/tab2',
      to: '/btb/tab2/pgWishlist',
      routes: [
        Route.of<Pages.PgWishlist>({
          path: `/btb/tab2/pgWishlist`,
          build(router, route) {
            return new Pages.PgWishlist(router, route);
          },
          headerBarParams: () => ({
            visible: true
          })
        }),
        hotelDetailRouter('/btb/tab2')
      ]
    }),
    NativeStackRouter.of({
      path: '/btb/tab3',
      to: '/btb/tab3/pgAccount',
      routes: [
        Route.of<Pages.PgAccount>({
          path: `/btb/tab3/pgAccount`,
          build(router, route) {
            return new Pages.PgAccount(router, route);
          },
          headerBarParams: () => ({
            visible: true
          })
        })
      ]
    })
  ]
});

export default bottomTabBarRouter;