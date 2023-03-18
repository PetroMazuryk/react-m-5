import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  //читаємо по імені параметра якщо нічого не має то записуємо пустий рядок
  const dogId = searchParams.get('dogId') ?? '';

  //записуємо залежно від якогось значення
  const updateQueryString = evt => {
    const dogIdValue = evt.target.value;
    if (dogIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue });
  };

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));
  console.log(location);
  return (
    <div>
      <input
        type="text"
        value={dogId}
        // onChange={evt => setSearchParams({ dogId: evt.target.value })}
        onChange={updateQueryString}
      />
      {/* <button onClick={() => setSearchParams({ c: 'Hello' })}>Chance SP</button> */}
      <button onClick={() => setDogs(dogs)}></button>
      <ul>
        {visibleDogs.map(dog => {
          return (
            <li key={dog}>
              <Link
                style={{ marginRight: '20px', border: '1px solid' }}
                to={`${dog}`}
                state={{ from: location }}
              >
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
