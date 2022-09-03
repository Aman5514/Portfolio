import React from "react";
import "./ProjectPage.scss";
import projectOne from "../../assets/image/92_w6J.gif";
import { FaReact } from "react-icons/fa";
import { TbExternalLink, TbBrandReactNative } from "react-icons/tb";
import { TiWeatherStormy } from "react-icons/ti";
import { SiRedux, SiFirebase } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FiYoutube } from "react-icons/fi";
import Lottie from "react-lottie";
import MovieAnimation from "../../assets/animations/72235-watch-a-movie-with-popcorn.json";
import WeatherAnimation from "../../assets/animations/67989-wind-and-rain.json";
import ActionAnimation from "../../assets/animations/38568-action.json";
import Moviflix from "../../assets/image/moviflixQR.png";
import { Button } from "@mui/material";
import TrailoAPK from "../../android/Trailo.apk";
import WeatherAPK from "../../android/Weather_plus.apk";
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
            <div className="animation">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                  animationData: WeatherAnimation,
                }}
                height={"100%"}
                width={"100%"}
              />
            </div>
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
              temperature in Celsius. The weather app also provides atmospheric
              pressure, weather conditions, visibility distance, relative
              humidity, precipitation in different unites, dew point, wind speed
              and direction, in addition to ten days in future and hourly
              weather forecast. Realtime temperature, humidity, pressure and
              wind speed are all in the weather app based.
            </p>
            <div className="technology">
              <b>Technology</b>{" "}
              <div>
                <TbBrandReactNative
                  className="technology_icon"
                  color="#49a3fb"
                />{" "}
                <TbApi className="technology_icon" />
                <TiWeatherStormy className="technology_icon" />
              </div>
            </div>
            <div className="project_link">
              <Button
                className="download_button"
                variant="contained"
                download
                href={WeatherAPK}
              >
                Download Apk
              </Button>
              {/* <img src={Moviflix} alt="" /> */}
            </div>
            {/* <p>Scan QR for check in another device</p> */}
          </div>
        </div>
        <div className="About_content_item">
          <div className="About_content_image">
            {/* <img src={projectOne} alt="" srcset="" /> */}
            <div className="animation">
              <Lottie
                options={defaultOptions}
                height={"100%"}
                width={"100%"}
                className="animation"
              />
            </div>
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
        <div className="About_content_item">
          <div className="About_content_image">
            {/* <img src={projectOne} alt="" srcset="" /> */}
            <div className="animation">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                  animationData: ActionAnimation,
                }}
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
          <div className="About_content_item_text">
            <h2>TRAILO</h2>
            <p>
              Trailo is an online database of information related to films,
              television series, home videos, video games, and streaming content
              online – including cast, production crew and personal biographies,
              plot summaries, trivia, ratings, and fan and critical reviews. and also you can watch all movie trailers,
              search specific movies. now no need to search whole movies collection just select movie type and search accordingly.
            </p>
            <div className="technology">
              <b>Technology</b>{" "}
              <div>
                <TbBrandReactNative className="technology_icon" color="#49a3fb" />
                <TbApi className="technology_icon" />
                <FiYoutube className="technology_icon" color="red" />
              </div>
            </div>
            <div className="project_link">
              <Button
                className="download_button"
                variant="contained"
                href={TrailoAPK}
                download
              >
                Download Apk
              </Button>
              {/* <img src={Moviflix} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
