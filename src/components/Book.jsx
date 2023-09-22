const Book = (props) => {
  const { author, img, price, title, handleRemove, id } = props
  return (
    <div className='book'>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="title"><b>Title : </b> {title}</div>
      <div className="author"><b>Author : </b> {author}</div>
      <div className="price"><b>Price : </b> {price}</div>
      <button className="remov-btn" onClick={() => handleRemove(id)}>Remove</button>
    </div>
  )
}

export default Book