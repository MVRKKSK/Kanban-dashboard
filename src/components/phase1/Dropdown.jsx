import React from "react";
import "./index.css";
const Dropdown = ({ selectedOption, handleOptionChange , prioritySort , handlePriorityChange , titleSort , handleTitleSort }) => {
  return (
    <div className="dropdown-container max-sm:flex-col">
      <div className="">
        <label htmlFor="options">Group By: </label>
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
        <label  htmlFor="options">Order By Title</label>
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

        <label htmlFor="options">Order By Priority</label>
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
