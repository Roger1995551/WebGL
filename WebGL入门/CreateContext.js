createContext = function (id) {
    let canvas = document.getElementById(id);
    let gl = getWebGLContext(canvas)
    if(!gl){
        console.log('Failed to get the rendering context for WebGL');
        return;
    }
    return gl;
};