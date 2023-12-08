import MenuPage from "../components/templates/menuPage"

function Menu({data}) {
  return (
    <div>
      <MenuPage data={data} />
    </div>
  )
}

export default Menu



export async function getStaticProps(){
    const Response = await fetch("http://localhost:4000/data");
    const data = await Response.json();

    return {
        props : {
            data
        } , 

        revalidate : 10 ,  
    }
}