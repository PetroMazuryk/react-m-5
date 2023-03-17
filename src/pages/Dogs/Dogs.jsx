import { Link } from 'react-router-dom';

const Dogs = () => {
  return (
    <div>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => {
        return (
          <Link
            style={{ marginRight: '20px', border: '1px solid' }}
            key={dog}
            to={`${dog}`}
          >
            {dog}
          </Link>
        );
      })}
    </div>
  );
};

export default Dogs;
