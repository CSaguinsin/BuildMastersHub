import React from "react";
import {Link} from "@nextui-org/react";
import {AnchorIcon} from "./AnchorIcon";



const Links = () => {
  return (
    <Link
    isBlock showAnchorIcon
    color="success"
      href="https://carlsaginsin.vercel.app/"
      target="_blank"
      anchorIcon={<AnchorIcon />}
    >
      Learn More about me!
    </Link>
  )
}

export default Links