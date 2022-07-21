import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntranetMain } from './Intranet/IntranetMain';
import { TerrariaMain } from './Terraria';


export const Principal = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            exact
            path='/'
            element={ <TerrariaMain ruta='/' /> }
          />

          <Route
            exact
            path='/requisitos'
            element={ <TerrariaMain ruta='/requisitos' /> }
          />

          <Route
            exact
            path='/galeria'
            element={ <TerrariaMain ruta='/galeria' /> }
          />

          <Route
            exact
            path='/contacto'
            element={ <TerrariaMain ruta='/contacto' /> }
          />

          <Route
            exact
            path='/login'
            element={ <TerrariaMain ruta='/login' /> }
          />

          <Route
            exact
            path='/intranet'
            element={ <IntranetMain ruta='/intranet' /> }
          />

          <Route
            exact
            path='/agregar'
            element={ <IntranetMain ruta='/agregar' /> }
          />

          <Route
            exact
            path='/modificar/:id'
            element={ <IntranetMain ruta='/modificar/:id' /> }
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}
