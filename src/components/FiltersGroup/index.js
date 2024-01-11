import './index.css'
import {IoIosSearch} from 'react-icons/io'

const FiltersGroup = props => {
  const {inputSearch, onChangeInputSearch} = props

  const renderCategory = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachItem => {
      const {onChangeCategory} = props
      const onClickCategory = () => onChangeCategory(eachItem.categoryId)
      //   console.log(eachItem)
      return (
        <li
          className="category-list-item"
          onClick={onClickCategory}
          key={eachItem.categoryId}
        >
          <p>{eachItem.name} </p>
        </li>
      )
    })
  }

  const renderRating = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {onChangeRating} = props
      const onClickRating = () => onChangeRating(eachRating.ratingId)
      return (
        <li
          className="rating-list-item"
          onClick={onClickRating}
          key={eachRating.ratingId}
        >
          <img
            className="rating-image"
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
          />
          <p className="rating-para">& up</p>
        </li>
      )
    })
  }

  const onChangeFilter = event => {
    onChangeInputSearch(event.target.value)
  }

  const onClickButtton = () => {
    const {onClearFilter} = props
    onClearFilter()
  }

  const enterKeyFunc = event => {
    const {onEnterSearch} = props
    if (event.key === 'Enter') {
      onEnterSearch()
    }
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          onChange={onChangeFilter}
          onKeyDown={enterKeyFunc}
          value={inputSearch}
          placeholder="Search"
        />
        <IoIosSearch className="search-icon" />
      </div>
      <div className="category-container">
        <h3 className="category-heading">Category</h3>
        <ul className="category-list">{renderCategory()}</ul>
      </div>
      <div className="category-container">
        <h3>Rating</h3>
        <ul className="rating-list">{renderRating()}</ul>
      </div>
      <button type="button" onClick={onClickButtton} className="clear-btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
