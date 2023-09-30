import './index.css'

const ImageListItems = props => {
  const {eachList, imgSelected} = props
  const {id, thumbnailUrl, category} = eachList

  const thumNailImgSelected = () => {
    imgSelected(id)
  }

  return (
    <li className="each-image">
      <button className="img-btn" type="button" onClick={thumNailImgSelected}>
        <img src={thumbnailUrl} alt={category} className="thumb-nail-img" />
      </button>
    </li>
  )
}

export default ImageListItems
