/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

export const RenderId = (data) => {
  return <div>{data.id}</div>;
};

export const RenderEmail = (data) => {
  return <div>{data.email}</div>;
};

export const RenderFirstName = (data) => {
  return <div>{data.first_name}</div>;
};

export const RenderLastName = (data) => {
  return <div>{data.last_name}</div>;
};

export const RenderAvataar = (data) => {
  return (
    <div>
      <img src={data?.avatar} width="100px" height="120px" alt="Avatar" />
    </div>
  );
};

export const tableRows = [
  {
    title: "Id",
    index: 1,
    render: RenderId,
  },
  {
    title: "Email",
    index: 2,
    render: RenderEmail,
  },
  {
    title: "First Name",
    index: 3,
    render: RenderFirstName,
  },
  {
    title: "Last Name",
    index: 4,
    render: RenderLastName,
  },
  {
    title: "Avataar",
    index: "5",
    render: RenderAvataar,
  },
];
