import { AiOutlineSearch } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const notify = () =>
    toast("Sorry, the search bar is empty. Please try again!", {
      duration: 4000,
      style: {
        margin: "60px",
        background: "#2d3487",
        color: "#ffffff",
      },
    });
  return (
    <header className={styles.searchBar}>
      <form
        className={styles.searchForm}
        onSubmit={(event) => {
          event.preventDefault();
          const inputValue = event.target.elements.inputValue.value.trim();
          if (inputValue === "") {
            notify();
          } else {
            onSubmit(inputValue);
          }
        }}
      >
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="inputValue"
        />
        <button type="submit">
          <AiOutlineSearch size={30} />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
