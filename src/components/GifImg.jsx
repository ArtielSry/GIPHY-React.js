
export default function GifImg( {title, url, id} ) {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}


/* COMPONENTE DONDE SE CREA EL TITULO LA IMAGEN Y TODO */