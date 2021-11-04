import './app-filter.css';

const AppFilter = () => {
    return(
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Všichni zaměstnanci
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Zvýšení mzdy
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Mzda výšší než 1000$
            </button>
        </div>
    );
}

export default AppFilter;