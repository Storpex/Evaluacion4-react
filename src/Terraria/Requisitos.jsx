import diaulo from '../assets/diaulo.gif';

export const Requisitos = () => {
  return (
    <section className="seccion4 d-flex justify-content-center align-items-center">
      <div className="seccion4-info">
        <h4>REQUISITOS DEL SISTEMA :</h4>
        <p>- SO: Windows XP / Vista / 7</p><br />
        <p>- Procesador: 1.6 GHz</p><br />
        <p>- Memoria: 512 MB de RAM</p><br />
        <p>- Disco Duro: 200 MB de espacio libre</p><br />
        <p>- Gráficos: Shader Model 1.1 con 128 MB de VRAM</p><br />
        <p>- DirectX®: 9.0c o posterior</p><br />
      </div>
      <img src={ diaulo } />
    </section>
  )
}
