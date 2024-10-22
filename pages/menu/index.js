import MenuPage from "../components/templates/menuPage";

function Menu({ data }) {
  return (
    <div>
      <MenuPage data={data} />
    </div>
  );
}

export default Menu;

export async function getStaticProps() {
  const Response = await fetch("https://my-api-fawn.vercel.app/data");
  const data = await Response.json();

  return {
    props: {
      data,
    },

    revalidate: 10,
  };
}
