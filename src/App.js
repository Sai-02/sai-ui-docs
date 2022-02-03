import { Skeleton } from "sai-ui";
function App() {
  return (
    <div className="">
      <Skeleton variant={"text"} />
      <Skeleton
        variant={"rectangle"}
        customStyles={{
          width: "10rem",
          height: "10rem",
        }}
      />
    </div>
  );
}

export default App;
