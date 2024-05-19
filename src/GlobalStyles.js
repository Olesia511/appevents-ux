import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  color: ${(p) => p.theme.color.black};
}

body.disable-scroll{
  overflow: hidden;

}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  padding: 0;
  border: none;
  
  background-color: transparent;
}

img {
  display: block;
  object-fit: cover;
}

.flex-style {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.loader-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  width: 80px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-color: #ccc #0000;
  animation: l16 1s infinite linear;
}
.loader::before,
.loader::after {    
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
}
.loader::before {
  border-color: #f03355 #0000;
  animation: inherit; 
  animation-duration: .5s;
  animation-direction: reverse;
}
.loader::after {
  margin: 8px;
}
@keyframes l16 { 
  100%{transform: rotate(1turn)}
}

`;
