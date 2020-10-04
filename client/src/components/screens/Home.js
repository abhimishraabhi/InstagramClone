import React from 'react'


const Home=()=>{

    return(
        <div className="home">

            <div className="card home-card">
                <h5>Abhishek</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>


            <div className="card home-card">
                <h5>Abhishek</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1542328689-df6c076c1604?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>

                    <h6>title</h6>
                    <p>this is amazing</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>


            <div className="card home-card">
                <h5>Abhishek</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>

                    <h6>title</h6>
                    <p>this is amazing</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>

        </div>
    )
}

export default Home;