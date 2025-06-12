// src/PageNavigator.js

import { SiAutocad, SiSketchup,  SiCanva } from 'react-icons/si';
import { FaFigma, FaReact, FaHtml5, FaCss3Alt, FaJsSquare,  FaTools } from 'react-icons/fa';

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "11.png",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg",
  "30.jpg",
  "31.jpg",
];
const PageNavigator = ({ page, setPage }) => {

  const nextPage = () => {
    if (page < 5) setPage(page + 1);
    else alert("You've reached the last page");
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
    else alert("You're on the first page");
  };

  const renderContent = () => {
    switch (page) {
      case 1:
        return (
          <>
            <h1>He'lo,</h1>
            <p>This is my official portfolio website to showcase my Skills and Works</p>
          </>
        );
      case 2:
        return (
          <>
            <h1>About Me</h1>
            <div className="slideshow">
              <div className="details-box">
                <h2>Personal Details</h2>
                <p>Name: S Revanth Reddy</p>
                <p>DOB: 11 Feb 1996</p>
                <p>Gender: Male</p>
                <p>Languages: English, Telugu, Hindi</p>
              </div>
              <div className="details-box">
                <h2>Education</h2>
                <p>Intermediate: MPC - 93.5%</p>
                <p>B.Arch: Acharya Nagarjuna University 2013-2018 - 60.5% </p>
                <p>UI/UX Course: Google Certification Course - 2021</p>
              </div>
             
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h1>Work Details</h1>
            <div className="details-box">
              <h2>💼 Skills</h2>

<p> Photoshop, <FaFigma /> Figma, <SiCanva /> Canva</p>
<p><SiAutocad /> AutoCAD, <SiSketchup /> Sketchup, <FaTools /> Vray,  Lumion</p>
<p><FaHtml5 /> HTML, <FaCss3Alt /> CSS, <FaJsSquare /> JavaScript, <FaReact /> React JS</p>


            </div>
             <div className="details-box">
                <h2>Work Experience</h2>
                <p>DLF - Intern Architect - 2017-2018</p>
                <p>Neo Frames - UI/UX Developer & 3D Visualization - 2018 -2023</p>
                 <p>PeopleTech group - Outsourcing Architect - 2023 - 2024</p>
              </div>
           
          </>
        );
      case 4:
      return (
  <>
    <h1>Portfolio</h1>

    <div className="details-box1 scroll-box">
      <h2>Work Gallery</h2>
      <div className="image-gallery">
    {images.map((img, index) => (
      <img
        key={index}
        src={`${process.env.PUBLIC_URL}/gallery/${img}`}
        alt={` ${index + 1}`}
      />
    ))}
  </div>
    </div>

   <p>
  Please visit my all recent works on this google drive link - 
  <a href="https://drive.google.com/drive/folders/1_ohDny3DW2JuVLu1ftpibJYZarQN7hFb" target="_blank" rel="noreferrer">
    Click Here
  </a>.
</p>
  </>
);

              case 5:
        return (
          <>
            <h1>Thank You</h1>
            
            
            <p>Phone Number : +91 9520963999 Email-id : ar.revanthreddy@gmail.com</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="content2">
      <div className="content">{renderContent()}</div>
      <div>
         {page > 1 && <button onClick={prevPage}>Back</button>}
        {page < 5 && <button onClick={nextPage}>Next</button>}
       
      </div>
    </div>
  );
};

export default PageNavigator;
