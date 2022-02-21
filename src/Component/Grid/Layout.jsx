import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ChartA, ChartB, ChartC, ChartD, ChartE } from "./Chart/Chart";

const charts = {
  a: ChartA,
  b: ChartB,
  c: ChartE,
  d: ChartE,
  e: ChartE
};

const narrowContianer = {
  height: "100px",
  backgroundColor: "#E2E2E0"
};

const fullHeightContainer = {
  height: "200px",
  backgroundColor: "#E2E2F2"
};

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 0;

const dataSource = {
  list01: [
    {
      id: "bu01",
      content: "One"
    },
    {
      id: "bu02",
      content: "Two"
    },
    {
      id: "bu03",
      content: "Three"
    }
  ],
  list02: [
    {
      id: "bu04",
      content: "Four"
    }
  ]
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = (isDraggingOver, itemsLength) => ({
  background: isDraggingOver ? "lightblue" : "lightGray",
  display: "flex",
  flexWrap: "wrap",
  padding: grid,
  width: "500px"
});

const initMap = {
  list01: ["a", "b", "c", "d"],
  list02: ["e"]
};

function Layout(props) {
  // const {} = props
  const [data, setData] = useState(initMap);

  const handleDragStart = () => {
    console.log("Drag Started");
  };

  const handleDragEnd = (drops) => {
    console.log("Drag end", drops);
    const { source, destination } = drops;
    if (!destination) {
      return false;
    }
    const { droppableId: sourceListId, index: sourceIndex } = source;
    const {
      droppableId: destinationListId,
      index: destinationIndex
    } = destination;

    if (sourceListId === destinationListId) {
      if (sourceIndex !== destinationIndex) {
        // Move item in same list
        const updatedList = [...data[sourceListId]];
        // Remove item
        const [draggedItem] = updatedList.splice(sourceIndex, 1);
        // Insert item
        updatedList.splice(destinationIndex, 0, draggedItem);

        setData((prevState) => ({
          ...prevState,
          [destinationListId]: updatedList
        }));
      }
    } else {
      // Move item across the list
      const updatedSourceList = [...data[sourceListId]];
      const [draggedItem] = updatedSourceList.splice(sourceIndex, 1);
      const updatedDestinationList = [...data[destinationListId]];
      updatedDestinationList.splice(destinationIndex, 0, draggedItem);

      setData((prevState) => ({
        ...prevState,
        [sourceListId]: updatedSourceList,
        [destinationListId]: updatedDestinationList
      }));
    }
  };

  const { list01, list02 } = data;
  console.log({ list01, list02 });

  return (
    <Box style={{ width: "100vh", margin: "0 auto" }}>
      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Droppable droppableId="list01" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver, list01.length)}
              {...provided.droppableProps}
            >
              {list01.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided, snapshot) => {
                    // console.log({ charts, item });
                    const ChartComponent = charts[item];
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <ChartComponent id={item} label={item} />
                      </div>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <hr />
        <Droppable droppableId="list02" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver, list02.length)}
              {...provided.droppableProps}
            >
              {list02.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided, snapshot) => {
                    // console.log({ charts, item });

                    const ChartComponent = charts[item];
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <ChartComponent id={item} label={item} />
                      </div>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
}

export default Layout;
