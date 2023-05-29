import reactionIcon from "../assets/images/icon-reaction.svg";
import memoryIcon from "../assets/images/icon-memory.svg";
import verbalIcon from "../assets/images/icon-verbal.svg";
import visualIcon from "../assets/images/icon-visual.svg";

import "./App.css";

function App() {
  return (
    <container className="container min-w-[375px] max-w-[1440px] h-full sm:flex justify-center sm:items-center drop-shadow-2xl">
      <div className="min-w-[375px] max-w-[1440px] flex flex-col sm:flex-row sm:bg-white sm:rounded-r-xl sm:rounded-l-[35px]">
        <div className="mx-auto w-full h-96 sm:w-96 sm:h-[400px] flex sm:rounded-[40px] flex-col items-center bg-gradient-to-t from-violet-800/90 to-blue-500 max-[639px]:rounded-b-[35px] p-5">
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
        <div className="flex flex-col items-center space-y-5 w-full h-96 sm:w-96 sm:h-[400px] ">
          <h6 className="mt-5 flex font-medium">Summary</h6>
          <div className="flex justify-between items-center bg-red-100/75 w-80 h-11 rounded-lg p-2">
            <img src={reactionIcon} className="mr-1 ml-0.5" />
            <p className="h-5 text-red-500 mr-40">Reaction</p>
            <p className="h-5 text-black font-semibold">80</p>
            <p className="h-5 text-black/30">/100</p>
          </div>
          <div className="flex justify-between items-center bg-yellow-100/75 w-80 h-11 rounded-lg p-2">
            <img src={memoryIcon} className="mr-1 ml-0.5" />
            <p className="h-5 text-yellow-500 mr-40">Memory</p>
            <p className="h-5 text-black font-semibold">92</p>
            <p className="h-5 text-black/30">/100</p>
          </div>
          <div className="flex justify-between items-center bg-green-100/75 w-80 h-11 rounded-lg p-2">
            <img src={verbalIcon} className="mr-1 ml-0.5" />
            <p className="h-5 text-green-600 mr-40">Verbal</p>
            <p className="h-5 text-black font-semibold">61</p>
            <p className="h-5 text-black/30">/100</p>
          </div>
          <div className="flex justify-between items-center bg-blue-100/75 w-80 h-11 rounded-lg p-2">
            <img src={visualIcon} className="mr-1 ml-0.5" />
            <p className="h-5 text-blue-800 mr-40">Visual</p>
            <p className="h-5 text-black font-semibold">72</p>
            <p className="h-5 text-black/30">/100</p>
          </div>
          <div className="flex justify-center items-center bg-blue-950/90 hover:bg-gradient-to-t from-violet-800/90 to-blue-500 w-80 h-12 rounded-full justify-self-center">
            <button className="w-40 flex justify-center text-white">
              Continue
            </button>
          </div>
        </div>
      </div>
    </container>
  );
}

export default App;
