import Navbar from "./Project2/Components/Navbar";
import Main from "./Project2/Components/Main";
import Data from "./Project2/Components/Data";
import Card from "./Project2/Components/Card";
import "./Project2/project2.css";
export default function App(){
  const cards = Data.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
})        
  return ( 
    <div className="container">
      <Navbar/>
      <Main/>
      <section className="card-list">
        {cards}
      </section>
    </div>
  );
} 
