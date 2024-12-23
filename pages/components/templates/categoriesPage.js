import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../modules/Card";
import styles from "./CategoriesPage.module.css";

function Categories({ data = [] }) {
  const router = useRouter();
  const [query, setQuery] = useState({
    difficulity: "",
    time: "",
  });

  // Handle changes in the select dropdown
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  // Handle search button click
  const clickHandler = () => {
    router.push({ pathname: "/categories", query: query });
  };

  // Update query parameters on page load based on URL query
  useEffect(() => {
    const { difficulity, time } = router.query;
    if (query.difficulity !== difficulity || query.time !== time) {
      setQuery({ difficulity, time });
    }
  }, [router.query]);

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        {/* Difficulty Dropdown */}
        <div className={styles.select}>
          <select
            onChange={changeHandler}
            value={query.difficulity}
            name="difficulity"
          >
            <option value="difficulity">Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Cooking Time Dropdown */}
        <div className={styles.select}>
          <select onChange={changeHandler} value={query.time} name="time">
            <option value="time">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>

          {/* Search Button */}
          <button onClick={clickHandler}>Search</button>
        </div>
      </div>

      {/* Render the Cards if data exists */}
      <div className={styles.cardsContainer}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => <Card key={item.id} {...item} />)
        ) : (
          <p>No categories available</p> // Display when data is empty or not available
        )}
      </div>

      {/* Display a placeholder image if data is empty */}
      {!data.length ? (
        <img src="/images/search.png" alt="search image" />
      ) : null}
    </div>
  );
}

export default Categories;
