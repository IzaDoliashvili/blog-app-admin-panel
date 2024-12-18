import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from "./pages/signIn/index";
import { SignUp } from "./pages/signUp/index";
import "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "./supabase";
// import AuthGuard from "@/components/route-guards/auth";
import { useSetAtom } from "jotai";
import { userAtom } from './store/auth';
import AdminLayout from './layout/admin-layout';
import UsersListView from './pages/admin/admin-page/users/views/list';
import UsersCreateView from './pages/admin/admin-page/users/views/create';
import UsersUpdateView from './pages/admin/admin-page/users/views/update';
import DashboardLayout from './layout/default';
import BlogsCreateView from './pages/blogs/blogs-page/blogs/views/create';
import BlogsUpdateView from './pages/blogs/blogs-page/blogs/views/update';
import BlogsListView from './pages/blogs/blogs-page/blogs/views/list';

const queryClient = new QueryClient();

export const App: React.FC = () => {

  const setUser = useSetAtom(userAtom);
 

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
              <Route path="auth">
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
              </Route>
   
   
          </Route>
          <Route path="admin-page" element={<AdminLayout />}>
              <Route path="admin" element={<UsersListView />} />
              <Route path="admin/create" element={<UsersCreateView />} />
              <Route path="admin/update/:id" element={<UsersUpdateView />} />
              <Route path="blog" element={<BlogsListView />} />
              <Route path="blog/create" element={<BlogsCreateView />} />
              <Route path="blog/update/:id" element={<BlogsUpdateView />} />

            </Route>
   
 </Routes>
</Router>

</QueryClientProvider>
  );
};

export default App;
