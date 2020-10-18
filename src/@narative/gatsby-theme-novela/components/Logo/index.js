import React, { useEffect, useState } from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (fill === "#000") {
      setUrl(
        "https://raw.githubusercontent.com/luvk1412/luvk1412.github.io/master/website_logo_black_tr.png"
      );
    } else {
      setUrl(
        "https://raw.githubusercontent.com/luvk1412/luvk1412.github.io/master/website_logo_white_tr.png"
      );
    }
  }, [fill]);
  return (
    <>
      <img
        style={{
          width: "60%",
          height: "auto",
        }}
        alt="Code with Luv logo"
        src={url}
      />
    </>
  );
}
