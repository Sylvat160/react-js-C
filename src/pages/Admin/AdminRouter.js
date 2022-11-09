import React from 'react';
import { Routes, Route } from "react-router-dom";
 
import {ALayout , Dashboard} from '@/pages/Admin';
import Error from "@/_utils/Error";


const AdminRouter = () => {
    return (
      <Routes>
        <Route element={<ALayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    );
};

export default AdminRouter;