import{Link}from"react-router"
function Navbar(){
    return(
        <>
        <div className="my-navbar pt-4 pb-4">
            <div className="container"></div>
            <div>
                <div>
                    <Link to='/' className="navbar-logo">'NAMANGALIKLAR24'</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar