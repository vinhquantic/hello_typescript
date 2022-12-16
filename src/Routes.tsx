import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Search } from "./pages/Search";
import { UserDetails } from "./pages/UserDetails";
import { Layout } from "./pages/Layout";

export const Routes = () => (
    <ReactRouterRoutes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Search />} />
            <Route path="/view/:uid" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </ReactRouterRoutes>
);