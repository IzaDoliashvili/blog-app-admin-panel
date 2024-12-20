import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/default";
import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";
import { ADMIN_PATHS } from "./admin/index.enum";
import AdminLayout from "../layout/admin-layout";
import { ADMIN_ROUTES } from "./admin";

const queryClient = new QueryClient();

export const AppRoutes = () => {
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
          <Route path={ADMIN_PATHS.ADMIN} element={<AdminLayout />}>
             {ADMIN_ROUTES}

          </Route>
   
 </Routes>
</Router>

</QueryClientProvider>
    )

}

