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
    let viewCount = 0;
    let zIndex = 1000;
    let paddingTop = 330;
    return (
      <div style={{width: 300, height: zIndex, position: 'relative'}}>
        <div className="box" style={{zIndex: zIndex, paddingTop: paddingTop}}>
          <div>
            <button className="btn btn-default" onClick={e => this.setState({display: 'select'})}>push</button>
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
          ++viewCount;
          if(this.state.display == 'select'){
            return (
              <div className="box" style={{zIndex: zIndex + viewCount, paddingTop: paddingTop - (30 * viewCount)}}>
                <div>
                  <button className="btn btn-default" onClick={e => this.setState({display: 'textarea'})}>push</button>
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
                <div>
                  <button className="btn btn-default" onClick={e => this.setState({display: 0})}>back</button>
                </div>
              </div>
            )
          }
        })()}
        {(() => {
          ++viewCount
          if(this.state.display == 'textarea'){
            return (
              <div className="box" style={{zIndex: zIndex + viewCount, paddingTop: paddingTop - (30 * viewCount)}}>
                <div>
                  <button className="btn btn-default" onClick={e => this.setState({display: 'checkbox'})}>push</button>
                </div>
                <div className="form-group">
                  <textarea className="form-control" style={{width: '100%'}}></textarea>
                </div>
                <div className="form-group">
                  <textarea className="form-control" style={{width: '100%'}}></textarea>
                </div>
                <div className="form-group">
                  <textarea className="form-control" style={{width: '100%'}}></textarea>
                </div>
                <div className="form-group">
                  <textarea className="form-control" style={{width: '100%'}}></textarea>
                </div>
                <div className="form-group">
                  <textarea className="form-control" style={{width: '100%'}}></textarea>
                </div>
                <div>
                  <button className="btn btn-default" onClick={e => this.setState({display: 0})}>back</button>
                </div>
              </div>
            )
          }
        })()}
        {(() => {
          ++viewCount
          if(this.state.display == 'checkbox'){
            return (
              <div className="box" style={{zIndex: zIndex + viewCount, paddingTop: paddingTop - (30 * viewCount)}}>
                <div>
                  <button className="btn btn-default" onClick={e => this.setState({display: 'radio'})}>push</button>
                </div>
                <div className="form-group">
                  <div style={{lineheight: 0}}>
                    <input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" />
                    <input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" />
                    <input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" />
                  </div>
                  <div style={{lineheight: 0}}>
                    <input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" />
                    <input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" />
                    <input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" />
                  </div>
                  <div style={{lineheight: 0}}>
                    <input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" />
                    <input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" />
                    <input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" />
                  </div>
                </div>
                <div>
                  <button className="btn btn-default" onClick={e => this.setState({display: 0})}>back</button>
                </div>
              </div>
            )
          }
        })()}
        {(() => {
          ++viewCount
          if(this.state.display == 'radio'){
            return (
              <div className="box" style={{zIndex: zIndex + viewCount, paddingTop: paddingTop - (30 * viewCount)}}>
                <div>
                  <button className="btn btn-default" onClick={e => this.setState({display: 'label'})}>push</button>
                </div>
                <div className="form-group">
                  <div style={{lineheight: 0}}>
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                  </div>
                </div>
                <div className="form-group">
                  <div style={{lineheight: 0}}>
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                  </div>
                </div>
                <div className="form-group">
                  <div style={{lineheight: 0}}>
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                  </div>
                </div>
                <div className="form-group">
                  <div style={{lineheight: 0}}>
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                    <input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" /><input type="radio" />
                  </div>
                </div>
                <div>
                  <button className="btn btn-default" onClick={e => this.setState({display: 0})}>back</button>
                </div>
              </div>
            )
          }
        })()}
        {(() => {
          ++viewCount
          if(this.state.display == 'label'){
            return (
              <div className="box" style={{zIndex: zIndex + viewCount, paddingTop: paddingTop - (30 * viewCount)}}>
                <div className="form-group">
                  <div style={{lineheight: 0}}>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                  </div>
                </div>
                <div className="form-group">
                  <div style={{lineheight: 0}}>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                  </div>
                </div>
                <div className="form-group">
                  <div style={{lineheight: 0}}>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                  </div>
                </div>
                <div className="form-group">
                  <div style={{lineheight: 0}}>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                    <label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label><label><input type="checkbox" /></label>
                  </div>
                </div>
                <div>
                  <button className="btn btn-default" onClick={e => this.setState({display: 0})}>back</button>
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
