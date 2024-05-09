import { Suspense, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BtnLink } from './DogDitails.styled';
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
      <BtnLink to={backLinkLocationRef.current}>
        Назад до сторінки колекції
      </BtnLink>
      <ul>
        <li>
          <BtnLink to="subbreeds">Підпороди</BtnLink>
          <BtnLink to="gallery">Галерея</BtnLink>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default DogDetails;
