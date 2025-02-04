import React, { useEffect, useState } from "react";
import MetaTag from "../../components/MetaTag/MetaTag";
import Sidebar from "./Sidebar";
import "./admin.css";
import CustomLoader from "../../components/CustomLoader/index";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <MetaTag title="Панель администратора" />
          <div className="admin__dashboard">
            <Sidebar />

            <div className="admin__dashboard--details">
              <h2 className="heading-primary">Приветствую тебя, Шеф 👋</h2>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminDashboard;
