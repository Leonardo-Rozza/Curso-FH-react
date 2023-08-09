import React from "react";

export const Smal = React.memo(({ value }) => {
  return <small>{value}</small>;
});
