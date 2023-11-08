import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/about-us";
import UserTheme from "./components/theme/user-theme";
import MovieDetail from "./components/pages/detail";
import News from "./components/pages/news";
import Contact from "./components/pages/contact";
import MovieManagement from "./components/pages/movie-management";
import UserProfile from "./components/pages/user-profile";
import UserLogin from "./components/pages/user-login";
import AdminTheme from "./components/theme/admin-theme";
import MovieDetailManagement from "./components/pages/movie-detail";
import PublicTheme from "./components/theme/public-theme";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<UserTheme />}>
          <Route index element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/detail/:id" element={<MovieDetail />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/logout" element={<MovieManagement />}></Route>
        </Route>
        <Route element={<AdminTheme />}>
          <Route path="/movie-management" element={<MovieManagement />}></Route>
          <Route
            path="/movie-detail/:id"
            element={<MovieDetailManagement />}
          ></Route>
          <Route path="/admin-movies" element={<Home />}></Route>
          <Route path="/admin-about-us" element={<AboutUs />}></Route>
          <Route path="/admin-news" element={<News />}></Route>
          <Route path="/admin-contact" element={<Contact />}></Route>
          <Route
            path="/admin-profile"
            element={<UserProfile user={user} setUser={setUser} />}
          ></Route>
        </Route>
        <Route element={<PublicTheme />}>
          <Route
            path="/login"
            element={<UserLogin user={user} setUser={setUser} />}
          ></Route>
        </Route>
      </Route>
    )
  );
  return (
    <GoogleOAuthProvider clientId="846740195255-nlc580mutk8pj53pcrlh1psisksqgsjp.apps.googleusercontent.com">
      <RouterProvider router={router}></RouterProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
