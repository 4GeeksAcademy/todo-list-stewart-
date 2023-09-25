import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [todos, setTodos] = useState([
    "walk the dogs",
    "fold laundry",
    "wash dishes",
  ]);
  const [userInput, setUserInput] = useState("");

  const addTodos = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, userInput]);
      // spread operator
      // without : [["walk the dogs", "fold laundry", "wash dishes"], new todo]
      // with ["walk the dogs", "fold laundry", "wash dishes", new todo]
      setUserInput("");
    }
  };
//   so i stands for the index of the li that should be deleted
// index stands for each index of the todos array
// i is being recievd by this function 
  const removeTodos = (i) => {
	const newArray = todos.filter((todo, index) => index !== i)
	setTodos(newArray)
  };

  return (
    <div className="text-center todoList">
      <input
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        onKeyDown={(e) => addTodos(e)}
		className="my-2"
      />
      <ul className="w-25 mx-auto">
        {/* todos.length ? todos.map() : null */}
        {todos?.map((todo, index) => (
          <li 
		 className="mx-3" 
		  key={index}>
            {todo} 
            <span>
			<i 
			className="fa-solid fa fa-trash fa-bounce mx-4"
			onClick={() => removeTodos(index)}
			></i>
			</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;