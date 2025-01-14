import Pond from "./components/Pond";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {

  return (
    
    <div className="container">
      <div className="row">
        <div className="col">
            <Pond />
        </div>
        <div className="col bg-midnight">

        </div>
      </div>
    </div>
  );
}
