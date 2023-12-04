import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="task row">
                  <div className="taskBg">
                    <div className={task.status ? "done" : ""}>
                      <span className="taskNumber">{index + 1}.</span>
                      <span className="taskText">{task.title}</span>
                      {/* <span>{task.completedOn}</span> */}
                    </div>
                  </div>
                  <div className="iconsWrap ">
                    <div className="icon">
                      <span title="Completed / Not Completed" onClick={() => markDone(task.id, !task.status)}> 
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      {task.status ? null : (
                        <span
                          className="Edit"
                          title="Edit"
                          onClick={() =>
                            setUpdateData({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            })
                          }
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}
                      <span className="Delete" title="Delete" onClick={() => deleteTask(task.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>
                    {task.completedOn && task.status && (
                      <div className="done">
                        <span className="time">Pada: {task.completedOn}</span>
                      </div>
                    )}
                  </div>
                </div>
                <br />
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDo;
