import { render } from 'react-dom';
import SearchParams from './SearchParams';



const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};


{/* <Pet name="Calci" animal="Cat" breed="Surprise"></Pet>
      <Pet name="Ceniza" animal="Cat" breed="Surprise"></Pet>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet> */}
render(<App />, document.getElementById("root"));
