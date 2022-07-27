import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import Calllogger from "./pages/Calllogger";
import Campaign from "./pages/Campaign";
import Dashboard from "./pages/Dashboard";
import Integration from "./pages/Integration";
import Strategy from "./pages/Strategy";
import Billing from "./pages/admin/Billing";
import Operation from "./pages/admin/Operation";
import Userlist from "./pages/admin/Userlist";
import Botmanager from "./pages/campaign/Botmanager";
import Campaignmanager from "./pages/campaign/Campaignmanager";

function routing(props) {
    return (
        <BrowserRouter>
                <Layout {...props}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} /> 
                        {/* login page will be here as the first element */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/calllogger" element={<Calllogger />} />
                        <Route path="/strategy" element={<Strategy />} />
                        <Route path="/connectorPage" element={<Integration />} />
                        <Route path="/campaign" element={<Campaign />}>
                        <Route path="campaignmanager" element={<Campaignmanager />} />
                        <Route path="botmanager" element={<Botmanager />} />
                        </Route>
                        <Route path="/admin" element={<Admin />}>
                        <Route path="operation" element={<Operation />} />
                        <Route path="billing" element={<Billing />} />
                        <Route path="userlist" element={<Userlist />} />
                        </Route>
                    </Routes>
                </Layout>
        </BrowserRouter>
    )
}

export default routing;