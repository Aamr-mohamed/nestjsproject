import React from "react";

export default function Button(props) {
  return (
    <button className="bg-[#0F6CBD] px-8 py-1 rounded-lg text-white font-bold">
	  {props.name}
    </button>
  );
}
