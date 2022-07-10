// import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';

// import Message from './components/Message';
// import Counter from './components/Counter';

// import MyButton from './components/MyButton';
// import Navigasi from './components/Navigasi';
// import Judul from './components/Judul';

const App=()=> {
    // const nama="Yusfa Julian";

    // const clicked=()=>{
    //     return alert("Button di klik")
    // };

    return (
        <div className="App">
            <Welcome name="Yusfa Julian"/>
        </div>

        // <div className="App">
        //     <Hello name="Yusfa julian"/>
        //     <Welcome name="Yusfa" age={21}>
        //         <p>
        //             Anak dari Component
        //         </p>
        //     </Welcome>
        //     <Welcome name="Julian" age={22}/>
        //     <Welcome name="Uyee" age={23}/>

        //     <Message/>
        //     <Counter/>
        // </div>

     // Default reack 
    // <div className="App" >
    //     <Judul text={nama}/>
    //     <header className="App-header" >
    //     <Navigasi/>
    //         <img src={logo}
    //             className="App-logo"
    //             alt="logo" />
    //         <MyButton clicked={clicked}/>
    //         <p >
    //             Adit <code > src / App.js </code> and save to reload.
    //         </p >
    //         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
    //             Learn React
    //         </a>
    //     </header >
    // </div>
    );
}

export default App;