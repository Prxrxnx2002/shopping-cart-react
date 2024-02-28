import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
gap: 10px;
border: 1px solid #ccc;
border-radius: 10px;
padding: 10px;
margin-bottom: 10px;

img{
  width: 50px;
  object-fit: cover;
  border-radius: 10px;
}

.content-container{
  flex: 1;

  .details{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 10px;
  }
}
`;