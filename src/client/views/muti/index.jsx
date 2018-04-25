import React from 'react';
import Style from './style.scss';

class MutiPage extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = {
      test: 12
    }
  }

  componentDidMount() {
    console.log('?????');
  }

  changeData() {
    console.log('change');
  }

  render () {
    return (
      <div>
        <div className="muti-header">
          <div className="textarea-container">
            <textarea name="" id="" cols="30" rows="10" className="textarea" 
            value={this.state.test}
            onChange={this.changeData}>
            </textarea>
            <a className="submit">提交文本</a>
          </div>
        </div>
        <div className="result">
          <div className="result-section">
            <div id="overview-emotion" className="section-item">
              情感分析:
              <div className="item">
                fhnsdjkfhsdjklhfklsdfjsdklfhdlk
                fhnsdjkfhsdjklhfklsdfjsdklfhdlk
                fhnsdjkfhsdjklhfklsdfjsdklfhdlk
                fhnsdjkfhsdjklhfklsdfjsdklfhdlk
                fhnsdjkfhsdjklhfklsdfjsdklfhdlk
                fhnsdjkfhsdjklhfklsdfjsdklfhdlk
                fhnsdjkfhsdjklhfklsdfjsdklfhdlk
                fhnsdjkfhsdjklhfklsdfjsdklfhdlk
                <div className="precent">
                  98%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MutiPage;