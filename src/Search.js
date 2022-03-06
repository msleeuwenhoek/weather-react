import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search row">
      <input
        type="search"
        placeholder="Search for your city"
        autoFocus="on"
        autoComplete="off"
        className="col-6 "
      />
      <button type="submit" className="col-2 btn btn-primary btn-large">
        Search
      </button>
      <button type="button" className="col-2 btn btn-primary btn-large">
        Use location
      </button>
      <button type="submit" className="col-2 btn btn-primary btn-small">
        o
      </button>
      <button type="button" className="col-2 btn btn-primary btn-small">
        o
      </button>
    </form>
  );
}
