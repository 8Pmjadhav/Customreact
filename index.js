
function customRender(element,root){
    const reactElement = document.createElement(element.type);
    reactElement.innerHTML = element.children;
    console.log(element.props);
    for (const prop in element.props) {
        if (prop == 'children') continue;
        console.log(prop);
        reactElement.setAttribute(prop,element.props[prop]);
    }
    root.appendChild(reactElement);
}

const newReactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'<h1>Google</h1>'
}

const root = document.querySelector('#root');

customRender(newReactElement,root)