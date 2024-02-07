import { useEffect, useState } from 'react';
import './App.css';
import Table from '../node_modules/react-bootstrap/esm/Table';
import mioComponente from './mioComponente';

function App() {
    const [forecasts, setForecasts] = useState();
    //className="table table-striped" aria-labelledby="tabelLabel"
    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Caricamento Dati Clienti....</em></p>
        : <Table striped bordered hover >
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
        </Table>;

    return (

        <div>
            {mioComponente("Genny", "48")}
            <h1 id="tabelLabel">Cliente Tricostyle</h1>
            <p>Esempio caricamento dati dal server.</p>
            {contents}

            {mioComponente("Marco", "50")}
        </div>
    );
    
    async function populateWeatherData() {
        const response = await fetch('https://srvtrico.obbar.it/api/Clienti/getClientiAll');
        const data = await response.json();
        setForecasts(data);
    }
}

export default App;