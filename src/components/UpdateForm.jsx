const UpdateForm = ({ updateData, keyDownUpdate, changeTask, updateTask, cancelUpdate }) => {
  return (
    <>
      {/* Update Task */}
      <div className="update">
        <input value={updateData && updateData.title} onChange={(e) => changeTask(e)} onKeyDown={keyDownUpdate} className="update-form" />
        <div className="button">
          <button onClick={updateTask} className="update-btn">
            Update
          </button>
          <br />
          <button onClick={cancelUpdate} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
      {/* <br /> */}
    </>
  );
};

export default UpdateForm;
