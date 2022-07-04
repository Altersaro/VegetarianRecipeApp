import styled from "styled-components";


export const DetailsPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
margin: 0 auto;
border-radius: 2rem;
box-shadow: 2px 2px 2px 2px #f57c7c;

@media(max-width:768px){
  width: 100%;
  margin: 0;
}


h1{
  border-radius: 2rem;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: #de4e4e;
}

.img-grid{
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  width: 80%;
}

.icon-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.img{
  border-radius:2rem;
  box-shadow: 2px 2px 2px 2px #f0f0f0;
  width: 100%;
  max-width: 500px;
  height: auto;
}

.icon{
  width: 60px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px #f0f0f0;

}

h2{
  color: #73d28f;
  margin-top: 10px;
}

p{
  font-weight: 400;
}

li{
  list-style-type:none;
  font-weight:500;
}

.ingredients-container{
 width: 80%;
 margin: 0 auto;
}


`