import React, { useState, useEffect } from 'react'

export const Home = () => {

    const [metaData, setMetaData] = useState(null);

    // Realizar una solicitud al servidor para obtener el token
  useEffect(() => {

    const obtenerDatos = async () => {

      try {

        const response = await fetch(`https://pruebas-mvc.somee.com/api/Person`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',

          },
        })

        if (response.status === 200) {

          const data = await response.json();
          setMetaData(data);
          console.log('va bien');

        } else {

          console.error('Error al obtener la meta Data:', response.statusText);

        }
      } catch (error) {

        console.log(error);

      }
    }

    obtenerDatos()


  }, []);//Argumento vacio para que se ejecute una vez al ejecutar el componente

  return (
    <>
    <div>{ metaData ? JSON.stringify(metaData) : 'Cargando...' } hola</div>
    <div>Hola</div>
    </>
    
  )
}
