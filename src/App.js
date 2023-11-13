import {
  Route,
  RouterProvider,
  Routes,
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
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import { AuthProvider } from "./context/AuthProvider";
import RequireAuth from "./components/require-auth";
import PersistLogin from "./components/atoms/persist-login";
import Unauthorized from "./components/pages/errors/unauthorized";

function App() {
  const [user, setUser] = useState({});
  const router = createRoutesFromElements(
    <Route path="/">
      <Route element={<PublicTheme />}>
        <Route
          path="/login-google"
          element={<UserLogin user={user} setUser={setUser} />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/unauthorized" element={<Register />}></Route>
      </Route>
      {/* user pages that not require auth */}
      <Route element={<UserTheme />}>
        <Route index element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
      {/* user pages that require auth */}
      <Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
        <Route element={<UserTheme />}>
          <Route path="/detail/:id" element={<MovieDetail />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/logout" element={<MovieManagement />}></Route>
        </Route>
      </Route>

      {/* admin pages that require auth */}
      <Route element={<RequireAuth allowedRoles={"admin"} />}>
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
      </Route>
    </Route>
  );
  return (
    // <GoogleOAuthProvider clientId="846740195255-nlc580mutk8pj53pcrlh1psisksqgsjp.apps.googleusercontent.com">
    //   <RouterProvider router={router}></RouterProvider>
    // </GoogleOAuthProvider>

    <Routes>
      <Route path="/">
        <Route element={<PublicTheme />}>
          <Route
            path="login-google"
            element={<UserLogin user={user} setUser={setUser} />}
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="unauthorized" element={<Unauthorized />}></Route>
        </Route>
        {/* user pages that not require auth */}
        <Route element={<UserTheme />}>
          <Route index element={<Home />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="news" element={<News />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="detail/:id" element={<MovieDetail />}></Route>
        </Route>
        {/* user pages that require auth */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
            <Route element={<UserTheme />}>
              <Route path="profile" element={<UserProfile />}></Route>
            </Route>
          </Route>

          {/* admin pages that require auth */}
          <Route element={<RequireAuth allowedRoles={"admin"} />}>
            <Route element={<AdminTheme />}>
              <Route
                path="movie-management"
                element={<MovieManagement />}
              ></Route>
              <Route
                path="movie-detail/:id"
                element={<MovieDetailManagement />}
              ></Route>
              <Route path="admin-movies" element={<Home />}></Route>
              <Route path="admin-about-us" element={<AboutUs />}></Route>
              <Route path="admin-news" element={<News />}></Route>
              <Route path="admin-contact" element={<Contact />}></Route>
              <Route
                path="admin-profile"
                element={<UserProfile user={user} setUser={setUser} />}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
