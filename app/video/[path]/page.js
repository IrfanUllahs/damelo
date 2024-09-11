"use client";
import React from "react";

function page() {
  return (
    <div className="flex justify-center pt-5">
      <video width="800" height="500" controls>
        <source
          src="https://st3v.idealista.com/36/1b/d6/hd_1241347812.mp4"
          type="video/mp4"
        />
        Error Message
      </video>
      {/* <Video source="https://www.youtube.com/watch?v=0S-pyTJ2ZvU&pp=ygUOZm9ybWlrIHJlYWN0anM%3D" /> */}
    </div>
  );
}

export default page;
