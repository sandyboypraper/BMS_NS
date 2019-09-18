import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

class MyInput extends Component {


    state = {
        Number : 0,
        tags : [],
        NumberOfDashes : 0,
    }

    delete = () => {
        var vv = this.state.tags;
        this.props.delete(vv);
        this.setState({
            tags : [],
        })
    }

    render()
    {
        
        const removeTags = indexToRemove => {
            this.setState(
                {
                    tags: [...this.state.tags.filter((_, index) => index !== indexToRemove)],
                }
               );
        };

        const addTags = event => {
            if (event.target.value !== "") {    
                this.setState({
                    tags : [...this.state.tags, event.target.value]
                });
                this.props.selectedTags([...this.state.tags, event.target.value]);
                event.target.value = "";
            }

            this.setState({
                Number:"",
                NumberOfDashes : 0
            })

        };

        const inputFilter = e => {
            var v = e.target.value;

            if(isNaN(v[v.length - 1]))
            {
                console.log("not a number");
                v = v.slice(0 , v.length - 1);
            }

            this.setState({
                Number : v,
                backspace:false,
            })
        }

        const handleDashes = e => {
            if(this.state.NumberOfDashes == 0)
             {
                 this.setState({
                    Number : e.target.value + '-',
                    NumberOfDashes : 1
                 })
             }
        }

        const handleBackSpace = e => {
            if(e.target.value[e.target.value.length - 1] == "-")
             {
                 this.setState({
                    NumberOfDashes : 0
                 })
             }
        }
       
        return (
            <React.Fragment>
            <div className="tags-input animated bounceInLeft">
			<ul>
				{this.state.tags.map((tag, index) => (
					<li key={index}>
						<span>{tag}</span>
						<i
							className="material-icons"
							onClick={() => removeTags(index)}
						>
							close
						</i>
					</li>
				))}
			</ul>
			<input
                type="text"
                onKeyDown={event => 
                    
                  {
                      if(event.key === "Enter" || event.key == ",")
                      {
                        addTags(event);
                      }
                      else if(event.key === "-")
                      {
                        handleDashes(event);
                      }
                      else if(event.key === "BackSpace")
                      {
                          handleBackSpace(event);
                      }
                     
                }}
                placeholder="Enter number OR Range"
                onChange = {inputFilter}
                value = {this.state.Number}
			/>

		</div>  
                <br/>
                <Button onClick={this.delete} className = "animated bounceInLeft">
                    Go
                </Button>
        </React.Fragment>
        )
    }
 
}

export default MyInput;