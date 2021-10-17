import React from "react";

export class NewMiniatureComponent extends React.Component{


    constructor(props){
        super(props)

    }
    // onNew() {    
    //     this.setState({
    //         lastNewAdded : this.state.lastNewAdded+1,
    //         models: [["Unique name of model" +this.state.lastNewAdded, "Description", "link to image", 0], ...this.state.models]
    //     })
    //     }  
        
    render(){
        return (<div><button onClick={()=>this.props.onNew(["Unique name of model", "Description", "link to image", 0])}>ADD NEW</button>
            <tr>
                <td className="width-02-12">
                    <input  />
                </td>
                <td className="width-05-12">
                    <textarea  name="description" />
                </td>
                
            </tr>
            </div>
        )
    }
    // onInputChange(event) {
    //         const {name, value} = event.target
    //         if (name === "rating") {
    //             value = parseInt(value) || 0
    //         }
    //         this.setState(state =>
    //             ({
    //                 game: {
    //                     ...state.game,
    //                     [name]: value
    //                 }
    //             })
    //         )
    //     }
}