import "./styles.css";
import { useState } from "react";

const recommendationList = {
  Action: [
    {
      name: "Vagabond",
      rating: "3.5/5"
    },
    {
      name: "Vincenzo",
      rating: "4.5/5"
    },
    {
      name: "City Hunter",
      rating: "4.5/5"
    },
    {
      name: "My Name",
      rating: "4/5"
    }
  ],
  Romance: [
    {
      name: "True Beauty",
      rating: "4.5/5"
    },
    {
      name: "TwentyFive-TwentyOne",
      rating: "5/5"
    },
    {
      name: "Start-up",
      rating: "3.5/5"
    },
    {
      name: "Crash landing on you",
      rating: "5/5"
    }
  ],
  Historical: [
    {
      name: "Mr.Sunshine",
      rating: "4/5"
    },
    {
      name: "The Crowned Clown",
      rating: "3.5/5"
    },
    {
      name: "My Country-New Age",
      rating: "4.5/5"
    },
    {
      name: "Rookie Historian Goo Hae-Ryung",
      rating: "4/5"
    }
  ],
  Comedy: [
    {
      name: "The Fiery Priest",
      rating: "3.5/5"
    },
    {
      name: "Strong Woman Do Bong Soon",
      rating: "4/5"
    },
    {
      name: "My Only Love Song",
      rating: "4.5/5"
    },
    {
      name: "Welcome to Waikiki",
      rating: "5/5"
    }
  ]
};

export default function App() {
  var genre = Object.keys(recommendationList);
  console.log(genre);
  const [dramaList, setDramaList] = useState("Action");
  function onClickHandler(kdrama) {
    setDramaList(kdrama);
  }
  return (
    <div className="App">
      <div className="header">
        <h1> My K-drama List</h1>
        <div>
          {" "}
          Do you love watching k-dramas? Here is my recommendation list{" "}
        </div>
      </div>
      {/* <ul className="list">{
         genre.map(function(kdrama){
           return(
             <li key={kdrama} className="list-item">
               <button onClick={() => onClickHandler(kdrama)}>
                 {kdrama}</button>
                 console.log(kdrama)
              </li>
           )
         })
       }    
       </ul> */}
      <div className="section">
        {genre.map((kdrama) => (
          <button className="btn" onClick={() => onClickHandler(kdrama)}>
            {kdrama}
          </button>
        ))}
      </div>
      <div className="container">
        <ul className="list">
          {recommendationList[dramaList].map((drama) => (
            <li className="list-item" key={drama.name}>
              <div className="list-name ">{drama.name}</div>
              <div className="list-rating">{drama.rating}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer">
        <h3>About</h3>
        <p>
          K-dramas have a multitude of different genres such as action,
          historical, school dramas, medical dramas, legal dramas or even horror
          comedies. K-dramas have attracted international attention for their
          fashion, style and culture.
        </p>
      </div>
    </div>
  );
}
