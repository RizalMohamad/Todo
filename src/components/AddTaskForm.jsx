const AddTaskForm = ({ newTask, keyDownAdd, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Task */}
      <div className="add">
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={keyDownAdd} placeholder="Tambahkan tugasmu" className="add-form" />
        <button onClick={addTask} className="add-btn">
          Add
        </button>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
