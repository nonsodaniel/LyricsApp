import React, { Component } from "react";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
        this.props.match.params.id
      }&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log("Main lyrics", data);
        this.setState({ lyrics: data.message.body.lyrics });
        localStorage.setItem("lyrics", JSON.stringify(this.state.lyrics));
        //make another fetch to get the track info
        fetch(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        )
          .then(res => {
            return res.json();
          })
          .then(data => {
            // console.log("track info", data);
            this.setState({ track: data.message.body.track });
            localStorage.setItem(
              "track_info",
              JSON.stringify(this.state.track_info)
            );
          });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;
    console.log("tracks", track);
    console.log("lyrics", lyrics);
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Link to="" className="btn btn-dark btn-sm mb-4">
            Go back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong> : {track.album_id}
            </li>

            <li className="list-group-item">
              <strong>Song Genre</strong> :{" "}
              {
                track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name
              }
            </li>

            <li className="list-group-item">
              <strong>Is Track Explicit</strong> :{" "}
              {track.explicit === 0 ? "No" : "Yes"}
            </li>

            <li className="list-group-item">
              <strong>Release Date </strong> :{" "}
              <Moment fromNow>{track.updated_time}</Moment>
            </li>
          </ul>
        </React.Fragment>
      );
    }
  }
}
