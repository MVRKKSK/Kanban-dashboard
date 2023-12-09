import React from "react";
import "./index.css";
const Dropdown = ({ selectedOption, handleOptionChange , prioritySort , handlePriorityChange , titleSort , handleTitleSort }) => {
  return (
    <div className="dropdown-container">
      <div className="">
        <label htmlFor="options">Select Option: </label>
        <select
          id="options"
          name="options"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="priority">Priority</option>
          <option value="status">Status</option>
          <option value="user">User</option>
        </select>
      </div>
      <div>
        <label  htmlFor="options">Sort By Title</label>
        <select
          id="options"
          name="options"
          className="title-label"
          value={prioritySort}
          onChange={handlePriorityChange}
        >
          <option value="high">Desc</option>
          <option value="low">Asc</option>
        </select>

        <label htmlFor="options">Sort By Priority</label>
        <select
          id="options"
          name="options"
          value={titleSort}
          onChange={handleTitleSort}
        >
          <option value="high">Desc</option>
          <option value="low">Asc</option>
        </select>
        
      </div>
    </div>
  );
};

export default Dropdown;
