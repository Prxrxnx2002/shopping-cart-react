import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
border: 1px solid #ccc;
border-radius: 10px;

button {
  border-radius: 10px;
}

img{
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

div{
  padding: 10px;
  heigth: 100%;
}

.btn-container{
  display: flex;
  width: 100%;
}
`;