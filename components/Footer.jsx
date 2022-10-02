import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='mt-4 bg-grayFooter text-white'>
        {/* Diseño mobile */}
        <div className='block md:hidden '>
          <div className='pt-4 ml-4'>
            <ol>
              <li className='my-4'>Soporte al cliente</li>
              <li className='my-4'>Servicios Liverpool</li>
              <li className='my-6'>Acerca de Liverpool</li>
            </ol>
          </div>
          <div className='flex flex-row w-full'>
            <button className='border-2 border-gray-400 mx-4 w-full mb-6'>
              Suscribete a nuestro Newsletter
            </button>
          </div>
          <p className='text-center mb-2 text-sm'>Ventas por teléfono 555262-9999</p>
          <p className='text-center mb-2 text-sm'>Desde tu celular *7171</p>
          <p className='text-center mb-6 text-sm'>
            Contacto vía <span className='text-pinkLiverpool'>Whatsapp</span> o por Teléfono 5552629999
          </p>
          <div className='bg-gray-400 h-0.5 w-full'>
          </div>
          <p className='text-center mb-2 mt-6 text-sm'>Comentarios y sugerencias: atención@liverpool.com.mx</p>
          <p className='text-center pb-8 text-sm'>Terminos y condiciones</p>
        </div>
        {/* Diseño desktop */}
        <div className='hidden md:block'> 
          <div className='flex flex-row'>
            <div className='bg-grayFooter w-3/5 flex flex-row justify-between text-xs ml-8 mr-16'>
              <div className='pt-12'>
                <p className='text-base mb-2'>Soporte al cliente</p>
                <ol>
                  <li>Facturación</li>
                  <li>Ayuda</li>
                  <li>Mis Compras</li>
                  <li>Garantía Liverpool</li>
                </ol>
              </div>
              <div className='pt-12'>
              <p className='text-base mb-2'>Servicios Liverpool</p>
                <ol>
                  <li>Crédito</li>
                  <li>Tiempo aire</li>
                  <li>Concursos y promociones</li>
                  <li>Diseño de interiores</li>
                  <li>Ventas corporativas</li>
                </ol>
              </div>
              <div className='pt-12'>
              <p className='text-base mb-2'>Acerca de Liverpool</p>
                <ol>
                  <li>Bolsa de trabajo</li>
                  <li>¿Quiénes somos?</li>
                  <li>Relaciones con inversionistas</li>
                  <li>Sostenibilidad</li>
                </ol>
              </div>
            </div>
            <div className='bg-grayLiverpool w-2/5'>
              <div className='flex flex-row justify-start ml-14'>
                <button className='border-2 border-gray-400 w-3/4 mt-12'>
                  Suscribete a nuestro Newsletter
                </button>
              </div>
              <p className='text-xs ml-14 mt-4'>Ventas por teléfono 555262-9999</p>
              <p className='text-xs ml-14'>Desde tu celular *7171</p>
              <p className='text-xs ml-14'>
                Contacto vía <span className='text-pinkLiverpool'>Whatsapp</span> o por Teléfono 5552629999
              </p>
            </div>
          </div>
          <div className='bg-gray-400 h-0.5 w-full mt-16 mb-4'></div>
          <p className='text-xs text-center pb-2'>Terminos y condiciones  /  Aviso de privacidad  /  Mapa de sitio</p>
          <div className='text-xs text-center bg-grayFooterDark'>
            <p className='pt-2'>Las imagenes mostradas son para fines ilustrativos, las piezas se venden por separado</p>
            <p className='pt-1'>Las promociones pueden diferir de las publicaciones en tienda</p>
            <p className='pt-1 pb-4'>2022 Liverpool / Todos los derechos reservados D.R. ®</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
 