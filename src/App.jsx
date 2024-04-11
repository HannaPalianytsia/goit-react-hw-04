// import { useState, useEffect, useMemo, useRef } from "react";
// import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/imageModal/ImageModal";
import "./App.css";

const App = () => {
  const handleSubmit = (inputValue) => {
    console.log(inputValue);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ErrorMessage />
      <ImageGallery />
      <Loader />
      <LoadMoreBtn />
      <ImageModal />
    </>
  );
};

export default App;
