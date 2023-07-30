import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import './App.css';
import Spinner from './components/spinnerLoader';
const MovieListPage = lazy(() => import("./pages/movieListPage"));
const MovieDetailPage = lazy(() => import("./pages/movieDetailPage"));
const MyMovieListPage = lazy(() => import("./pages/myMovieListPage"));

function App() {
  return (
    <>
    <Navbar />
    <Suspense fallback={<Spinner />}>
    <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movieDetailPage" element={<MovieDetailPage />} />
        <Route path="/myMovieListPage" element={<MyMovieListPage />} />
    </Routes>
    </Suspense>
    </>
  );
}

export default App;
