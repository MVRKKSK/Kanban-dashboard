import React, { useState, useEffect } from "react";
import Dropdown from "../phase1/Dropdown";
import Phase2 from "./Phase2";

const Homepage2 = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [stateData, setStateData] = useState({});
  const [priorityData, setPriorityData] = useState({});
  const [userData, setUserData] = useState({});
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("seleOp") || "status"
  );
  const [prioritySort, setPrioritySort] = useState(
    localStorage.getItem("selePrio") || "low"
  );
  const [titleSort, setTitleSort] = useState(
    localStorage.getItem("seleTitl") || "low"
  );
  console.log(tickets);

  async function fetchData() {
    try {
      const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
      const response = await fetch(url);
      const response_data = await response.json();
      setTickets(response_data.tickets);
      setUsers(response_data.users);
      const newStateData = {};
      const newPriorityData = {};
      const newUserData = {};
      response_data.tickets.forEach((ticket) => {
        if (newStateData[ticket.status]) {
          newStateData[ticket.status].push(ticket);
        } else {
          newStateData[ticket.status] = [ticket];
        }
        if (newPriorityData[ticket.priority]) {
          newPriorityData[ticket.priority].push(ticket);
        } else {
          newPriorityData[ticket.priority] = [ticket];
        }

        if (newUserData[ticket.userId]) {
          newUserData[ticket.userId].push(ticket);
        } else {
          newUserData[ticket.userId] = [ticket];
        }
      });
      setStateData(newStateData);
      setPriorityData(newPriorityData);
      setUserData(newUserData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
    localStorage.setItem("seleOp", selectedOption);
    localStorage.setItem("selePrio", prioritySort);
    localStorage.setItem("seleTitl", titleSort);
  }, [selectedOption, prioritySort, titleSort]);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlePriorityChange = (event) => {
    setPrioritySort(event.target.value);
  };
  const handleTitleSort = (event) => {
    setTitleSort(event.target.value);
  };

  const renderTickets = () => {
    let dataToRender = [];
    switch (selectedOption) {
      case "priority":
        dataToRender = Object.entries(priorityData);
        break;
      case "status":
        dataToRender = Object.entries(stateData);
        break;
      case "user":
        dataToRender = Object.entries(userData);
        break;
      default:
        break;
    }
    if (prioritySort === "low") {
      const sortByTitle = (task1, task2) =>
        task1.title.localeCompare(task2.title);
      const sortedDataToRender = dataToRender.map(([section, tasks]) => {
        const sortedTasks = tasks.slice().sort(sortByTitle);
        return [section, sortedTasks];
      });
      dataToRender = sortedDataToRender;
    }
    if (prioritySort === "high") {
      const sortByTitle = (task1, task2) =>
        task2.title.localeCompare(task1.title);
      const sortedDataToRender = dataToRender.map(([section, tasks]) => {
        const sortedTasks = tasks.slice().sort(sortByTitle);
        return [section, sortedTasks];
      });
      dataToRender = sortedDataToRender;
    }
    if (titleSort === "low") {
      const sortByTitle = (task1, task2) => task1.priority > task2.priority;
      const sortedDataToRender = dataToRender.map(([section, tasks]) => {
        const sortedTasks = tasks.slice().sort(sortByTitle);
        return [section, sortedTasks];
      });
      dataToRender = sortedDataToRender;
    }
    if (titleSort === "high") {
      const sortByTitle = (task1, task2) => task2.priority > task1.priority;
      const sortedDataToRender = dataToRender.map(([section, tasks]) => {
        const sortedTasks = tasks.slice().sort(sortByTitle);
        return [section, sortedTasks];
      });
      dataToRender = sortedDataToRender;
    }

    return dataToRender.map(([group, tickets]) => (
      <div class="flex flex-col flex-shrink-0 w-72">
        <Phase2
          key={group}
          group={group}
          tickets={tickets}
          selectedOpt={selectedOption}
          user={users}
        />
      </div>
    ));
  };

  return (
    <>
      <Dropdown
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
        prioritySort={prioritySort}
        handlePriorityChange={handlePriorityChange}
        titleSort={titleSort}
        handleTitleSort={handleTitleSort}
      />
      <div class="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
        <div class="px-10 mt-6">
          <h1 class="text-2xl mb-6 font-bold">Tickets Dashboard</h1>
        </div>
        <div class="flex flex-grow max-md:flex-col max-md:justify-center max-md:items-center max-md:space-x-0 space-x-6 px-10 mt-4  overflow-auto min">
          {renderTickets()}
        </div>
      </div>
    </>
  );
};

export default Homepage2;
