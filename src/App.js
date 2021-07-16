import React from "react";
//import PropTypes from "prop-types"
/*
const foodILike = [
    {
      id:1,
      name: "Kimchi",
      image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
      rating: 5.0
    },
    {
      id: 2,
      name: "bulgogi",
      image: "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM",
      rating: 4.5
    },
    {
      id: 3,
      name: "kimbap",
      image: "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM",
      rating: 4.2
    },
    {
      id: 4,
      name: "samgyetang",
      image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
      rating: 4.0
    }
]
/*
function renderFood(dish){
  console.log(dish);
  return <Food name={dish.name} picture={dish.image} />
}
*/
/*
function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


function App() {
  //{foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
  //{foodILike.map(renderFood)}
  return (
    <div> 
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
    </div>
  );
}
*/

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0
  }

  add = () => {
    console.log("add");
    this.setState(current=>({ count: current.count + 1 }));
  };
 
  minus = () => {
    console.log("minus")
    this.setState({ count: this.state.count -1 }); // bad code
  };
  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("component updated!");
  }

  render() {
    console.log("render")
    return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}
*/

class App extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 6000
    );
  }


  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading..." : "We are ready"}</div>
    )
  }
}

export default App;