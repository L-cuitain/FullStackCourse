import React , {Fragment} from 'react';
import './App.css';

//引入connect
import { connect } from 'react-redux';
//引入action
import { getProvinceAction , getCityAction , getCountyAction } from '../../actions/action';

class App extends React.Component{

  //当组件渲染完
  componentDidMount(){
    this.props.getProvince();
  }

  // //获取省市编码
  // getProvinceCode = (e) => {
  //   this.props.dispatch(getCityAction(e.target.value));
  // }

  // //获取区县编码
  // getCountyCode = (e) => {
  //   this.props.dispatch(getCountyAction(e.target.value));
  // }

  render(){
    const { globalState , getProvinceCode , getCountyCode } = this.props;
    return (
      <div className='App'>
        {/* 省级下拉列表 */}
        <select className='select_ipt' name="province" onChange={(e) => {getProvinceCode(e)}}>
          <option value="">---请选择省份---</option>
          {globalState.provinceList.map(item => (
            <Fragment key={item.id}>
              <option value={item.code}>{item.name}</option>
            </Fragment>
          ))}
        </select>

        {/* 市级下拉列表 */}
        <select className='select_ipt' name="city" onChange={(e) => {getCountyCode(e)}}>
          <option value="">---请选择市区---</option>
          {globalState.cityList.map(item => (
            <Fragment key={item.id}>
              <option value={item.code}>{item.name}</option>
            </Fragment>
          ))}
        </select>

        {/* 区县下拉列表 */}
        <select className='select_ipt' name="county">
          <option value="">---请选择区县---</option>
          {globalState.countyList.map(item => (
            <Fragment key={item.id}>
              <option value={item.code}>{item.name}</option>
            </Fragment>
          ))}
        </select>
      </div>
    )
  }
}

//创建mapStateProps
const mapStateToProps = (state) => ({globalState : state})
//创建mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    getProvince(){
      dispatch(getProvinceAction)
    },
    getProvinceCode(e){
      dispatch(getCityAction(e.target.value))
    },
    getCountyCode(e){
      dispatch(getCountyAction(e.target.value))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
