import React from 'react';
import Style from './style.scss';

import Api from '../../lib/api';

class MutiPage extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      text: []
    }
    this.getInitialData()
    .then(() => {
      this.sendRequest();
    });
  }
  
  getInitialData() {
    return new Promise((resolve, reject) => {
      Api.getZhihuCommentList().then(res => {
        res = res.map((item) => {
          return {
            text: item,
            precent: NaN
          };
        });
        this.setState({
          text: res
        });
        resolve(res);
      });
    });
  }

  sendRequest() {
    Api.sentimentAnalysisMuti(this.state.text)
    .then((res) => {
      console.log('muti sentiment:', res);
      res = JSON.parse(res);
      let textArr = this.state.text;
      textArr = textArr.map((item, i) => {
        return {
          text: item.text,
          precent: res[i][0]
        }
      });
      this.setState({
        text: textArr
      });
    });
  }

  componentDidMount() {
    console.log('mount Muti');
  }

  changeData(e) {
    console.log(e.target.value);
    this.setState({
      test: e.target.value
    });
  }

  render () {
    return (
      <div>
        <div className="muti-header">
          <div className="textarea-container">
            <textarea name="" id="" cols="30" rows="10" className="textarea" 
            value={this.state.text.map((t, i) => `[${i+1}]${t.text}`).join('\n')}
            onChange={this.changeData.bind(this)}>
            </textarea>
            <a className="submit">提交文本</a>
          </div>
        </div>
        <div className="result">
          <div className="result-section">
            <div id="overview-emotion" className="section-item">
              情感分析(正面情绪):
              { 
                this.state.text.map((item, i) => {
                  return (
                    <div className="item" key={i}>
                      { item.text }
                      <div className="precent" key={i}>
                        { Number(item.precent * 100).toFixed(2) }%
                      </div>
                    </div>
                  );
                }) 
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MutiPage;