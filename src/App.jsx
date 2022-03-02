import React from "react";
import './App.css'
import Home from './components/home/Home.jsx';
import data from './data/data.json';
import { Routes, Route, Link } from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails';

export default function App() {
    return (
        <div>
           <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/city/:id" element={<TourDetails data={data} />} />
      </Routes>
        </div>
    )
}