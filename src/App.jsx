import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Caricamento Dati Clienti....</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Data Nascita</th>
                    <th>Sesso</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.id_cliente}>
                        <td>{forecast.nome}</td>
                        <td>{forecast.cognome}</td>
                        <td>{forecast.data_nascita}</td>
                        <td>{forecast.sesso}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Cliente Tricostyle</h1>
            <p>Esempio caricamento dati dal server.</p>
            {contents}
        </div>
    );
    
    async function populateWeatherData() {
        const response = await fetch('https://srvtrico.obbar.it/api/Clienti/getClientiAll');
        const data = await response.json();
        setForecasts(data);
    }
}

export default App;