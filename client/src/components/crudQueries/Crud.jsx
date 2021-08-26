import { useState } from "react";
import useAuth from "../../auth/useAuth";
import { GetAdmin } from "./GetAdmin";
import { GetUser } from "./GetUser";

import { InsertAdmin } from "./InsertAdmin";
import { InsertUser } from "./InsertUser";

export const Crud = () => {
  const auth = useAuth();
  const user = auth.getUser();
  const [update, setUpdate] = useState(false);
  if (user.nombre === "admin") {
    return (
      <div className="inicioCrud">
        <InsertAdmin actualizar={() => setUpdate(!update)} />

        <GetAdmin actualizar={update} />
      </div>
    );
  } else
    return (
      <div className="inicioCrud">
        <InsertUser actualizar={() => setUpdate(!update)} />

        <GetUser actualizar={update} />
      </div>
    );
};
