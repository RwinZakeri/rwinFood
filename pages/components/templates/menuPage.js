function MenuPage({ data = [] }) {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => <Card key={item.id} {...item} />)
        ) : (
          <p>No menu items available</p>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
