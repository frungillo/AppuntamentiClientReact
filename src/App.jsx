import { useEffect, useState } from 'react';
import './App.css';
import Table from '../node_modules/react-bootstrap/esm/Table';
//import mioComponente from './mioComponente';
import Button from 'react-bootstrap/Button';

function App() {
    const [forecasts, setForecasts] = useState();
    const [isLoading, setLoading] = useState(false);
    //className="table table-striped" aria-labelledby="tabelLabel"
    useEffect(() => {
       // populateWeatherData();
        if (isLoading) {
            populateWeatherData().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const contents = forecasts === undefined
        ? <p><em>Cliccare il bottone</em></p>
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
    const handleClick = () => setLoading(true);

    return (

        <div>
            <h1 id="tabelLabel">Cliente Tricostyle</h1>
            <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'Caricamento…' : 'Click Per Caricare'}
            </Button>
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