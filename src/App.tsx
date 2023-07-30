import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import './App.css';
import Spinner from './components/spinnerLoader';
import ThemeToggleButton from './components/themeButton';
import { ThemeContextProvider } from './context/provider';
const MovieListPage = lazy(() => import("./pages/movieListPage"));
const MovieDetailPage = lazy(() => import("./pages/movieDetailPage"));
const MyMovieListPage = lazy(() => import("./pages/myMovieListPage"));
const AboutPage = lazy(() => import("./pages/aboutPage"));


function App() {
  return (
    <>
    <Navbar />
    <Suspense fallback={<Spinner />}>
    <ThemeContextProvider>
    <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movieDetailPage" element={<MovieDetailPage />} />
        <Route path="/myMovieListPage" element={<MyMovieListPage />} />
        <Route path="/about" element={<AboutPage />} />
    </Routes>
    <ThemeToggleButton />
    </ThemeContextProvider>
    </Suspense>
    </>
  );
}

export default App;
