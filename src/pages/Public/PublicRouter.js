import React from "react";
import { Routes, Route } from "react-router-dom";

// import Home from '@/pages/Public/Home';
// import Contact from '@/pages/Public/Contact';
// import Service from '@/pages/Public/Service';
// import Layout from '@/pages/Public/Layout';
import Error from "@/_utils/Error";

import { Home, Layout, Service, Contact } from "@/pages/Public";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PublicRouter;
