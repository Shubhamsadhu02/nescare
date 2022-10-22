import { React, Fragment, useState } from 'react'
import Header from '../../Partials/Header'

import { Typeahead, AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Form, Spinner } from 'react-bootstrap';
import { ReactComponent as Ship } from './ship.svg'
import { ReactComponent as Plane } from './plane.svg'
import { ReactComponent as Truck } from './truck.svg'
import { ReactComponent as Rail } from './rail.svg'

import 'react-bootstrap-typeahead/css/Typeahead.css';
import "../../Styles/CarbonCalculator.scss"

export default function CarbonCalculator() {
    const [co2, setCo2] = useState(null);
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [transport, setTransport] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [options, setOptions] = useState([]);

    const [errorMessage, setErrorMessage] = useState(null);

    const locationSearch = async (query) => {
        setIsLoading(true);
        let response = await fetch(`https://atorvis.com/ceva_proxy/location.php?mode=${transport}&query=${query}`);
        if (response.status == 200) {
            let res = await response.json();
            let body = JSON.parse(res);
            console.log(body);
            var _locations = body.features
            const options = _locations.map((e) => ({
                name: e.properties.name,
                locode: e.properties.locode,
            }));
            setOptions(options);
            setIsLoading(false);
        }
    };

    const getCarbonCalculation = async (quantity, transport) => {
        if (origin != null && destination != null) {
            setIsSearching(true);
            const url = `https://atorvis.com/ceva_proxy/calculate.php?from=${origin}&to=${destination}&quantity=${quantity}&mode=${transport}`
            let response = await fetch(url);
            if (response.status == 200) {
                let res = await response.json();
                let body = JSON.parse(res);
                console.log(body);
                if (body.error != undefined) {
                    console.log(body.error);
                    console.log(body.messages);
                    setErrorMessage(body.messages);
                } else {
                    let co2 = body.co2e;
                    setCo2(co2.total);
                }

                setIsSearching(false);
            }
        } else {
            alert("Please select Origin & Destination");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var form = e.target;
        const unit = form.unit.value;
        let quantity = form.quantity.value;
        const transport = form.transport.value;
        if (unit == 'tons') {
            quantity = quantity / 10;
        }
        console.log(origin);
        console.log(destination);
        getCarbonCalculation(quantity, transport);
        return false;
    }


    return (
        <>
            <Header showNav={true} isWhite={true}/>
            <section className="banner">
                <h1>Carbon Footprint Calculator</h1>
                <h6>Some text goes in here.</h6>
            </section>
            <section className="main-calculator">
                {isSearching ?
                    <div className="spinner-container">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div> : ''}
                <div className="container">
                    <form action="#" className='calculator-form' onSubmit={handleSubmit}>
                        <div className="row form-row">
                            <div className="col-2 lable-container">
                                <label htmlFor="" className='form-label'>Unit</label>
                            </div>
                            <div className="col-5">
                                <select className="form-select" name='unit' aria-label="Default select example">
                                    <option value="tons" defaultValue={true}>Tons</option>
                                    <option value="teus">TEUS</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <input type="number" className="form-control" name="quantity" placeholder='Enter Amount' />
                            </div>
                        </div>
                        <div className="row form-row">
                            <div className="col-md-2 lable-container">
                                <label htmlFor="" className='form-label'>Transportation Mode</label>
                            </div>
                            <div className="col-md-10 transporation-container">
                                <input type="radio" name="transport" id='ship' value="port" />
                                <div className='transportation-select'>
                                    <label htmlFor="ship" onClick={() => setTransport('port')}>
                                        <span className='transportation-select-image'>
                                            <svg className='transportation-select-image--img'>
                                                <Ship fill='' />
                                            </svg>
                                        </span>
                                        <h6 className='transportation-select-label'>
                                            Ship
                                        </h6>
                                    </label>
                                </div>
                                <input type="radio" name="transport" id="air" value="airport" />
                                <div className='transportation-select'>
                                    <label htmlFor="air" onClick={() => setTransport('airport')}>
                                        <span className='transportation-select-image'>
                                            <svg className='transportation-select-image--img'>
                                                <Plane fill='' />
                                            </svg>
                                        </span>
                                        <h6 className='transportation-select-label'>
                                            Air

                                        </h6>
                                    </label>
                                </div>
                                <input type="radio" name="transport" id="truck" value="" />
                                <div className='transportation-select'>
                                    <label htmlFor="truck" onClick={() => setTransport('road')}>
                                        <span className='transportation-select-image'>
                                            <svg className='transportation-select-image--img'>
                                                <Truck fill='' />
                                            </svg>
                                        </span>
                                        <h6 className='transportation-select-label'>
                                            Truck
                                        </h6>
                                    </label>
                                </div>
                                <input type="radio" name="transport" id='rail' value="railTerminal" />
                                <div className='transportation-select'>
                                    <label htmlFor="rail" onClick={() => setTransport('railTerminal')}>
                                        <span className='transportation-select-image'>
                                            <svg className='transportation-select-image--img'>
                                                <Rail fill='' />
                                            </svg>
                                        </span>
                                        <h6 className='transportation-select-label'>
                                            Rail
                                        </h6>
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className="row form-row">
                            <div className="col-md-2 lable-container">
                                <label htmlFor="" className='form-label'>Origin & Destination</label>
                            </div>
                            <div className="col-md-5 position-relative">
                                <AsyncTypeahead
                                    id="async-example"
                                    isLoading={isLoading}
                                    labelKey="name"
                                    minLength={3}
                                    onSearch={locationSearch}
                                    options={options}
                                    placeholder="Origin"
                                    renderMenuItemChildren={(option, props) => (
                                        <Fragment>
                                            <span onClick={() => setOrigin(option.locode)}>{option.name}</span>
                                        </Fragment>
                                    )}
                                />
                            </div>
                            <div className="col-md-5 position-relative">
                                <AsyncTypeahead
                                    id="async-example"
                                    isLoading={isLoading}
                                    labelKey="name"
                                    minLength={3}
                                    onSearch={locationSearch}
                                    options={options}
                                    placeholder="Destination"
                                    renderMenuItemChildren={(option, props) => (
                                        <Fragment>
                                            <span onClick={() => { setDestination(option.locode) }}>{option.name}</span>
                                        </Fragment>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row form-row">
                            <div className="offset-md-2 col-md-5">
                                <button type='submit' className="btn btn-submit">Calculate</button>
                            </div>
                            <div className="col-md-5">
                                <div className="form-control result-container" >
                                    <span>{co2}</span><small>Tons of CO2</small>
                                </div>
                            </div>
                        </div>
                    </form>
                    {errorMessage != null?
                    <div class="alert alert-danger mt-5" role="alert">
                        <ul className='errors mb-0'>
                            {errorMessage.map((ele, index) => <li key={index}>{ele}</li>)}
                        </ul>
                    </div>:''}

                </div>
            </section>
        </>
    )
}
