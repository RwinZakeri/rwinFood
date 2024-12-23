import DatailPage from "../components/templates/DetailsPage";

function Details({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DatailPage {...data} />
    </div>
  );
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch("https://my-api-fawn.vercel.app/data");
  const json = await res.json();

  const showsData = json.slice(0, 10);
  const paths = showsData.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: true, // true to enable SSR fallback (or 'blocking' if you want to wait until data is available)
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://my-api-fawn.vercel.app/data/${context.params.id}`
  );
  const data = await res.json();

  if (!data || !data.id) {
    console.log("Data not found for ID:", context.params.id);
    return {
      notFound: true,
    };
  }

  // Ensure the necessary fields exist and provide default values
  const { details = [], ingredients = [], recipe = [] } = data;

  return {
    props: {
      data: {
        ...data,
        details,
        ingredients,
        recipe,
      },
    },
    notFound: false,
  };
}
