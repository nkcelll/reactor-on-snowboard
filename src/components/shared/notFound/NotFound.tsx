import './notfound.css';
import { useParams } from 'react-router-dom';



export default function NotFound() {
  const {id } = useParams();
  
  console.log(id);
  
  return (
    <div className="not-found">
      {id &&<h1>{id?.charAt(0).toUpperCase() + id.slice(1)} - Not Found</h1>}
      {!id && <h1>Page Not Found</h1>}
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}