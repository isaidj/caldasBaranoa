import React from "react";
import { createContext } from "react";
const AdminDashboardContext = createContext();
export const AdminDashboardProvider = ({ children }) => {
  const [update, setUpdate] = React.useState(false);
  const data = {
    update,
    setUpdate,
  };
  return (
    <AdminDashboardContext.Provider value={data}>
      {children}
    </AdminDashboardContext.Provider>
  );
};
export default AdminDashboardContext;
