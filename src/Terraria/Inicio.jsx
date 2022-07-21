
export const Inicio = () => {
  return (
    <section className="home-main">
      <div className="container" >
        <div className="main-container row row-cols-2 ">
          <div className="main-container__text col align-self-center">
            <h1>¿QUE ES TERRARIA?</h1>
            <p>
              Terraria es un videojuego de acción, aventura y de sandbox
               producido de forma independiente por el estudio Re-Logic.
                Tiene características tales como la exploración, la artesanía,
                 la construcción de estructuras y el combate.
            </p>
          </div>
          <iframe className="col align-self-center" width="560" height="315" src="https://www.youtube.com/embed/H77Zfzy4LWw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}
