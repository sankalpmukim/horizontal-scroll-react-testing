import "./App.css";
import HorizontalScroll from "./HorizontalScroll";

function App() {
  return (
    <div>
      <div>Hello World</div>
      <div>
        <HorizontalScroll
          elements={[
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "red",
              }}
            >
              x
            </div>,
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "green",
              }}
            >
              x
            </div>,
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "yellow",
              }}
            >
              x
            </div>,
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "blue",
              }}
            >
              x
            </div>,
          ]}
        />
      </div>
      <div>Hello World</div>
    </div>
  );
}

export default App;
