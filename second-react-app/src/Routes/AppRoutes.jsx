import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage";
import DashboardPage from "../Pages/DashboardPages";
import AboutPage from "../Pages/AboutPage";
import PageNotFound from "../Pages/PageNotFound";
import PostsPage, { PostList, Post } from "../Pages/PostsPage";
import { DashboardMessages, DashboardTasks } from "../Pages/DashboardPages";


function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />
      {/* nested routes, matches on /dash/messages etc */}
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="/about" element={<AboutPage {...props} />} />
      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id
         */}
        <Route path=":id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
