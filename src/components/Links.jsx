import React from "react";
import {Link} from "@nextui-org/react";

import {AnchorIcon} from "./AnchorIcon";



const Links = () => {
  return (
    <Link
      isExternal
      showAnchorIcon
      href="https://buildmastershub-form.vercel.app/"
      anchorIcon={<AnchorIcon />}
    >
      Apply Here
    </Link>
  )
}

export default Links