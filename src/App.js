import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            txtValue: '',
            isCelsius: true,
            errorList: []
        }
    }

    componentWillUnmount() {
        this.setState({errorList: []});
    }

    handleClick = (value) => {
        const { txtValue, isCelsius, errorList } = this.state;
        let dataConvert = 0;
        console.log('value:', `${txtValue}${value}`);
        console.log('errorList:', errorList);
        // let re = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/;
        let re = /(?:[1-9]\d*|0)?(?:\.\d+)?$/;
        let re2 = /[+-]?([0-9]*[.])?[0-9]+/;



        if (re2.test(value)) {
            this.setState(prevState => ({errorList: [...prevState.errorList, 'error']}));
        }

        if (errorList.length > 1 && value === '.') {
            console.log('K1');
            value = '';
        }

        if (re.test(value) && value !== 'F' && value !== 'C') {
            // console.log('re:', re.test(value))
            this.setState({txtValue: `${txtValue}${value}`})
        }

       if (value === 'F' && isCelsius) {
           dataConvert = ((txtValue || 0) * 1.800) + 32;
           // console.log('dataConvert:', dataConvert.toFixed(2));
           this.setState({isCelsius: false, txtValue: dataConvert.toFixed(2)});
       } else if (value === 'C') {
           dataConvert = ((txtValue || 0) - 32)/1.800;
           // console.log('dataConvert:', dataConvert.toFixed(2));
           this.setState({isCelsius: true, txtValue: dataConvert.toFixed(2)});
       }
    }

  render() {
    const { txtValue, isCelsius } = this.state;
    console.log('txtValue:', txtValue);
    return (
      <div className="App">
        <header className="App-header">
            <div>
                <div>
                    <h2>{'เครื่องคิดเลขอุณหภูมิ'}</h2>
                    <table border={1} style={{width: '100%'}}>
                        <tbody>
                        <tr className="nameWrapper" style={{fontSize: '40px', textAlign: 'right'}}>
                            <th colSpan={4}>{txtValue || 0}</th>
                        </tr>
                        <tr className='nameWrapper'>
                            <td className="namWrapper1" onClick={() => this.handleClick(7)}>7</td>
                            <td className="namWrapper1" onClick={() => this.handleClick(8)}>8</td>
                            <td className="namWrapper1" onClick={() => this.handleClick(9)}>9</td>
                            <td className="namWrapper1" onClick={() => this.handleClick('F')} rowSpan={2} style={{backgroundColor: !isCelsius ? 'orange' : ''}}>F</td>
                        </tr>
                        <tr className="nameWrapper">
                            <td className="namWrapper1" onClick={() => this.handleClick(4)}>4</td>
                            <td className="namWrapper1" onClick={() => this.handleClick(5)}>5</td>
                            <td className="namWrapper1" onClick={() => this.handleClick(6)}>6</td>
                        </tr>
                        <tr className="nameWrapper">
                            <td className="namWrapper1" onClick={() => this.handleClick(1)}>1</td>
                            <td className="namWrapper1" onClick={() => this.handleClick(2)}>2</td>
                            <td className="namWrapper1" onClick={() => this.handleClick(3)}>3</td>
                            <td className="namWrapper1" onClick={() => this.handleClick('C')} rowSpan={2} style={{backgroundColor: isCelsius ? 'orange' : ''}}>C</td>
                        </tr>
                        <tr className="nameWrapper">
                            <td className="namWrapper1" colSpan={2} onClick={() => this.handleClick(0)}>0</td>
                            <td className="namWrapper1" onClick={() => this.handleClick('.')}>.</td>
                        </tr>
                        <tr className="nameWrapper namWrapper1">
                            <td onClick={() => this.setState({txtValue: '', errorList: []})} colSpan={4}>Clear</td>
                        </tr>

                        </tbody>
                    </table>
                </div>

            </div>

        </header>
      </div>
    );
  }
}

export default App;
