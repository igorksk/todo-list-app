import '.././App.css';

function UserCard({ id, onRemove }) {
  return (
    <div className="card">
      <p>task {id}</p>
      <button onClick={() => onRemove(id)}>
        removecard
      </button>
    </div>
  );
}

export default UserCard;