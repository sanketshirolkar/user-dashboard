/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const RenderId = (data) => {
  return <div>{data.id}</div>;
};

export const RenderName = (data) => {
  return <div>{data.name}</div>;
};

export const RenderEmail = (data) => {
  return <div>{data.email}</div>;
};

export const RenderAddress = (data) => {
  return <div>{data.address}</div>;
};

export const tableRowsData = [
  {
    title: "Id",
    index: 1,
    render: RenderId,
  },
  {
    title: "Name",
    index: 2,
    render: RenderName,
  },
  {
    title: "Email",
    index: 3,
    render: RenderEmail,
  },

  {
    title: "Address",
    index: 4,
    render: RenderAddress,
  },
];
