import React from 'react';

import store from '../store';
/**
 * 
 * @param {Function} mapStateToProps  映射state 
 * @param {Function} mapDispatchProps  映射dispatch
 */
const connect = (mapStateToProps, mapDispatchProps) => {
    return function (WrappedComponent) {
        class AdvComponent extends React.Component {
            render() {
                return (
                    <WrappedComponent {...mapStateToProps(store.getState())}{...mapDispatchProps(store.dispatch)}/>
                )
            }
        }
        return AdvComponent;
    }
}

export default connect;