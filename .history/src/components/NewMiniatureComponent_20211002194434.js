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
                    <input className="width-11-12" />
                </td>
                <td className="width-05-12">
                    <textarea className="width-11-12" name="description" value={props.game.description}
                              onChange={props.onInputChange}/>
                </td>
                <td className="width-03-12">
                    <input className="width-11-12" name="image" value={props.game.image} onChange={props.onInputChange}/>
                    <img className="width-12-12" src={props.game.image} alt={props.game.name + ' - Logo'}/>
                </td>
                <td className="width-01-12">
                    <input className="width-11-12" name="rating" value={props.game.rating} onChange={props.onInputChange}/>
                </td>
                <td className="width-01-12">
                    <button className="width-12-12" onClick={() => props.onSaveButtonClick(props.game)}>SAVE</button>
                    <button className="width-12-12" onClick={() => props.onDeleteButtonClick(props.game.id)}>DELETE</button>
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