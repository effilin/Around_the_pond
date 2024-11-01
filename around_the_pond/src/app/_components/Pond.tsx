import '../styles/pond.css';
import FernOne from './animatedPlants/FernOne';


export default function Pond () {

    return (
        <div className="pondBox container" >
            <div className="row row-4">
                <div className="col col-4">
                  1
                </div>
                <div className="col col-4">
                  2
                </div>
                <div className="col col-4">
                  3
                </div>
            </div>
            <div className="row row-6">
                <div className="col">
                  <FernOne/>
                </div>
                <div className="col ">
                  5
                </div>
                <div className="col">
                  6
                </div>
            </div>
        </div>
    )
}