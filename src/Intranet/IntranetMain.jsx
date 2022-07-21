import { Header, WeaponList, WeaponForm } from "./";

export const IntranetMain = ( {ruta} ) => {
  const direccionar = () => {
    if( ruta === '/intranet' ) return <WeaponList />;
    if( ruta === '/agregar' ) return <WeaponForm />;
    if( ruta === '/modificar/:id' ) return <WeaponForm />;
  }

  return (
    <>
      <Header />
      <main className="home-main">
        {
          direccionar()
        }
      </main>
    </>
  )
}
