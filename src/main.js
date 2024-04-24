const Main = () => {
    return (
      <main>
        <div className="d-flex justify-content-end">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://cdn.pixabay.com/photo/2017/07/02/09/03/books-2463779_1280.jpg" className="d-block w-100 h-auto py-5" alt="Slide1" />
              </div>
              <div className="carousel-item">
                <img src="https://media.istockphoto.com/id/831651876/es/foto/estanter%C3%ADa-en-biblioteca-p%C3%BAblica.jpg?s=1024x1024&w=is&k=20&c=KfMsj0Gsit1S_qtJ3azdbnxIS-C4e0QWq-PFc7la1pc=" className="d-block w-100 h-auto py-5" alt="Slide2" />
              </div>
              <div className="carousel-item">
                <img src="https://media.istockphoto.com/id/1358761240/es/foto/libros-en-el-estante.jpg?s=2048x2048&w=is&k=20&c=3J0JK_am5NamiWLp6SeBTHUtOQQTUGeHDIXxk_hKKOw=" className="d-block w-100 h-auto py-5" alt="Slide3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </main>
    );
  }
  
  export default Main;
  