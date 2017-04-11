import {Component} from 'react';

export default class App extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }

  render(){
    return (
      <div style={{width: 300, height: 1000, position: 'relative'}}>
        <div className="box" style={{zIndex: 1000, paddingTop: '330px'}}>
          <div>
            <button className="btn btn-default" onClick={e => this.setState({display: !this.state.display})}>change</button>
          </div>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </div>
        {(() => {
          if(this.state.display){
            return (

              <div className="box" style={{zIndex: 1001, paddingTop: '300px'}}>
                <div>
                  <button className="btn btn-default" onClick={e => this.setState({display: !this.state.display})}>back</button>
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option>1st-1</option>
                    <option>1st-2</option>
                    <option>1st-3</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option>2nd-1</option>
                    <option>2nd-2</option>
                    <option>2nd-3</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option>3rd-1</option>
                    <option>3rd-2</option>
                    <option>3rd-3</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option>4th-1</option>
                    <option>4th-2</option>
                    <option>4th-3</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option>5th-1</option>
                    <option>5th-2</option>
                    <option>5th-3</option>
                  </select>
                </div>
              </div>
            )
          }
        })()}
      </div>
    );
  }
}

App.propTypes = {

}
