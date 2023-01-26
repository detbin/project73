import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './componenteB';


class ComponenteA extends Component {
        Nombre="";
        Apellido="";
        Email="";
        Conectado=false;

        constructor (props) {
            super(props);
        }
    render() {
        return (
            <div>
              <h1>{this.props.Nombre +' '+ this.props.Apellido}</h1>
                <h2>{this.props.Email}</h2>
                <h2>{this.props.Contacto}</h2>
                <ComponenteB props={this.props.Conectado}></ComponenteB>
            </div>
        );
    }
};


ComponenteA.propTypes = {
  conectados: PropTypes.bool,
    
};


export default ComponenteA;



