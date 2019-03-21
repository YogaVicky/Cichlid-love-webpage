import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Fish = ({ img, name, size, children }) => {
  return (
    <article className="person">
      <img width = "100" src={img} alt="person" />
      <h3>{name}</h3>
      <h4>{size}</h4>
      {children}
    </article>
  );
};

const FishList = () => {
  return (
    <React.Fragment>
    <section className ="fish">
    <span>Cichlids Love </span>
    </section>
    <section className="person-list">
      <Fish img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Two_Tiger_Oscar.jpg/220px-Two_Tiger_Oscar.jpg" name="Oscar" size="8-14 cm" >
        <p>A focused lazy dude,nothing less than a pet dog</p>
        </Fish>
      <Fish img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/BloodParrot.jpg/220px-BloodParrot.jpg" name="Blood parrot" size="6-12 cm">
      <p>An Energizer,Schooler</p>
      </Fish>
      <Fish img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Labidochromis_sp_%22hongi%22.jpg/190px-Labidochromis_sp_%22hongi%22.jpg" name="Mbuna" size="5-9 cm" >
      <p>Superb social and colourful,the rock lovers</p>
      </Fish>
      <Fish img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Gallery_19_68_148247.jpg/220px-Gallery_19_68_148247.jpg" name="Flowerhorn" size="12-18 cm" >
      <p>Big,Bad,Better than his Dad,the Boss</p>
      </Fish>
      <Fish img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Andinoacara_rivulatus_in_Tropicarium-Oceanarium_Budapest_123.jpg/220px-Andinoacara_rivulatus_in_Tropicarium-Oceanarium_Budapest_123.jpg" name="Green Terror" size="8-14 cm" >
      <p>Fierce and powerful,The Innovator</p>
      </Fish>
      <Fish img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Symphysodon_aequifasciatus_%281%29_03May2010.JPG/220px-Symphysodon_aequifasciatus_%281%29_03May2010.JPG" name="Discus" size="6-10 cm" >
      <p>Calm and composed,The plant lovers</p>
      </Fish>
    </section>
    <section className ="fish1">
    <span>  ..Because a Cichlid is always special..</span>
    </section>
    </React.Fragment>
  );
};

ReactDOM.render(<FishList />, document.getElementById("root"));