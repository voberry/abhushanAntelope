import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbreact";
import '../../index.css'
import '../../assets/scrollbar.css'
import questions from '../../mocks/questions';
import QuestionsDeleteModal from './QuestionsDeleteModal';
import QuestionsRecordModal from './QuestionsRecordModal';

class Home extends Component {

    state= {
        hasUpdated : false,
        isDeleteModalVisible : false,
        isRecordModalVisible : false
    };

    deleteModalHide = () => {
        this.setState({
            isDeleteModalVisible : false
        })
    };

    recordModalHide = () => {
        this.setState({
            isRecordModalVisible : false
        })
    };

    recordModalShow = (itemId) => {
        console.log(itemId);
        this.setState({
            isRecordModalVisible : true
        })
    };

    deleteModalShow = (itemId) => {
        this.setState({
            isDeleteModalVisible : true
        })
    }

    handleNewQuestion = () => {
        questions.questions.push({title: 'New Question', completed: false});
        this.setState({
            hasUpdated: true
        }, ()=>{
            console.log(this.state.hasUpdated)
        });
    };

    handleSubmit = () => {
        alert('Submitted');
    };

    render() {

        const modalProps = {
            isRecordModalVisible : this.state.isRecordModalVisible,
            isDeleteModalVisible : this.state.isDeleteModalVisible,
            recordModalHide : this.recordModalHide,
            deleteModalHide : this.deleteModalHide,
        };

        return (
            <React.Fragment>
                <MDBContainer className="text-center pt-3">
                    <section className="text-center mx-5 px-5">
                        <h6 className="h5-responsive font-weight-bold my-4 main-text">
                            <i className="fas fa-folder-open pr-2"/> Video interview
                        </h6>
                        <MDBRow className={'pr-5'}>
                            <MDBCol md={1} className={'float-left'}>
                            </MDBCol>
                            <MDBCol md={8} className={'text-left barely-visible-text pl-5'}>
                                Question
                            </MDBCol>
                            <MDBCol md={1} className={'float-left barely-visible-text'}>
                                Record
                            </MDBCol>
                            <MDBCol md={1} className={'text-center barely-visible-text mb-2'}>
                                Delete
                            </MDBCol>
                            <MDBCol md={1} className={'float-right'}>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className={'scrollableDiv scrollbar scrollbar-primary mx-auto pr-5'}>
                            {questions && questions.questions.map((item, id=1) => (<React.Fragment>
                                <MDBCol sm={12} md={1} className={'float-left sideNumbers'}>
                                    {id = id + 1}
                                </MDBCol>

                                <MDBCol sm={12} md={11}
                                        className={'card font-weight-bold main-text p-3 pl-5 pr-0 text-left mb-1'}>
                                    <div className={'row'}>
                                        <div className="col-md-9">
                                            {item.title}
                                        </div>

                                        {item.completed ?
                                            (<div className="col-md-1 col-sm-12 ">
                                                <i className="fas fa-check green-text pointer" onClick={()=> this.recordModalShow(id)}/>
                                            </div>) :
                                            (<div className="col-md-1 col-sm-12 ">
                                                <i className="fas fa-circle red-text pointer" onClick={()=> this.recordModalShow(id)}/>
                                            </div>)}

                                        <div className="col-md-1 text-center col-sm-12">
                                            <i className="fas fa-trash grey-text pointer " onClick={()=> this.deleteModalShow(id)}/>
                                        </div>

                                        <div className="col-md-1">
                                            <i className="fas fa-arrows-alt grey-text"/>
                                        </div>
                                    </div>
                                </MDBCol>
                            </React.Fragment>))}
                        </MDBRow>
                        <MDBRow className={'pr-5 mx-auto pr-5 mb-3'}>
                            <MDBCol sm={12} md={1} className={'float-left sideNumbers'}>

                            </MDBCol>
                            <MDBCol sm={12} md={11}
                                    className={'card font-weight-bold main-text p-3 pl-5 mt-3 pr-0 text-left mb-1 dotted-borders pointer'} onClick={this.handleNewQuestion}>
                                <div className={'row'}>
                                    <div className="col-md-12 barely-visible-text grey-text text-left font-weight-bold">

                                        <i className="fas fa-plus-circle mr-3"/>Add more question
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className={'d-flex justify-content-center align-items-center mt-4'}>
                            <button onClick={this.handleSubmit} className={'btn btn-sm light-blue-btn white-text'}><i
                                className="fas fa-check mr-2 "/>Done
                            </button>
                        </MDBRow>
                    </section>
                </MDBContainer>

                <QuestionsDeleteModal {...modalProps} {...this.props} />
                <QuestionsRecordModal {...modalProps} {...this.props} />
            </React.Fragment>
        )
    }
}

export default Home