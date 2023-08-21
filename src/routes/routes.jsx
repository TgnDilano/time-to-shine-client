import Home from "../pages/home"

const appRoutes = {
    home: {
        path: "/home",
        name: "Home",
        component: <Home />,
    },
    competition: {
        path: "/competition",
        name: "Competition",
        component: <div>Home</div>,
    },
    gallery: {
        path: "/gallery",
        name: "Gallery",
        component: <div>Home</div>,
    },
    aboutUs: {
        path: "/aboutUs",
        name: "About Us",
        component: <div>Home</div>,
    },
    contactUs: {
        path: "/contactUs",
        name: "Contact Us",
        component: <div>Home</div>,
    },
}

export default appRoutes