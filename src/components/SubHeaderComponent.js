import React from 'react'
import { Link } from 'react-router'
import Calendar from './CalenderComponent'
import Modal from './ModalComponent'
// The Header creates links that can be used to navigate
// between routes.
export default class SubHeaderComponent extends React.Component {
  constructor(props) {
    super(props)
   // this.state = { isModalOpen: false }
  }
  // openModal() {
  //   this.setState({ isModalOpen: true })
  // }

  // closeModal() {
  //   this.setState({ isModalOpen: false })
  // }
  render () {
    return (
      <div className = "col-md-12 outer-subheader-box">
        <div className = "col-md-4 subhead-pad">
          <center>
            <input type="submit" value="Project" />
            <button type="button" className="btn btn-default btn-sm remove-border" data-toggle="modal" data-target="#myModal">
              <span className="glyphicon glyphicon-plus"></span>
            </button>
          </center>
        </div>
        <div className = "col-md-4" >
          <span> Choose Date : <Calendar /> </span>
        </div>
        <div className = "col-md-4 subhead-pad">
          <input type="text" placeholder="search" />
        </div>

        <div className="modal fade" id="myModal" role="dialog" >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Create a Project</h4>
              </div>
              <div className="modal-body modal-box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="col-md-2">
                      <img src="images/EmptyImage.png" />
                    </div>
                    <div className="col-md-10">
                      <h2> Project name </h2>
                      <input className="project-input" type="text" name="project" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 radiobtn">
                    <h2 > Project Type </h2>
                    <label className="radio-inline">
                      <input type="radio" name="optradio" />Product
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="optradio" />Client
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="optradio" />Internal
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 dropdown-pad">
                    <div className = "col-md-5">
                      <h2> Project members </h2>
                      <select className="form-control">
                        <option>Vikrant</option>
                        <option>Sayali</option>
                      </select>
                    </div>
                    <div className = "col-md-5">
                      <h2> Role </h2>
                      <select className="form-control" id="sel1">
                        <option>UI Developer</option>
                        <option>Backend Developer</option>
                      </select>
                    </div>
                      <div className = "col-md-2">
                        <span className="glyphicon glyphicon-trash"></span>
                      </div>                     
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Create</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              </div>
            </div>      
          </div>
        </div>
        {/*<Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>Modal title</h1>
          <p>hello</p>
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </Modal>*/}
      </div>
  	);
}
}
