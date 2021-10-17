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
        // if (name === "rating") {
        //     value = parseInt(value) || 0
        // }
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
            <tr>
                <td >
                    <input  name="newModel[0]" value={this.state.newModel[0]} onChange={this.onInputChange}/>
                </td>
                <td >
                    <input  name="desc" value={this.state.newModel[1]} onChange={this.onInputChange}/>
                </td>
                <td >
                    <input  name="img" value={this.state.newModel[2]} onChange={this.onInputChange}/>
                </td>
                <td >
                    <input  name="rating" value={this.state.newModel[3]} onChange={this.onInputChange}/>
                </td>
                <button onClick={()=>this.props.onNew([this.state.newModel[0], this.newModel[1], this.newModel[2], this.newModel[3]])}>ADD NEW</button>
            </tr>
            </table>
        )
    }

}


// this.setState(state =>
//     ({
//         models: [["Unique name of model" +this.state.lastNewAdded, "Description", "link to image", 0], ...this.state.models]
//     })
// )