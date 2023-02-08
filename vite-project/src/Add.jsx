import React, { useState, useEffect, useForm } from 'react'
import Stylesheets from './Stylesheet';

function post_album()
    const {register, handleSubmit} = useForm();
    const onSubmit =(d) =>
    alert(JSON.stringify(d));

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
            <p>Render: </p>
        </form>
    )
export default post_album