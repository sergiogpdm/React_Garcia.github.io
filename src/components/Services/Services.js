import React, { forwardRef } from 'react';
import './Services.css';

const Services = forwardRef((props, ref) => {
  return (
    <>
      <div className="services-header">
        <h2>¿Qué servicios ofrecemos?</h2>
      </div>
      <div ref={ref} style={{ height: '70px', marginTop: '-70px' }}></div>
      <div ref={ref} className="services-container">
        <div className="service">
          <i className="icon-business-support" />
          <h3>Business Support</h3>
          <p>Asesoramiento integral a empresas: fiscal, contable, laboral y outsourcing</p>
        </div>

        <div className="service">
          <i className="icon-administrative-law" />
          <h3>Derecho Administrativo</h3>
          <p>Asesoramiento en procedimientos administrativos</p>
        </div>

        <div className="service">
          <i className="icon-insurance-law" />
          <h3>Derecho de Seguros</h3>
          <p>Asesoramiento integral a compañías aseguradoras y de reaseguros</p>
        </div>

        <div className="service">
          <i className="icon-labor-law" />
          <h3>Derecho Laboral</h3>
          <p>Defensa de los derechos de los trabajadores y de las empresas</p>
        </div>

        <div className="service">
          <i className="icon-criminal-law" />
          <h3>Derecho Penal</h3>
          <p>Representación legal en casos criminales y defensa ante acusaciones penales</p>
        </div>

        <div className="service see-all">
          <p>Ver todos los servicios</p>
        </div>
      </div>
    </>
  );
});

export default Services;