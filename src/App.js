import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Jumbotron } from 'react-bootstrap';
import { Heart } from 'react-feather';

const json = require("./love.json")

const getRandomQuote = () => json[Math.floor(Math.random() * json.length)]

const highMargin = {marginTop: '50px'}
const lowMargin = {marginTop: '20px'}

function App() {

  const [quote, setQuote] = useState(getRandomQuote());

  return (
    <Container className="p-3">
      <Jumbotron style={{backgroundColor: 'red', opacity: '0.85'}}>
        <Row className="justify-content-md-center">
          <h1 className="header" style={highMargin}><b>Random Love Generator</b></h1>
        </Row>
        <Row className="justify-content-md-center">
          <p style={lowMargin}><b>{ quote.language }</b></p>
        </Row>
        <Row className="justify-content-md-center">
          <p><b>{ quote.quote }</b></p>
        </Row>
        <Row className="justify-content-md-center">
          <p><b>{ quote.country }</b></p>
        </Row>
        <Row className="justify-content-md-center">
          <button className="btn btn-primary-outline" size="lg" onClick={() => setQuote(getRandomQuote())} style={lowMargin}>
            <Heart size={48}/>
          </button>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default App;
