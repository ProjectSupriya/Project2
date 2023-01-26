import React from 'react';
 import ReactDOM from 'react-dom';
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

//console.log(Sdata[0]);

//const Flname = "supriya patil";
//const currDate = new Date().toLocaleDateString();
//const currTime = new Date ().toLocaleTimeString();
//const img1 = "https://picsum.photos/200/300";
//const img2 = "https://picsum.photos/200/300";
//const img3 = "https://picsum.photos/200/300";
//const img4 = "https://picsum.photos/200/300";
//const links = "https://www.google.com/";

//const heading = {
 // color:'brown',
 // textAlign: 'center',
 // textTransform: 'capitalize',
 // fontWeight: '100',
 // textShadow: '0px 2px 4px firebrick',
 // margin: '50px 0'
//}


//ReactDOM.render(
 // <>
 // <h1 style = {heading}> my name is {Flname} </h1>
 
//<div className = "img_div">
//<img src = {img1} alt = "randomImages" />
//<img src = {img2} alt = "randomImages" />
//<img src = {img3} alt = "randomImages" />
//<a href = {links} target = "_blanks">
//<img src = {img4} alt = "randomImages" />
//</a>
//</div>
//</>,
//document.getElementById("root"));

/*let currDate = new Date(2022, 5, 5, 14);
currDate = currDate.getHours();
let greeting = " ";
const cssStyle = { };

if( currDate >= 1 && currDate <= 12){
  greeting = " Good Morning";
  cssStyle.color = "Green";
}else if( currDate>=12 && currDate<=19){
  greeting = " Good Afternoon";
  cssStyle.color = "Orange";
}else{
  greeting = " Good Night";
  cssStyle.color = "Black";
}


ReactDOM.render(
  <> 
   <div>
  <h1> Hello sir,<span style = { cssStyle }>{greeting} </span> </h1>,
</div>
  </>,

document.getElementById('root'));*/

//Fat array function
const favSeries = "netflix";

const FavS = () => {
  if( favSeries === "netflix"){
  return(
    <Card
    key={Sdata[1].id}
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].link}
    />
  );
} else{
  return(
    <Card
    key={Sdata[3].id}
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].link}
    />
  );
}
};
 function ncard(val){
   console.log(val);
   return(
     <Card
     key={val.id}
     imgsrc={val.imgsrc}
     title={val.title}
     sname={val.sname}
     link={val.link}
     />
   );
 }

  ReactDOM.render (
    <>

    <h1 className="heading_style">List of Top 5 Series in 2022</h1>
      {/* <Card
      imgsrc = {Sdata[0].imgsrc}
      title =  {Sdata[0].title}
      sname = {Sdata[0].sname}
      link = {Sdata[0].link}
      />

      <Card
     imgsrc = {Sdata[1].imgsrc}
      title =  {Sdata[1].title}
      sname = {Sdata[1].sname}
      link = {Sdata[1].link}
      />

      <Card
      imgsrc = {Sdata[2].imgsrc}
      title =  {Sdata[2].title}
      sname = {Sdata[2].sname}
      link = {Sdata[2].link}
      />

<Card
      imgsrc = {Sdata[3].imgsrc}
      title =  {Sdata[3].title}
      sname = {Sdata[3].sname}
      link = {Sdata[3].link}
      />

<Card
      imgsrc = {Sdata[4].imgsrc}
      title =  {Sdata[4].title}
      sname = {Sdata[4].sname}
      link = {Sdata[4].link}
      />
    </>,  */}

    {/* map function */}
     {Sdata.map(ncard)}            
     </>,
    document.getElementById("root")
);

