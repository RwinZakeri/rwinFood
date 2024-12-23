import Categories from "../components/templates/categoriesPage";
function CategoriesPage({ data }) {
  return (
    <>
      <Categories data={data} />
    </>
  );
}

export default CategoriesPage;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch("https://my-api-fawn.vercel.app/data");
  const json = await res.json();

  const filteredData = json.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );
    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });
  return {
    props: {
      data: filteredData,
    },
  };
}
