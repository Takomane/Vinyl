const AlbumCard = ({ album }) => {
    return (
        <div className="album-card">
            <h3>{album.Name}</h3>
            <p>{album.Artist}</p>
            <p>{album.Genre}</p>
        </div>
    )
}

export default AlbumCard
