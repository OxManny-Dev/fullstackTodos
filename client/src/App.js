import { Counter } from './Counter';
import CounterProvider from "./utils/CounterProvider";

const App = () => {
  return (
    <div>
     <CounterProvider>
       <Counter/>
     </CounterProvider>
    </div>
  );
};

// Letting other files such as index.js use it
// module.exports = App;
export default App;