import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col shadow-2xl px-2 py-4 m-2">
      <div className="flex col-span-2">
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="youtube-logo"
        />
      </div>

      <div className="col-span-8 text-center">
        <input
          type="text"
          className="rounded-l-full border w-1/2  border-black p-1"
        />
        <button className=" border border-gray-700 rounded-r-full px-5 py-1 bg-slate-100">
          🔍
        </button>
      </div>

      <div className="col-span-2">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
