import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.scss';

class Quiz extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            questions: {},
            results: [],
            showQuiz: true
        }
    }
     
    componentDidMount = () => {
        //Axios reference
        let self = this;

        axios.get('/api/questions')
        .then(function (response) {
          // handle success
          //console.log(response.data);
       
          self.setState((prevState) => {
            return {
                questions: response.data
               }
         }, () => self.displayQuestions()); 


        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }

    onChangeValue = (e) => {
        //console.log('change ',e);
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    displayQuestions = () => {

        let theQuestions = Array.from(this.state.questions);
        return theQuestions.map((question, index=1) =>{
            return (
                    <li key={index}>
                        <div className="text">{question}</div>
                        <div className="options">
                            <span className="disagree">Disagree</span>
                            <input type="radio" name={`question_${index+1}`} value="1" required onChange={this.onChangeValue}/>
                            <input type="radio" name={`question_${index+1}`} value="2" onChange={this.onChangeValue} />
                            <input type="radio" name={`question_${index+1}`} value="3" onChange={this.onChangeValue} />
                            <input type="radio" name={`question_${index+1}`} value="4" onChange={this.onChangeValue} />
                            <input type="radio" name={`question_${index+1}`} value="5" onChange={this.onChangeValue} />
                            <input type="radio" name={`question_${index+1}`} value="6" onChange={this.onChangeValue} />
                            <input type="radio" name={`question_${index+1}`} value="7" onChange={this.onChangeValue} />
                            <span className="agree">Agree</span>
                        </div>
                    </li> 
                );
            
        })

    }

    handleQuizResults = () => {
      
        this.setState({
            showQuiz: false
        });

        for (const [key, value] of Object.entries(this.state.results.breakdown)) {
            //console.log(key, value);
            this.setState((prevState) => {
                return {
                    [key] : value
                }
             });
        }
          
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //Axios reference
        let self = this;

        axios.post('/api/submit-quiz', {
            email: this.state.email,
            question_1: this.state.question_1,
            question_2: this.state.question_2,
            question_3: this.state.question_3,
            question_4: this.state.question_4,
            question_5: this.state.question_5,
            question_6: this.state.question_6,
            question_7: this.state.question_7,
            question_8: this.state.question_8,
            question_9: this.state.question_9,
            question_10: this.state.question_10,
        })
        .then(function (response) {
            //console.log(response.data);
            self.setState((prevState) => {
                return {
                    results: response.data
                   }
             }, () => self.handleQuizResults()); 
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
       
        return (
            <div className="container ">
                <div className={`content quiz ${this.state.showQuiz ? 'show' : 'hide'}`}>
                    <h1>Discover Your Perspective</h1>
                    <p>Complete the 7 min test and get a detailed report of your lenses on the world.</p>
                    <form id="perspective-quiz"  onSubmit={this.handleSubmit}>
                        <ul className="questions-list">
                            {this.displayQuestions()}
                            <li>
                                <label>Your Email</label>
                                <input name="email" type="email" placeholder="you@example.com" required onChange={this.onChangeValue} />
                            </li>
                      
                        </ul>
                        <button className="btn btn-submit">Save &amp; Continue</button>
                    </form> 
                </div>

                <div className={`content perspective ${this.state.showQuiz ? 'hide' : 'show'}`}>
                    <div className="side">
                        <h2>Your Perspective </h2>
                        <p>Your perspective type is {this.state.results.results}</p>
                    </div>
                    <div className="side">
                        <ul className="results">
                       
                            <li><span>Introversion (I)</span><span className="bar-wrap"><span className="bar"  style={{width : this.state.EI+'%'}}>{this.state.EI}%</span></span><span>Extroversion (E)</span></li>
                            <li><span>Sensing (S)</span><span className="bar-wrap"><span className="bar" style={{width : this.state.SN+'%'}}>{this.state.SN}%</span></span><span>Intuition (N)</span></li>
                            <li><span>Thinking (T)</span><span className="bar-wrap"><span className="bar" style={{width : this.state.TF+'%'}}>{this.state.TF}%</span></span><span>Feeling (F)</span></li>
                            <li><span>Judging (J)</span><span className="bar-wrap"><span className="bar" style={{width : this.state.JP+'%'}}>{this.state.JP}%</span></span><span>Perceiving (P)</span></li> 
                        </ul>
                    </div>
                </div>
                
            </div>

              
        )
    }
}
export default Quiz;

if (document.getElementById('quiz')) {
    ReactDOM.render(<Quiz />, document.getElementById('quiz'));
}