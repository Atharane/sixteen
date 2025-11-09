"use client";

import { useState, ViewTransition } from "react";

const Sandbox = () => {
  // const [visibility, toggle] = useReducer((v) => {
  //   let updated = !v;

  //   document.startViewTransition(() => {
  //     updated = !v;
  //     console.log("☄️ ✦ page.tsx 11 ✦ Sandbox ✦ updated:", updated);
  //   });

  //   console.log("☄️ ✦ page.tsx 14 ✦ Sandbox ✦ return updated:", updated);
  //   return updated;
  // }, false);

  const [visibility, visibilitySetter] = useState(false);

  const toggle = () => {
    document.startViewTransition(() => {
      visibilitySetter(!visibility);
    });
  };

  return (
    <ViewTransition>
      <div className="flex flex-col min-h-screen items-center justify-center w-full">
        {visibility ? (
          <button
            style={{
              viewTransitionName: "card",
            }}
            type="button"
            onClick={toggle}
            className="border cursor-pointer border-amber-500 border-dashed m-6 w-fit rounded-md px-4 py-2 font-mono"
          >
            ☄️ : webpage centered
          </button>
        ) : (
          <button
            style={{
              viewTransitionName: "card",
            }}
            type="button"
            onClick={toggle}
            className="cursor-pointer bg-emerald-100/50 text-white m-6 w-fit rounded-md px-6 py-4 font-mono absolute bottom-0 left-0"
          >
            ☘️ : webpage bottom left
          </button>
        )}
      </div>
    </ViewTransition>
  );
};

export default Sandbox;
