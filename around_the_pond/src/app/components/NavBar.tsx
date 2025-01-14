import '../styles/globals.css';

export default function NavBar() {

    return (
            <nav> 
                <div id="navbar" className="container-fluid "> 
                    <div className='row'>
                        <div className='col-4'>
                            <img id="menu" src='menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png' alt='menu icon'/>  
                        </div>
                        <div className='col-6'>
                            <h1 className='float-start'>Life Around The Pond</h1>
                            <img id="logo" src='tadpole.png' alt="frog holding onto a stick with reeds" />
                        </div>
                    </div>
                </div>
            </nav>
    )
}