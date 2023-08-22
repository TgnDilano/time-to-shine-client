import About from "../pages/about";
import ContactUs from "../pages/contact-us";
import Gallery from "../pages/gallery";
import Home from "../pages/home";

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
    component: <Gallery />,
  },
  aboutUs: {
    path: "/aboutUs",
    name: "A Propos",
    component: <About />,
  },
  contactUs: {
    path: "/contactUs",
    name: "Contactez-nous",
    component: <ContactUs />,
  },
};

export default appRoutes;
