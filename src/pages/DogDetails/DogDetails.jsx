import { Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const DogDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();
  //     useEffect(() => {
  //     //http запит
  // },[])
  console.log(location);
  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      {/* <Link to="/dogs">Назад до сторінки колекції</Link> */}
      <Link to={backLinkLocationRef.current}>Назад до сторінки колекції</Link>
      <ul>
        <li>
          <Link to="subbreeds">Підпороди</Link>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default DogDetails;
