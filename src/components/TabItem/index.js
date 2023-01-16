import './index.css'

const TabItem = props => {
  const {tabDetails, onUpdateTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onchangeTab = () => {
    onUpdateTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onchangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
