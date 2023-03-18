const { useParams } = require('react-router-dom');

const SubBreeds = () => {
  const { dogId } = useParams();
  return <div>SubBreeds: {dogId}</div>;
};
export default SubBreeds;
