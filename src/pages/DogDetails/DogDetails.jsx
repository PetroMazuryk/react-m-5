import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const DogDetails = () => {
  const { dogId } = useParams();
  //     useEffect(() => {
  //     //http запит
  // },[])
  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Підпороди</Link>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default DogDetails;
