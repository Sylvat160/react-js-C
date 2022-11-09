import React from "react";
import { Routes, Route } from "react-router-dom";

import { ALayout, Dashboard } from "@/pages/Admin";
import { User, UserAdd, UserEdit } from "@/pages/Admin/User";
import { Cocktail, CocktailEdit } from "@/pages/Admin/Cocktail";
import Error from "@/_utils/Error";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<ALayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user">
          <Route index element={<User />} />
          <Route path="add" element={<UserAdd />} />
          <Route path="edit" element={<UserEdit />} />
        </Route>
        <Route path="cocktail">
          <Route index element={<Cocktail />} />
          <Route path="add" element={<CocktailEdit />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
