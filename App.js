class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      weight: '',
      height: '',
      targetWeight: '',
      bmi: null,
    };
  }

  calculateBMI = () => {
    const { weight, height } = this.state;
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      this.setState({ bmi: bmiValue.toFixed(2) });
    }
  };

  render() {
    const { age, weight, height, targetWeight, bmi } = this.state;
    return (
      <div className="App">
        <h1>Calorie and BMI calculator</h1>
        <form onSubmit={(e) => { e.preventDefault(); this.calculateBMI(); }}>
          <div>
            <label>Age: </label>
            <input type="number" value={age} onChange={(e) => this.setState({ age: e.target.value })} />
          </div>
          <div>
            <label>Weight (kg): </label>
            <input type="number" value={weight} onChange={(e) => this.setState({ weight: e.target.value })} />
          </div>
          <div>
            <label>Height (cm): </label>
            <input type="number" value={height} onChange={(e) => this.setState({ height: e.target.value })} />
          </div>
          <div>
            <label>Target weight (kg): </label>
            <input type="number" value={targetWeight} onChange={(e) => this.setState({ targetWeight: e.target.value })} />
          </div>
          <button type="submit">Calculate BMI</button>
        </form>
        {bmi && (
          <div>
            <h2>Your BMI: {bmi}</h2>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
