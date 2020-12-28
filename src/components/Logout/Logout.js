import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutAction } from '../../redux/actionCreators/logoutAction';
import { withRouter } from 'react-router-dom';
import './Logout.scss';
import Modal from 'react-modal';
import { Trans } from 'react-i18next';
class Logout extends Component {
  state = {
    isPopupOpen: false
  };
  togglePopup = () => {
    this.setState({
      isPopupOpen: !this.state.isPopupOpen
    });
  };

  render() {
    return (
      <div>
        <div id='modal'>
          <div>
            <i className='fa fa-power-off icon'></i>
            <button  data-testid='btn-logout' id='logout' className='logout' onClick={this.togglePopup}>
              <Trans i18nKey='logout.logout'></Trans>
            </button>
          </div>
        </div>

        <Modal
          className='popup'
          isOpen={this.state.isPopupOpen}
          onRequestClose={this.togglePopup}
          style={{
            overlay: {
              backgroundColor: 'transparent'
            }
          }}
        >
          {this.props.children}
          <ul>
            <li>
            <p className='comfirm'>
              <Trans i18nKey='logout.confirm'></Trans>
            </p>
            </li>
            <li>
              <button
                data-testid='logout'
                className='confirm'
                onClick={() => this.props.logout(this.props.history)}
              >
                <Trans i18nKey='logout.yes'></Trans>
              </button>
            </li>
            <li>
              <button className='deny' onClick={this.togglePopup}>
                <Trans i18nKey='logout.no'></Trans>
              </button>
            </li>
          </ul>
        </Modal>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    logoutState: state.logout
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => dispatch(logoutAction(history))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
