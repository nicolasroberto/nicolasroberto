import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="text-muted py-4 bg-dark bg-gradient">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#" className="link-warning">
              Arriba
            </a>
          </p>
          <p className="mb-1">
            Esta página fue desarrollada con &copy; React-Bootstrap y Vite.{" "}
          </p>
          <p className="mb-0">
            Soy Nicolás Roberto, visitá mi{" "}
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-roberto/"
              className="link-warning"
              target="_blank"
            >
              Linkedin
            </a>{" "}
            y{" "}
            <a
              href="https://github.com/nicolasroberto"
              target="_blank"
              className="link-warning"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
};
