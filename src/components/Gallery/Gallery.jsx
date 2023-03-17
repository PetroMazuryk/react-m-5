const { useParams } = require('react-router-dom');

export const Gallery = () => {
  const { dogId } = useParams();
  //     useEffect(() => {
  //     //http запит
  // },[])
  return <div>Image Gallery: {dogId}</div>;
};
