import '../styles/globals.css';

export default function NavBar() {

    return (
            <nav id="navbar" className=" container-fluid text-center p-2 ">
                
                    <div className='row '>
                        <div className='col-1'>
                            <img id="logo" src='tadpole.png' alt="frog holding onto a stick with reeds" />
                        </div>
                        <div className='col-10'>
                            <h1>Life Around The Pond</h1>
                        </div>
                    </div>
                
            </nav>
    )
}