import React from "react";
import "./ProjectPage.scss";
import projectOne from "../../assets/image/92_w6J.gif";
import { FaReact , FaLink } from "react-icons/fa";
import { SiRedux, SiFirebase } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Moviflix from "../../assets/image/moviflixQR.png";

const ProjectPage = () => {
  return (
    <div className="About_container" id="Projects">
      <h1>Projects</h1>
      <div className="About_content">
        <div className="About_content_item">
          <div className="About_content_image">
            <img src={projectOne} alt="" srcset="" />
          </div>
          <div className="About_content_item_text">
            <h2>MOVIFLIX</h2>
            <p>
              Moviflix is an online database of information related to films,
              television series, home videos, video games, and streaming content
              online – including cast, production crew and personal biographies,
              plot summaries, trivia, ratings, and fan and critical reviews.
            </p>
            <div className="technology">
              <b>Technology :</b>{" "}
              <FaReact className="technology_icon" color="#49a3fb" />{" "}
              <SiRedux className="technology_icon" color="#593d88" />{" "}
              <SiFirebase className="technology_icon" color="#ffcb2b" />{" "}
              <TbApi className="technology_icon" />
            </div>
            <div className="project_link">
              <img src={Moviflix} alt="" />
              <b>Or</b>
              <a href="https://disney-plus-movies.web.app" target="blank" >Moviflix Link <FaLink/> </a>
            </div>
              <b>Scan qr for check in another device</b>
          </div>
        </div>
        <div className="About_content_item">
          <div className="About_content_image">
            <img src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="" srcset="" />
          </div>
          <div className="About_content_item_text">
            <h2>Project 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi,
              eu aliquam nisl nisi euismod. Donec euismod, nisl eget consectetur
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda dolor enim ex ipsum? Recusandae distinctio, alias
              doloremque, numquam veritatis, nisi labore eum mollitia aliquam
              dolorem in. Facilis autem voluptates magni! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ut voluptatem ex enim vero
              ullam amet vitae placeat cumque, voluptas fugiat, odio labore at!
              Minima, dicta provident temporibus minus laborum ex in! Velit
              illum porro sed dolorem. Reprehenderit eveniet labore aperiam
              fugit hic odit voluptatum a sint earum, ad illum amet magni! Quae
              quaerat repellendus tempora in recusandae doloribus molestias
              distinctio!
            </p>
          </div>
        </div>
        <div className="About_content_item">
          <div className="About_content_image">
            <img
              src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt=""
              srcset=""
            />
          </div>
          <div className="About_content_item_text">
            <h2>Project 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi,
              eu aliquam nisl nisi euismod. Donec euismod, nisl eget consectetur
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              iste impedit dolorum labore voluptates quia, magni laborum
              consequatur facilis laboriosam dolorem repellendus fugit sint
              voluptate? Atque totam illo voluptas ullam necessitatibus nemo
              mollitia ratione dolorum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti earum enim natus, placeat maxime
              eligendi quibusdam voluptas nam cum magni omnis cupiditate velit
              aspernatur consequuntur ducimus tempora. Laboriosam cumque quaerat
              eos saepe nesciunt in tenetur sunt id molestias autem sapiente
              quos ducimus dolores, tempore maiores obcaecati cupiditate quis,
              fugiat nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
