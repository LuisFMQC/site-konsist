import React from "react";

const Head = (props: any) => {
  React.useEffect(() => {
    document.title = props.title + " | KonsistMed";
    const description = document.querySelector("meta[name='description']");
    description?.setAttribute("content", props.description || "");
  }, [props]);
  return <></>;
};

export default Head;
