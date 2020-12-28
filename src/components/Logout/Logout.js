import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutAction } from '../../redux/actionCreators/logoutAction';
import './Logout.scss';
import Modal from 'react-modal';
import { Trans } from 'react-i18next';
import { withRouter } from 'react-router-dom';

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
    const { logout, history, children } = this.props;
    return (
      <div>
        <div>
          <div id='modal'>
            <div>
              <i className='fa fa-power-off icon mr-2'></i>
              <button
                data-testid='btn-logout'
                id='logout'
                className='logout'
                onClick={this.togglePopup}
              >
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
            {children}
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
                  onClick={() => logout(history)}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logoutState: state.logout
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => dispatch(logoutAction(history))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
