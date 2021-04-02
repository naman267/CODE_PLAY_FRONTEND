import React, { Component } from 'react'
import Auxillary from '../../hoc/Auxiliary/Auxillary'
import Editor from '../Editor/Editor'
import classes from './Practice.module.css'
import Spinner from './Spinner'
//import compiler from '../../services/compiler'
import axios from 'axios'
const template = `#include<bits/stdc++.h>
using namespace std;

int main(){
    cout<<"Hello World!";
    return 0;
}`

class Practice extends Component {
  constructor(props) {
    super(props)

    this.state = {
      output: '',
      spinner:false
    }

    this.userCode = template
    this.userInput = ''
  }

  compiler = () => {
    console.log('clicked compiler')
    let program = {
      script: this.userCode,
      stdin: this.userInput,
      language: 'cpp17',
      versionIndex: '0',
      clientId: 'cd014467b8e205b74b87fbee27d3dfdd',
      clientSecret: '1ffd134a9bd3a34832354356005e9f3fbb93f8ae80d298107f99e68acdcaec50'
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data' 
        
      }
    }
   const formData =new FormData();
   console.log(program)
  Object.keys(program).forEach(key=>{
    console.log(key);
    formData.append(key,program[key])
  })
   console.log(formData.keys())
   for (let value of formData.values()) {
    console.log(value);
 }
    //document.getElementById('practicebtn').disabled = true
    this.setState({spinner:true})
    axios
      .post('https://code-play-apis.herokuapp.com/api/execute',formData,config)
      .then((data) => {
        console.log('DATA:::', data.data.output)
        //document.getElementById('practicebtn').disabled = false

        this.setState({ output: data.data.output,spinner: false})
      })
      .catch((e) => {
        console.log('e: ', e)
        return e
      })
  }

  onCodeChange = (value) => {
    this.userCode = value
    console.log(this.userCode)
  }

  onInputChange = (value) => {
    this.userInput = value
    console.log(this.userInput)
  }

  /*runCodeHandler =(code, input) => {
     console.log("compiler",compiler(code,input))
    //this.setState({ output: await compiler(code, input) })
    //console.log('OUTPUT::::', this.state.output)
  }*/

  render() {
    let attachedClasses = [classes.Sidebar, classes.Close]
    if (this.props.show) {
      attachedClasses = [classes.Sidebar, classes.Open]
    }

    return (
      <Auxillary>
        <div className={attachedClasses.join(' ')}>
          <div className={classes.practiceEditor}>
            <div className={classes.top}>
              <p>Code</p>
              {this.state.spinner?<Spinner/>:<button
                id="practicebtn"
                className={classes.runButton}
                onClick={this.compiler}
              >
                Run
              </button>}
            </div>
            <Editor
              mode="c_cpp"
              width="100%"
              height="90%"
              template={template}
              onChange={(val) => this.onCodeChange(val)}
            />
          </div>
          <div className={classes.Practice}>
            <div className={classes.inputEditor}>
              <p>Input</p>
              <Editor
                mode="text"
                width="98%"
                height="85%"
                onChange={(val) => this.onInputChange(val)}
              />
            </div>
            <div className={classes.outputEditor}>
              <p>Output</p>
              <Editor
                mode="text"
                width="98%"
                height="85%"
                value={this.state.output}
                readOnly
              />
            </div>
          </div>
        </div>
      </Auxillary>
    )
  }
}

export default Practice
