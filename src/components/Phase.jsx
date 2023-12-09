import React from "react";
import Ticket from "./Ticket";

const Phase = ({ group, tickets , selectedOpt, user }) => {
    // console.log(group);
    function getUserName(group){
        for (let item of user){
            if(group===item["id"])
            return item;
        }
    }
    console.log(group)
    function getPriorityLabel(priority) {
      switch (priority) {
        case "4":
          return 'Urgent';
        case "3":
          return 'High';
        case "2":
          return 'Medium';
        case "1":
          return 'Low';
        case "0":
          return 'No priority';
        default:
          return 'Unknown priority';
      }
    }
  return (
    <div className="phase">
      <div className="phaseHeader vcenter">
        <div className="title">{selectedOpt==="user"?getUserName(group).name :selectedOpt==="priority" ?getPriorityLabel(group) :  group}</div>
        <div className="phaseActions vcenter">
          <div className="phaseAction vcenter">
            <i className="fas fa-filter"></i>
            <i className="fas fa-sort-down"></i>
          </div>
          <div className="phaseAction vcenter">
            <i className="fas fa-sort-amount-down"></i>
            <i className="fas fa-sort-down"></i>
          </div>
        </div>
      </div>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} selectedOpt={selectedOpt} user={user} />
      ))}
    </div>
  );
};

export default Phase;
