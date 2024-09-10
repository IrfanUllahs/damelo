"use client";
import React from "react";
import ReactPlayer from "react-player/lazy";

function page() {
  return (
    <div className="flex items-center justify-center pt-5">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=zumJJUL_ruM&pp=ygUNNGsgaG9tZSB2aWRlbw%3D%3D"
        height={550}
      />
    </div>
  );
}

export default page;
