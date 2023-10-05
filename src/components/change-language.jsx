import usFlag from "@assets/images/en.png";
import faFlag from "@assets/images/fa.png";
import { useState, useRef, useEffect } from "react";
import { useAppContext } from "../contexts/app/app-context";

const ChangeLanguage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const { language, changeLanguage } = useAppContext();

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickOutside);
    };
  }, [show]);

  useEffect(() => {
    setShow(false);
  }, [language]);

  return (
    <div className="dropdown">
      <a className="nav-flag dropdown-toggle" onClick={() => setShow(true)}>
        <img src={language === "fa" ? faFlag : usFlag} alt="English" />
      </a>
      <div
        ref={ref}
        className={`dropdown-menu dropdown-menu-end ${
          show ? "show" : undefined
        }`}>
        <a
          className="dropdown-item fw-bolder d-flex align-items-center gap-2"
          style={{ textAlign: language === "fa" ? "right" : "left" }}
          onClick={() => changeLanguage("fa")}>
          <img
            src={faFlag}
            alt="Persian"
            className="ms-2"
            style={{ width: "40px" }}
          />
          <span className="align-middle">فارسی</span>
        </a>
        <a
          className="dropdown-item fw-bolder d-flex align-items-center gap-2"
          style={{ textAlign: language === "fa" ? "right" : "left" }}
          onClick={() => changeLanguage("en")}>
          <img
            src={usFlag}
            alt="Persian"
            className="ms-2"
            style={{ width: "40px" }}
          />
          <span className="align-middle">English</span>
        </a>
      </div>
    </div>
  );
};

export default ChangeLanguage;
