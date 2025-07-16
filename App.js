//creating h1 tag
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React! "
// );

//nested structure of react element
/**  creating
 * <div>
 *      <div>
 *           <h1></h1>
 *      </div>
 * </div>
 *
 */
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement(
//       "h1",
//       { id: "heading" },
//       "Hello World from nested heading! "
//     )
//   )
// );

//nested structure of react element
/**  creating
 * <div>
 *      <div>
 *           <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [React.createElement("h1", {  }, "I am h1 tag from React! "),
//     React.createElement("h2", {  }, "I am h2 tag from React! ")]
//   )
// );

/**  creating
 * <div>
 *      <div>
 *           <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div>
 *           <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */
const heading = React.createElement(
  "div",
  { id: "parent" },[React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {  }, "I am h1 tag from React! "),
    React.createElement("h2", {  }, "I am h2 tag from React! ")]
  ),React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {  }, "I am h1 tag from React! "),
    React.createElement("h2", {  }, "I am h2 tag from React! ")]
  )]
  
);

//creating root in react
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering the h1 tag in root
root.render(heading);
