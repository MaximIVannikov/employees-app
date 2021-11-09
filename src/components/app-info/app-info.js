import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return(
        <div className="app-info">
            <h1>Účetnictví zaměstnanců ve firmě</h1>
            <h2>Celkový počet zaměstnanců: {employees} </h2>
            <h2>Prémii dostanou: {increased} </h2>
        </div>
    )
}

export default AppInfo;