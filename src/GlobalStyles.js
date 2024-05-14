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

`;
