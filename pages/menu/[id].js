import DatailPage from "../components/templates/DetailsPage";

function Details({ data }) {
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
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://my-api-fawn.vercel.app/data/${context.params.id}`
  );

  const data = await res.json();

  if (!context.params.id) {
    return {
      notFound: true,
    };
  }

  if (!data.id) {
    console.log("not found");
  }

  return {
    props: {
      data,
    },

    notFound: false,
  };
}
