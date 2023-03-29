import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Stylesheets from "./Stylesheet";

export default function Add() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => alert(JSON.stringify(d));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Album Name:
        <input {...register("item.Title")} />
      </label>
      <label>
        Artist Name:
        <input {...register("item.Artist")} />
      </label>
      <label>
        Genre:
        <input {...register("item.Genre")} />
      </label>
      <input type="submit"></input>
    </form>
  );
}
