import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import Dogs from 'pages/Dogs/Dogs';
import DogDetails from 'pages/DogDetails/DogDetails';
import Home from 'pages/Home/Home';
import { Gallery } from 'components/Gallery/Gallery';
import { SubBreeds } from 'components/SubBreeds/SubBreeds';

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
