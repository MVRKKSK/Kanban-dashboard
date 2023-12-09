import React from "react";

const Ticket = ({ ticket , selectedOpt , user  }) => {
    // console.log(user)
    function getPriorityLabel(priority) {
        switch (priority) {
          case 4:
            return 'Urgent';
          case 3:
            return 'High';
          case 2:
            return 'Medium';
          case 1:
            return 'Low';
          case 0:
            return 'No priority';
          default:
            return 'Unknown priority';
        }
      }
    function getUserName(userid){
        for (let item of user){
            if(userid===item["id"])
            return item;
        }
    }
  return (
    <div className="phaseContent">
      <div className="task">
        {selectedOpt ==="status" ? <>
        <div className="taskCategory">{ticket.id}</div>
        <div className="taskHeader vcenter">
          <h5>{ticket.tag}</h5>
        </div>
        <div className="taskMeta vcenter">
          <div className={`badge ${ticket.status === 'In progress' ? 'badge-inProgress' : ticket.status === 'Backlog' ? 'badge-done' : 'badge-new'}`}>{getPriorityLabel(ticket.priority)} </div>
          <div className="badge sprint-bg-tur">{getUserName(ticket.userId).name}</div>
        </div>
        <p className="taskDescription">{ticket.title}</p>
        <div className="taskInfo vcenter">
          <div className="tabs vcenter">
            <div className="infoTab vcenter">
              <div className="infoTabHeader">PRIORITY</div>
              <div className="infoContent">
                <i className="fas fa-arrow-alt-circle-up high"></i> {getPriorityLabel(ticket.priority)}
              </div>
            </div>
          </div>
          <div className="expand">
            <i className="fas fa-caret-square-down"></i>
          </div>
        </div></> : selectedOpt==="priority" ? <><div className="taskCategory">{ticket.id}</div>
        <div className="taskHeader vcenter">
          <h5>{ticket.tag}</h5>
        </div>
        <div className="taskMeta vcenter">
          <div className={`badge ${ticket.status === 'In progress' ? 'badge-inProgress' : ticket.status === 'Backlog' ? 'badge-done' : 'badge-new'}`}>{ticket.status} </div>
          <div className="badge sprint-bg-tur">{getUserName(ticket.userId).name}</div>
        </div>
        <p className="taskDescription">{ticket.title}</p>
        <div className="taskInfo vcenter">
          <div className="tabs vcenter">
            <div className="infoTab vcenter">
              <div className="infoTabHeader">PRIORITY</div>
              <div className="infoContent">
                <i className="fas fa-arrow-alt-circle-up high"></i> {getPriorityLabel(ticket.priority)}
              </div>
            </div>
          </div>
          <div className="expand">
            <i className="fas fa-caret-square-down"></i>
          </div>
        </div></> : <>
        <div className="taskCategory">{ticket.id}</div>
        <div className="taskHeader vcenter">
          <h5>{ticket.tag}</h5>
        </div>
        <div className="taskMeta vcenter">
          <div className={`badge ${ticket.status === 'In progress' ? 'badge-inProgress' : ticket.status === 'Backlog' ? 'badge-done' : 'badge-new'}`}>{ticket.status} </div>
          <div className="badge sprint-bg-tur">{getUserName(ticket.userId).name}</div>
        </div>
        <p className="taskDescription">{ticket.title}</p>
        <div className="taskInfo vcenter">
          <div className="tabs vcenter">
            <div className="infoTab vcenter">
              <div className="infoTabHeader">PRIORITY</div>
              <div className="infoContent">
                <i className="fas fa-arrow-alt-circle-up high"></i> {getPriorityLabel(ticket.priority)}
              </div>
            </div>
          </div>
          <div className="expand">
            <i className="fas fa-caret-square-down"></i>
          </div>
        </div></>}
      </div>
    </div>
  );
};

export default Ticket;
