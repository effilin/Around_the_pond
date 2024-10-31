
import Sky from "./_components/Sky";
import Pond from "./_components/Pond";

export default function Home() {
  return (
    
    <div className="skyBox container">
      <div className="row">
        <div className="col">
          <Sky>
            <Pond />
          </Sky>
        </div>
        <div className="col">

        </div>
      </div>
    </div>
  );
}
