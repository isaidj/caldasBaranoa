import useAuth from "../../auth/useAuth";
import { GetAdmin } from "./GetAdmin";
import { GetUser } from "./GetUser";
import { Insert } from "./Insert";
import { InsertAdmin } from "./InsertAdmin";
import { InsertUser } from "./InsertUser";

export const Crud = () => {
  const auth = useAuth();
  const user = auth.getUser();
  if (user.nombre === "admin") {
    return (
      <div className="inicioCrud">
        <InsertAdmin />

        <GetAdmin />
      </div>
    );
  } else
    return (
      <div className="inicioCrud">
        <InsertUser />

        <GetUser />
      </div>
    );
};
