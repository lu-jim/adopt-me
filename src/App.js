import { render } from 'react-dom';
import Pet from './Pet';


const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Calci" animal="Cat" breed="Surprise"></Pet>
      <Pet name="Ceniza" animal="Cat" breed="Surprise"></Pet>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
    </div>
  );
};

render(<App />, document.getElementById("root"));
