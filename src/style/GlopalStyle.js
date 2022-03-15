import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
 :root{
    --background-White:#FFFFFF;
    --primary-color: #F39200;
    --secound-color:#FFEEBF;
    --red-color:#EB5001;
    --text-color:#333333CC;
    --black-color: #333333;
    --border-color: #2e344e;
} 

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;

    
}
body{
    font-family: 'Aclonica', sans-serif;
    font-style: normal;
    height: 2000px;
}

body::-webkit-scrollbar{
    width: 9px;
    background-color: var(--secound-color);
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color:  var(--secound-color);
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}

`

export default GlopalStyle