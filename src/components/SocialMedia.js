import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { VscGithubInverted } from "react-icons/vsc";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <AiFillLinkedin />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <VscGithubInverted />
      </div>
    </div>
  );
};

export default SocialMedia;
