const Todo = ({ id, title, compeleted }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {title}
        </label>
      </div>
    </li>
  );
};

export default Todo;
