import "./App.css";

function App() {
  return (
    <container className="container min-w-[372px] max-w-screen-xl grid grid-cols-1 sm:grid-cols-2">
      <div className="mx-auto w-full flex flex-col items-center bg-gradient-to-t from-indigo-700 to-blue-500 max-[639px]:rounded-b-[35px] p-3">
        <p className="text-white/50">Your result</p>
        <div className="flex justify-center flex-col w-36 h-36 mt-3 mb-5 bg-gradient-to-t from-indigo-600/10 to-blue-800 rounded-full">
          <h1 className="h-20 text-7xl text-white">76</h1>
          <p className="h-7 text-white">of 100</p>
        </div>
        <h6 className="text-white text-3xl">Great</h6>
        <p className="text-white/50 p-5 w-80">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="justify-self-center">
        <h6 >Summary</h6>
        <div className="flex space-x-40 justify-center a bg-red-200 w-80 h-11">
          <p>Reaction</p>
          <p>80/100</p>
        </div>
        <div>
          <p>Memory</p>
          <p>92/100</p>
        </div>
        <div>
          <p>Verbal</p>
          <p>61/100</p>
        </div>
        <div>
          <p>Visual</p>
          <p>72/100</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-40 flex justify-center">Continue</button>
      </div>
    </container>
  );
}

export default App;
