import React from "react";

export class NewMiniatureComponent extends React.Component{


    constructor(props){
        super(props)
        this.state ={
            newModel: ["unique name","description","url of image",0]
        }
        this.onInputChange=this.onInputChange.bind(this)
    }
    // onNew() {    
    //     this.setState({
    //         lastNewAdded : this.state.lastNewAdded+1,
    //         models: [["Unique name of model" +this.state.lastNewAdded, "Description", "link to image", 0], ...this.state.models]
    //     })
    //     }  

    onInputChange(event) {
        let {name, value} = event.target
        if (name === "3") {
            value = parseInt(value) || 0
        }
        this.setState(state =>
            ({
                newModel :{
                    ...state.newModel,
                    [name]: value
                }
            })
        )
    }

    render(){
        return (
            <table>
            <tbody>
            <tr>
                <td >
                    <input  name="0" value={this.state.newModel[0]} onChange={this.onInputChange}/>
                </td>
                <td >
                    <input  name="1" value={this.state.newModel[1]} onChange={this.onInputChange}/>
                </td>
                <td >
                    <input  name="2" value={this.state.newModel[2]} onChange={this.onInputChange}/>
                </td>
                <td >
                    <input  name="3" value={this.state.newModel[3]} onChange={this.onInputChange}/>
                </td>
                <td>
                <button onClick={()=>this.props.onNew([this.state.newModel[0], this.state.newModel[1], this.state.newModel[2], this.state.newModel[3]])}>ADD NEW</button>
                </td>
            </tr>
            </tbody>
            </table>
        )
    }

}

