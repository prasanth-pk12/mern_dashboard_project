import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { logo, KeyStone } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="KeyStone" width="28px" />
        ) : (
          <img src={KeyStone} alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};
