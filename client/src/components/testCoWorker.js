import React from 'react';
import sLogo from '../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';



export default class CoWorkers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namesArr: ["שי עזר", "אייל אוחיון", "ניב שור"],
            namesResultes: [],
            menalYashir: "שי עזר",
            menoalYashir: ["adsdsfsds","ads","eeee", "121ss", "dfasdfasf", "sdffe fafd" ],
            melave: "",
            melove: "",
            meracazHnaga: "",
            melaveShevet: ""
        }
    }
    
    Form = (props) => (
        <div>   
            <div className="code-input">
                <img src={sLogo} alt="sLogo" className="sLogo" />
                <input
                    placeholder="חיפוש על פי שם מלא"
                    onChange = {(e) => {this.onFormChange(e.target.value); }}
                />
            </div>
        </div>
    );
    
    SearchList = () => (
        <ul hidden>
            {this.state.namesResultes.map((name, i) => 
                <li
                    key={i}
                    onClick={(e) => { this.selectName(name); }}
                >
                    {name}
                </li>
            )}
        </ul>
    );

    SwitchForm = (props) => {
        switch (props.workerType) {
            case 1: 
                return <div>
                    <p>* מי המנהל/ת הישיר/ה שלי ?</p>
                    <this.Form 
                        type = {'A'}
                        // max = {3} // זה פרופס שרלוונטי רק לבחירה מרובה - והוא מגדיר מה המקסימום בחירות 
                    />
                    <this.SearchList />
                    <div>
                        {this.state.menalYashir && <div className="selected-input">
                            {this.state.menalYashir}<TiDelete onClick={(e) => {this.setState({menalYashir: ""})}}/>
                        </div>}
                    </div>
                    <p>* את מי אני מנהל/ת באופן ישיר ?</p>
                    <this.Form 
                        type = {'B'}
                    />
                    <div className="container-selected_names">
                        {this.state.menoalYashir && this.state.menoalYashir.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete onClick={(e) => { this.setState(this.state.menoalYashir.splice(i,1)); }}/></div> )}
                    </div>  
                </div>
            case 2:
                return <div>
                    <p>* את מי אני מנהל/ת באופן ישיר ?</p>
                    <this.Form 
                        type = {'B'}
                    />
                    <div className="container-selected_names">
                        {this.state.menoalYashir && this.state.menoalYashir.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete onClick={(e) => { this.setState(this.state.menoalYashir.splice(i,1)); }}/></div> )}
                    </div>
                    <p>* מי מלווה אותי מקצועית ?</p>
                    <this.Form 
                        type = {'C'}
                    />
                    <div>
                        {this.state.melave && <div className="selected-input">
                            {this.state.melave}<TiDelete onClick={(e) => {this.setState({melave: ""})}}/>
                        </div>}
                    </div>
                    <p>* מי מרכז/ת ההנהגה שלי ?</p>
                    <this.Form 
                        type = {'E'}
                    />
                    <div>
                        {this.state.meracazHnaga && <div className="selected-input">
                            {this.state.meracazHnaga}<TiDelete onClick={(e) => {this.setState({meracazHnaga: ""})}}/>
                        </div>}
                    </div>  
                </div>
            case 3:
                return <div>
                    <p>* מי מלווה אותי מקצועית ?</p>
                    <this.Form 
                        type = {'C'}
                    />
                    <div>
                        {this.state.melave && <div className="selected-input">
                            {this.state.melave}<TiDelete onClick={(e) => {this.setState({melave: ""})}}/>
                        </div>}
                    </div>
                    <p>* מי מרכז/ת ההנהגה שלי ?</p>
                    <this.Form 
                        type = {'E'}
                    />
                    <div>
                        {this.state.meracazHnaga && <div className="selected-input">
                            {this.state.meracazHnaga}<TiDelete onClick={(e) => {this.setState({meracazHnaga: ""})}}/>
                        </div>}
                    </div>  
                </div>
            case 4:
                return <div>
                    <p>* מי מרכז/ת ההנהגה שלי ?</p>
                    <this.Form 
                        type = {'E'}
                    />
                    <div>
                        {this.state.meracazHnaga && <div className="selected-input">
                            {this.state.meracazHnaga}<TiDelete onClick={(e) => {this.setState({meracazHnaga: ""})}}/>
                        </div>}
                    </div>
                    <p>* מי המלווה השבטי שלי ?</p>
                    <this.Form 
                        type = {'F'}
                    />
                    <div>
                        {this.state.melaveShevet && <div className="selected-input">
                            {this.state.melaveShevet}<TiDelete onClick={(e) => {this.setState({melaveShevet: ""})}}/>
                        </div>}
                    </div>  
                </div>
            case 5:
                return <div>
                    <p>* מי המנהל/ת הישיר/ה שלי ?</p>
                    <this.Form 
                        type = {'A'}
                    />
                    <div>
                        {this.state.menalYashir && <div className="selected-input">
                            {this.state.menalYashir}<TiDelete onClick={(e) => {this.setState({menalYashir: ""})}}/>
                        </div>}
                    </div>
                    <p>* את מי אני מלווה מקצועית ?</p>
                    <this.Form 
                        type = {'D'}
                    /> 
                    <div>
                        {this.state.melove && <div className="selected-input">
                            {this.state.melove}<TiDelete onClick={(e) => {this.setState({melove: ""})}}/>
                        </div>}
                    </div> 
                </div>
            default: return 1;
        }
    };
    
    onFormChange = (text = "") =>  {
        if (text === "") {
          return this.setState({ 
            namesResultes: []
          })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
          namesResultes: resultes
          })
      };

    selectName = (props) => {
        switch(props.type) {
            case 'A':
                return this.setState({menalYashir: props.name})
            case 'B':
                return this.setState({menoalYashir: [...props.name]})
            case 'C':
                return this.setState({melave: props.name})
            case 'D':
                return this.setState({melove: props.name})
            case 'E':
                return this.setState({meracazHnaga: props.name})
            case 'F':
                return this.setState({melaveShevet: props.name})
            default: return 1;
        }
    };

    cancelSelction = () => {

    };

    render() {
        return (
            <div className="container">  
                <h2>פרטים אודות המוערכות/ים שלי</h2> 
                <div className="sub-container">
                    <this.SwitchForm 
                        workerType = {1}
                        onFormChange = {this.onFormChange}
                        namesResultes = {this.state.namesResultes} 
                        menalYashir = {this.state.menalYashir}
                        menoalYashir = {this.state.menoalYashir}
                        melave = {this.state.melave}
                        melove = {this.state.melove}
                        meracazHnaga = {this.state.meracazHnaga}
                        melaveShevet = {this.state.melaveShevet}
                        cancelSelction = {this.cancelSelction}
                    />
                    <button 
                        className="login-button"
                        disabled={true}
                    >
                        התחלת התהליך
                    </button>
                </div>
            </div>
        )
    }
}

// 1. לא הייתי משתמש בפורם בגלל שיש לו תכונות משלו והא מרנדר את הדף לפעמים , הייתי עושה דיב
//2. הייתי מייצר קומפוננטה נוספת של בחירה מרובה 
