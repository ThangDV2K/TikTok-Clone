import Header from "~/components/Layouts/Components/Header/header";


function HeaderOnly({children}) {
    return ( 
        <div>
            <header>
                <Header/>
            </header>
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default HeaderOnly;