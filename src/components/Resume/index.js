import React from 'react';
import resumeImage from "../../assets/resume/resume-image.png";

function Resume() {
  return (
<section className="my-5">

<button>
<a id="resume" href="https://drive.google.com/file/d/1gOhCSv_aArqI2zmdvf0uQGZld0rRFNkG/view?usp=sharing"
        alt="View complete resume" class="text-email" target="_blank" rel="noreferrer">
  <img 
  href="#resume"
  src={resumeImage} 
  className="my-2" 
  style={{ width: "100%" }} 
  alt="resume" />
  </a>
  </button>
  
      
</section>
  );
}

export default Resume;