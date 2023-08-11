"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../assets/icons/github-icon.svg";
import InfoIcon from "../assets/icons/info-circle-icon.svg";

export const Footer = () => {
  const [infoOpen, setInfoOpen] = useState<boolean>(false);

  return (
    <>
      {infoOpen ? <div className="text-center bg-slate-500 rounded-lg shadow-lg absolute bottom-[6dvh] right-[5dvw] p-3">
        <p>Text analyzer reads text input and returns stats based on the current text.</p>
        <p>Average reading time presumes reading speed of 180 words per minute.</p>
      </div> : <></>}
      <section className="flex justify-between bg-slate-800 h-[5dvh] absolute bottom-0 w-full">
        <h1 className="mx-[15dvw] my-auto text-sm">
          Created by Ville Pikaloff
        </h1>
        <div className="flex mx-[15dvw] my-auto">
          <Link href={"https://github.com/fremycode"}>
            <Image src={GithubIcon} alt="X" height={60} className="p-2" />
          </Link>
          <button onClick={() => setInfoOpen(!infoOpen)}>
            <Image src={InfoIcon} alt="Info" height={60} className="p-2" />
          </button>
        </div>
      </section>
    </>
  );
};
