import React from "react";
import "./ProjectPage.scss";
import projectOne from "../../assets/image/92_w6J.gif";
import { FaReact } from "react-icons/fa";
import { TbExternalLink , TbBrandReactNative} from "react-icons/tb";
import { TiWeatherStormy } from "react-icons/ti";
import { SiRedux, SiFirebase } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Lottie from "react-lottie";
import MovieAnimation from "../../assets/animations/72235-watch-a-movie-with-popcorn.json";
import WeatherAnimation from "../../assets/animations/67989-wind-and-rain.json";
import Moviflix from "../../assets/image/moviflixQR.png";
import { Button } from "@mui/material";

const ProjectPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MovieAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="About_container" id="Projects">
      <h1>Projects</h1>
      <div className="About_content">
        <div className="About_content_item">
          <div className="About_content_image">
            {/* <img src={projectOne} alt="" srcset="" /> */}
            <Lottie
              // options={defaultOptions}
              options={{
                loop: true,
                autoplay: true,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
                animationData: WeatherAnimation,
              }}
              className="animation"
            />
          </div>
          <div className="About_content_item_text">
            {/* <a
              style={{
                position: "absolute",
                right: 0,
              }}
              href="https://disney-plus-movies.web.app"
              target="blank"
            >
              <TbExternalLink color="black" size={25} />
            </a> */}
            <h2>Weather +</h2>
            <p>
              Its so easy to receive the weather conditions in your current
              location. Weather forecast app provides detailed local forecast &
              weather forecast world wide, the app provides the current
              temperature in Celsius. The weather app also provides
              atmospheric pressure, weather conditions, visibility distance,
              relative humidity, precipitation in different unites, dew point,
              wind speed and direction, in addition to ten days in future and
              hourly weather forecast. Realtime temperature, humidity, pressure
              and wind speed are all in the weather app based.
            </p>
            <div className="technology">
              <b>Technology</b>{" "}
              <div>
                <TbBrandReactNative className="technology_icon" color="#49a3fb" />{" "}
                <TbApi className="technology_icon" />
                <TiWeatherStormy className="technology_icon" />
              </div>
            </div>
            <div className="project_link">
              <Button variant="contained" disabled >Download Apk</Button>
                 {/* <img src={Moviflix} alt="" /> */}
            </div>
            {/* <p>Scan QR for check in another device</p> */}
          </div>
        </div>
        <div className="About_content_item">
          <div className="About_content_image">
            {/* <img src={projectOne} alt="" srcset="" /> */}
            <Lottie options={defaultOptions} className="animation" />
          </div>
          <div className="About_content_item_text">
            <a
              style={{
                position: "absolute",
                right: 0,
              }}
              href="https://disney-plus-movies.web.app"
              target="blank"
            >
              <TbExternalLink color="black" size={25} />
            </a>
            <h2>MOVIFLIX</h2>
            <p>
              Moviflix is an online database of information related to films,
              television series, home videos, video games, and streaming content
              online – including cast, production crew and personal biographies,
              plot summaries, trivia, ratings, and fan and critical reviews.
            </p>
            <div className="technology">
              <b>Technology</b>{" "}
              <div>
                <FaReact className="technology_icon" color="#49a3fb" />{" "}
                <SiRedux className="technology_icon" color="#593d88" />{" "}
                <SiFirebase className="technology_icon" color="#ffcb2b" />{" "}
                <TbApi className="technology_icon" />
              </div>
            </div>
            <div className="project_link">
              <img src={Moviflix} alt="" />
            </div>
            <p>Scan QR for check in another device</p>
          </div>
        </div>

        {/* <div className="About_content_item">
          <div className="About_content_image">
            <img
              src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt=""
              srcset=""
            />
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
        </div> */}
      </div>
    </div>
  );
};

export default ProjectPage;
