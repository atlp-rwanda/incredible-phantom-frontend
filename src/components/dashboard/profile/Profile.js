import React, { Component } from 'react';
import '../../../styles/profile.scss';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton';
import { viewProfileAction } from '../../../redux/actionCreators/viewProfileAction';
import { updateProfileAction } from '../../../redux/actionCreators/updateProfileAction';
import { Trans } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      ModalIsOpen: false,
      firstName: '',
      lastName: '',
      phone: ''
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.props.viewProfileAction();
    }, 2000);
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = () => {
    this.props.updateProfileAction(
      this.state.firstName,
      this.state.lastName,
      this.state.phone
    );
    if (updateProfileAction() !== true) {
      return { ModalIsOpen: true };
    }
  };
  render() {
    const { ModalIsOpen } = this.state;
    return this.props.profile ? (
      <div className='all'>
        <Modal
          className='popup1'
          isOpen={ModalIsOpen}
          style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.25)' } }}
        >
          <div className='Edit-container-bg'>
            <div className='Edit-container'>
              <p className='pEdit'>
                {<Trans i18nKey='profile.editprofile'></Trans>}
              </p>
              <form
                data-testId='form1'
                onSubmit={(e) => {
                  e.preventDefault();
                  this.handleSubmit();
                  this.setState({ ...this.state, ModalIsOpen: false });
                }}
              >
                <ul className='edit-table'>
                  <div className='item'>
                    <p className='dataEdit'>
                      {<Trans i18nKey='profile.firstname'></Trans>}
                    </p>
                    <input
                      type='text'
                      data-testid='firstName'
                      className='keyEdit'
                      placeholder='first Name'
                      onChange={this.handleInput}
                      name='firstName'
                      defaultValue={this.props.profile.data.firstName}
                    />
                  </div>
                  <div className='item'>
                    <p className='dataEdit'>
                      {<Trans i18nKey='profile.lastname'></Trans>}
                    </p>
                    <input
                      type='text'
                      data-testid='lastName'
                      className='keyEdit'
                      placeholder='Last name'
                      onChange={this.handleInput}
                      name='lastName'
                      defaultValue={this.props.profile.data.lastName}
                    />
                  </div>
                  <div className='item'>
                    <p className='dataEdit'>
                      {<Trans i18nKey='profile.phonenumber'></Trans>}
                    </p>
                    <input
                      data-testid='phone'
                      type='number'
                      className='keyEdit'
                      placeholder='Phone Number'
                      onChange={this.handleInput}
                      name='phone'
                      defaultValue={this.props.profile.data.phone}
                    />
                  </div>
                </ul>
                <div className='error'></div>
                <button type='submit' className='save' data-testid='save'>
                  {<Trans i18nKey='profile.save'></Trans>}
                </button>
                <button
                  data-testId='cancel1'
                  type='button'
                  className='cancel'
                  onClick={() =>
                    this.setState({ ...this.state, ModalIsOpen: false })
                  }
                >
                  {<Trans i18nKey='profile.cancel'></Trans>}
                </button>
              </form>
            </div>
          </div>
        </Modal>
        <div className={`ProfilePage`}>
          <div className={`table`}>
            <div className='Container'>
              <h2> {<Trans i18nKey='profile.profile'></Trans>}</h2>
              <div className='data-container'>
                <label className='key'>
                  {<Trans i18nKey='profile.firstname'></Trans>}
                </label>
                <span className='data' id='data1' placeholder='First Name'>
                  {this.props?.profile?.data.firstName}
                </span>
              </div>
              <div className='data-container'>
                <label className='key'>
                  {<Trans i18nKey='profile.lastname'></Trans>}
                </label>
                <span className='data' placeholder='Last Name'>
                  {this.props?.profile?.data.lastName}
                </span>
              </div>
              <div className='data-container'>
                <label className='key'>
                  {<Trans i18nKey='profile.role'></Trans>}
                </label>
                <span className='data' placeholder='Role'>
                  {this.props?.profile?.data.role}
                </span>
              </div>
              <div className='data-container'>
                <label className='key'>
                  {<Trans i18nKey='profile.nationalid'></Trans>}
                </label>
                <span className='data' placeholder='National ID'>
                  {this.props?.profile?.data.nationalId}
                </span>
              </div>
              <div className='data-container'>
                <label className='key'>
                  {<Trans i18nKey='profile.email'></Trans>}
                </label>
                <span className='data' placeholder='Email'>
                  {this.props?.profile?.data.email}
                </span>
              </div>
              <div className='data-container'>
                <label className='key'>
                  {<Trans i18nKey='profile.phonenumber'></Trans>}
                </label>
                <span className='data' placeholder='Phone' id='phone'>
                  {this.props?.profile?.data.phone}
                </span>
              </div>
              <div className='buttons'>
                <button
                  data-testid='submit1'
                  type='submit'
                  className='edit'
                  onClick={() =>
                    this.setState({ ...this.state, ModalIsOpen: true })
                  }
                >
                  {<Trans i18nKey='profile.edit'></Trans>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Skeleton className='skel' />
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.viewProfileReducer.data
});
const mapDispatchToProps = (dispatch) => {
  return {
    viewProfileAction: () => dispatch(viewProfileAction()),
    updateProfileAction: (firstName, lastName, phone) =>
      dispatch(updateProfileAction(firstName, lastName, phone))
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
