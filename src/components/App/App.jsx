import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
// import Dogs from 'pages/Dogs/Dogs';
// import DogDetails from 'pages/DogDetails/DogDetails';
// import Home from 'pages/Home/Home';
// import { Gallery } from 'components/Gallery/Gallery';
// import { SubBreeds } from 'components/SubBreeds/SubBreeds';

const Home = lazy(() => import('pages/Home/Home'));
const Dogs = lazy(() => import('pages/Dogs/Dogs'));
const DogDetails = lazy(() => import('pages/DogDetails/DogDetails'));
const SubBreeds = lazy(() => import('components/SubBreeds/SubBreeds'));

//приклад без дефолтного експорту
const Gallery = lazy(() =>
  import('components/Gallery/Gallery').then(module => {
    console.log(module);
    return {
      ...module,
      default: module.Gallery,
    };
  })
);

export const App = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        height: '100vh',

        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />}>
            <Route path="subbreeds" element={<SubBreeds />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
