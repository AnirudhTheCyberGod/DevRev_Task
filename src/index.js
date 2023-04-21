import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Contact from "./pages/Contact_us/Contact";
import BookList from "./components/BookList/BookList";
import BookInformation from "./components/BookInformation/BookInformation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path="Contact" element = {<Contact/>} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookInformation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

