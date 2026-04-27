import { useState } from "react";

function Deshbord() {
    const [tasks, setTasks] = useState([]);
    const[inputValue,setInputValue] = useState("");

    const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue(''); 
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
    
  return (
  <>
    <div style = {style.deshbord}>
        <div style={style.contain}>
            <div className="search" style={style.search} >
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={style.input} placeholder="Enter Your Massage..."/>

                <button onClick={handleAddTask} style={style.Add}>Add</button>
            </div>
                
           <div style={style.lebleallcontain}>
              {tasks.map((task, index) => (
                    <div key={index} style={style.leblecontain}>
                    <span style={style.leble}>{task}</span>
                    <div style={style.buttondelete}><button onClick={() => deleteTask(index)} style={style.delete}> <img style={style.img} src="./public/img/delete.png"/></button></div>
                    </div>
                ))}
           </div>
        </div>
    </div>
  </>
);
};

const style = {
    deshbord: {
        backgroundColor: '#3b82f6',
        height: 'auto',
        paddingBottom: 20
    },
    contain: {
        backgroundColor: "white", 
        width: '50%' , 
        justfycontect: 'cenetr',
        margin : '0 auto',
        marginTop: 50,
        height: 'auto',
        borderRadius: 5
  
    },
    search:{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        justfycontect: 'cenetr',
        paddingTop: '20px',
        height: '100px'
    },
    input:{
        backgroundColor : 'lightgreey',
        height: 40,
        borderRadius: 5,
        border: '2px solid #3b82f6',
        margin: '0 auto',
        width: '110%',
        marginLeft: '20px'
    },
    Add:{
        backgroundColor: '#3b82f6',
        border: 'none',
        color: 'white',
        borderRadius: 5,
        height: 40,
        width: '50%',
        margin: '0 auto',
        marginTop: '3px',
        marginRight: '20px',
        fontSize : 15
    },
    leblecontain:{
       display: 'grid',
       gridTemplateColumns: 'auto auto',
       border:'1px solid grey',
       borderRadius: 5 ,
       width: '95%',
       margin: '0 auto',
       height: '50px',
       alignItems: 'center',
       marginBottom: 20,
       backgroundColor: 'lightblue',
       color: 'black'
    },
    delete:{
      width: '60px',
      backgroundColor: '#0a51c4',
      borderRadius: '5px',
      height: '40px'
    },
    img:{
        width:'20px'
    },
    buttondelete:{
        display: 'grid',
        justifyContent: 'right',
        marginRight: '20px'
    },
    lebleallcontain:{
        height: 'auto',
        paddingBottom: 20
    }

};

export default Deshbord;