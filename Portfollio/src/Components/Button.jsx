// const Button = ({ text, className, id }) => {
//     return (
//         <a 
//          onClick={(e) => {
//             e.preventDefault();

//             const target = document.getElementById('counter')

//             if(target && id) {
//                 const offset = window.innerHeight * 0.15;

//                 const top = target.getBoundingClientRect().top + window.scrollY - offset;

//                 window.scrollTo( {top, behavior: 'smooth' });
//             }
//          }}
//         className={`${className ?? ''} cta-wrapper`}>
//           <div className="cta-button group">
//             <div className="bg-circle" /> 
//                 <p className="text">{text}</p>
//                 <div className="arrow-wrapper">
//                     <img src="/images/arrow-down.svg" alt="arrow"/>
//                 </div>
//           </div>
//          </a>
//     )
// }

// export default Button

const Button = ({ text, className, id, download }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        // ✅ If a download file is passed
        if (download) {
          const link = document.createElement("a");
          link.href = download; // e.g. "/resume.pdf"
          link.download = download.split("/").pop() || "download";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return;
        }

        // ✅ If scroll target exists
        if (id) {
          const target = document.getElementById(id);
          if (target) {
            const offset = window.innerHeight * 0.15;
            const top =
              target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({ top, behavior: "smooth" });
          }
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
