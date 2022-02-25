import logoBabel from './../img/babeljs.png';
import logoWebpack from './../img/webpack.png';
import logoTs from './../img/ts.png';
import logoSass from './../img/sass.png';

import "./../scss/style.scss";

(function(divApp:HTMLDivElement){
    
    function main(){
        divApp.innerHTML = `
            <div class="container-imgs">
                <img src="${logoBabel}" alt="logo-babel">
                <img src="${logoWebpack}" alt="logo-webpack">
                <img src="${logoTs}" alt="logo-typescript">
                <img src="${logoSass}" alt="logo-sass">
            </div>
            <h1>App Loaded Successfully</h1>
            <p>&copy;By EricksoVaz 2022</p>
        `;
    }

    window.addEventListener("load",main);


})(document.querySelector("#app")!);