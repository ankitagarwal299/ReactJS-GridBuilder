import React from "react";
import "./styles.css";

const schemaData = {
  type: "grid",
  gridSize: {
    width: 3,
    height: 5
  },
  backgroundColor: "#000000",
  children: [
    {
      type: "block",
      color: "#0000FF",
      position: {
        x: 0,
        y: 0
      },
      size: {
        width: 2,
        height: 1
      }
    },
    {
      type: "block",
      color: "#FF0000",
      position: {
        x: 2,
        y: 4
      },
      size: {
        width: 1,
        height: 1
      }
    }
  ]
};

function App() {
  return <Grid schema={schemaData}></Grid>;
}

export default App;

const description = `Should display a black screen with a blue block in the top left corner that is 2/3 the screen width and 1/5 the screen height and a 
  red block in the bottom right corner that is 1/3 the screen width and 1/5 the screen height.`;

function Grid({ schema }) {
  return (
    <Parent schema={schema}>
      {/* {schema.children.map((child, index) => {
        return <Children child={child} key={index}></Children>;
      })} */}
    </Parent>
  );
}

function Parent({ schema }) {
  return (
    <div
      style={{
        display: schema.type,
        backgroundColor: schema.backgroundColor,
        gridTemplateRows: `repeat(${schema.gridSize.height}, 1fr)`,
        gridTemplateColumns: `repeat(${schema.gridSize.width}, 1fr)`,

        width: "100vw",
        height: "100vh"
      }}
    >
      {schema.children.map((child, index) => {
        return <Children child={child} key={index}></Children>;
      })}
    </div>
  );
}

function Children({ child }) {
  let childrenStyle = { ...child };
  return (
    <>
      <div
        style={{
          display: childrenStyle.type,
          backgroundColor: childrenStyle.color,
          gridRowStart: `${childrenStyle.position.y + 1}`,
          gridRowEnd: `${
            childrenStyle.position.y + 1 + childrenStyle.size.height
          }`,

          gridColumnStart: `${childrenStyle.position.x + 1}`,
          gridColumnEnd: `${
            childrenStyle.position.x + 1 + childrenStyle.size.width
          }`
        }}
      ></div>
    </>
  );
}
