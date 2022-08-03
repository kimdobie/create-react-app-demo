import React from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import DinoListItem from "./DinoListItem";

const headerText = "Dino List";

const dinoList = [
  { name: "Tyrannosaurus Rex", type: "carnivore" },
  { name: "Stegosaurus", type: "herbivore" },
  { name: "Triceratops", type: "herbivore" },
  { name: "Allosaurus", type: "carnivore" },
];

const Dinos = () => {
  // const [dinos, setDinos] = React.useState(dinoList);
  const [dinos, setDinos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [sortAscending, setSortAscending] = React.useState();

  React.useEffect(() => {
    setLoading(true);
    // axios.get("http://localhost:3001/dinosFull?delay=2000").then((res) => {
    //   setDinos(res.data);
    //   setLoading(false);
    // });

    axios.get("http://localhost:3000/dinosFull.json").then((res) => {
      setTimeout(() => {
        setDinos(res.data);
        setLoading(false);
      }, 2000);
    });
  }, []);

  const SortButton = () => ( <button
          onClick={() => {
            let sortedDinos = [...dinos];
            if (sortAscending === undefined) {
              sortedDinos = sortedDinos.sort((a, b) =>
                a.name > b.name ? 1 : -1
              );
            } else {
              sortedDinos = sortedDinos.reverse();
            }
            setSortAscending(!sortAscending);
            setDinos(sortedDinos);
          }}
        >
          Sort
        </button>)

  return (
    <div>
      <h3>{headerText}</h3>
        <ClipLoader  loading={loading}  size={50} />
      <ul>
        {/* <li> {dinoList[0].name}</li> */}
        {dinos.map((dino) => (
          //   <li>{dino.name}</li>
          <DinoListItem name={dino.name} type={dino.type} />
        ))}
      </ul>
      <p>
        
       <SortButton />
      </p>
    </div>
  );
};

export default Dinos;
