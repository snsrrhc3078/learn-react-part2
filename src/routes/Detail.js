import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../CSS/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInfo((current) => json.data.movie);
  };
  useEffect(getMovie, []);
  document.body.style.backgroundImage = `url(${info.background_image_original})`;
  return (
    <div className={style.body}>
      <img src={info.large_cover_image}></img>
      <h1>{info.title_long}</h1>
      <b>
        Genres|
        {info.genres &&
          info.genres.map((item, i) => <span key={i}> {item}</span>)}
      </b>
      <p>{info.description_full}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${info.yt_trailer_code}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default Detail;
