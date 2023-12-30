import './App.css';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';

function App() {
  const tasks = useQuery(api.tasks.get);
  return (
    <>
      <h1>Convex task test</h1>
      <div className="card">
        {tasks?.map(({ _id, text }) => (
          <div key={_id}>{text}</div>
        ))}
      </div>
    </>
  );
}

export default App;
