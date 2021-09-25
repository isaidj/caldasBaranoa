import { useState } from "react";
import useAuth from "../../auth/useAuth";
import { GetAdmin } from "./GetAdmin";

import styled from "styled-components";
import GetAllPubliUser from "./GetAllPubliUser";
import { InsertPubliUser } from "./InsertPubliUser";

export const Crud = () => {
  const auth = useAuth();
  const user = auth.getUser();
  const [update, setUpdate] = useState(false);
  if (user.nombre === "admin") {
    return (
      <div className="inicioCrud">
        <InsertPubliUser actualizar={() => setUpdate(!update)} />

        <GetAdmin actualizar={update} />
      </div>
    );
  } else
    return (
      <DivStyled className="inicioCrud">
        <InsertPubliUser />
        {/* <InsertPubliUser actualizar={() => setUpdate(!update)} /> */}

        <GetAllPubliUser actualizar={update} />
      </DivStyled>
    );
};
const desktopStartWidth = 902;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const DivStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 1rem;
  ${tablet} {
    grid-template-columns: 1fr;
  }
  ${mobile} {
    grid-template-columns: 1fr;
  }
`;
