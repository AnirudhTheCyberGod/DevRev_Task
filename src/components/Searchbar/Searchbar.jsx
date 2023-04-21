import React, { useRef, useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./Searchbar.css";

const Searchbar = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();
  const [filterOption, setFilterOption] = useState("title");

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("The holy war"); //by default the search term searches for the book named "The holy war"
      setResultTitle("Please enter book name ..."); //here we can enter the book name we want to search for
    } else if (filterOption === "title") {
      setSearchTerm(searchText.current.value);
    } else {
      setSearchTerm(`${filterOption}:${searchText.current.value}`);
    }
  
    navigate("/book");
  };
  

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type="text" className='form-control' placeholder='Enter your search term' ref={searchText}  />
              <select value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="subject">Subject</option>
                <option value="publish_date">Publish-date</option>
              </select>
              <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-red' size={22} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Searchbar
