import React, { createContext, Component } from 'react';

export const MapContext = createContext();

class MapContextProvider extends Component {
  state = { 
    isLoaded: false
  }
  render() { 
    return ( 
      <MapContext.Provider value={{...this.state}}>
        { this.props.children }
      </MapContext.Provider>
    );
  }
}
 
export default MapContextProvider;