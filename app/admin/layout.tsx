import React, { FC, PropsWithChildren } from "react";

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h1>Admin Header</h1>
      <section>{children}</section>
    </>
  );
};

export default AdminLayout;
