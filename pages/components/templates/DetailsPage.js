import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./DetailsPage.module.css";

function DatailPage(props) {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details = [], // Default empty array
    ingredients = [], // Default empty array
    recipe = [], // Default empty array
  } = props;

  return (
    <div className={styles.container}>
      <h2>Details</h2>
      <div className={styles.subContainer}>
        <div className={styles.banner}>
          <img src={`/images/${id}.jpeg`} alt={name} />
          <div>
            <h3>{name}</h3>
            <span className={styles.location}>
              <Location />
              {details?.[0]?.Cuisine || "Cuisine information unavailable"}
            </span>
            <span className={styles.price}>
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            {discount && (
              <span className={styles.discount}>{discount}$ OFF</span>
            )}
          </div>
        </div>
        <div className={styles.introduction}>
          <p>{introduction}</p>
        </div>

        {/* Details Section */}
        <div className={styles.details}>
          <h4>Details</h4>
          {details.length > 0 ? (
            <ul>
              {details.map((detail, index) => (
                <li key={index}>
                  <p>{Object.keys(detail)[0]}: </p>
                  <span>{Object.values(detail)[0]}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No details available</p> // Fallback message if no details
          )}
        </div>

        {/* Ingredients Section */}
        <div className={styles.details}>
          <h4>Ingredients</h4>
          {ingredients.length > 0 ? (
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No ingredients available</p> // Fallback message if no ingredients
          )}
        </div>

        {/* Recipe Section */}
        <div className={styles.recipe}>
          <h4>Recipe</h4>
          {recipe.length > 0 ? (
            recipe.map((item, index) => (
              <div key={index} className={index % 2 ? styles.odd : styles.even}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))
          ) : (
            <p>No recipe available</p> // Fallback message if no recipe
          )}
        </div>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default DatailPage;
