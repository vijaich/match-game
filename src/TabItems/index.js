import './index.css'

const TabItems = props => {
  const {eachTab, onTabBtnClick} = props
  const {tabId, displayText} = eachTab

  const onTabClick = () => {
    onTabBtnClick(tabId)
  }

  return (
    <li>
      <button className="tab-button" type="button" onClick={onTabClick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
