import React from "react";
import Ticket2 from "./Ticket2";


const Phase2 = ({ group, tickets, selectedOpt, user }) => {
  // console.log(group);
  function getUserName(group) {
    for (let item of user) {
      if (group === item["id"]) return item;
    }
  }
  console.log(group);
  function getPriorityLabel(priority) {
    switch (priority) {
      case "4":
        return "Urgent";
      case "3":
        return "High";
      case "2":
        return "Medium";
      case "1":
        return "Low";
      case "0":
        return "No priority";
      default:
        return "Unknown priority";
    }
  }
  return (
    <>
      <div class="flex items-center flex-shrink-0 h-10">
        <span class="block text-sm font-semibold">
          {selectedOpt === "user"
            ? getUserName(group).name
            : selectedOpt === "priority"
            ? getPriorityLabel(group)
            : group}
        </span>
        <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
          6
        </span>
        <button class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
          <svg
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </div>

      <div class="flex flex-col pb-2 overflow-auto">
        {tickets.map((ticket) => (
          <Ticket2
            key={ticket.id}
            ticket={ticket}
            selectedOpt={selectedOpt}
            user={user}
          />
        ))}
      </div>
    </>
  );
};

export default Phase2;
