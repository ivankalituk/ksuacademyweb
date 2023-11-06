import "./searchBar.scss"

import searchBtn from "../../../../assets/photos/SearchBtn.svg"

function SearchBar(){
    return (
        <div className="searchBar">
            
            <input type="text" placeholder="ПОШУК"/>

            <button>
                <img src={searchBtn} alt="Search" />
            </button>

        </div>
    )
}

export default SearchBar;