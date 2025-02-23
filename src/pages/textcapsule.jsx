import React, { Component } from "react";

export default class ImageCapsule extends Component {
  componentDidMount() {
    console.log("Supabase URL:", process.env.REACT_APP_SUPABASE_URL);
    console.log("Supabase Key:", process.env.REACT_APP_SUPABASE_ANON_KEY);
  }

  render() {
    return <div>Check console for Supabase credentials.</div>;
  }
}
