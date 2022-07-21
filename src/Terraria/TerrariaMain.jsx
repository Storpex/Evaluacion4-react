import { Login } from '../Intranet/Login';
import { Header, Inicio, Galeria, Requisitos, Contacto, Footer } from '../Terraria';


export const TerrariaMain = ( { ruta } ) => {

  const direccionar = () => {
    if( ruta === '/' ) return <Inicio />;
    if( ruta === '/requisitos' ) return <Requisitos />;
    if( ruta === '/galeria' ) return <Galeria />;
    if( ruta === '/contacto' ) return <Contacto />;
    if( ruta === '/login' ) return <Login />;
  }


  return (
    <>
      <Header />
      {
        direccionar()
      }
      <Footer />
    </>
  )
}
