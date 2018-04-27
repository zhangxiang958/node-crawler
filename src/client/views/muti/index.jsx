import React from 'react';
import Style from './style.scss';

import Api from '../../lib/api';

class MutiPage extends React.Component {
  constructor(...props) {
    super(...props);
    this.getInitialData();
    this.state = {
      text: [
        "用户最终接受了就说明这个设计审美好看了？excuse me ？用户只是无法改变这些设计，最终无奈的接受并习惯了好嘛……就像在有异味的房间待久了就觉察不到异味一样，接受了并不代表没有'异味'。我认为好设计应该像一阵新风，用户在解除的瞬间就会感觉身心愉悦，心悦诚服且心向往之。当然不否认一些有深度的设计需要时间来慢慢领会，但有些很shit的东西也不要吃了还硬说好吃......",
        "首先，整个设计团队的努力和勇气确实值得倾佩。但是在阅读meduim上那篇文章之前，很抱歉，我的第一感觉是花哨的背景和难以揣摩的主题。简单的方框和圆形很难让人联想到它相机。看完整个设计流程后，感想如下：第一，整个设计团队too close to the design，设计师是从第一版设计不断过渡到最终版，是一个类似数学证明题里不断推导的过程。而用户只得到一个简短的答案。用户能看懂么？显然不能。第二，整个设计流程里，不论是从色彩的选择，还是最钟图形方案的确定，没有听到任何用户的声音，没有看到usability test, 没有survey，没有interview。只是designer的闭门造车。看来user-centered design还有很长的路要走。最后，对呀，俺也是设计狮，（你说，吐槽谁都会，你也画一个来看看）咦，俺只会纸上谈兵。。",
        "这个新logo才不便于传播和记忆好吗..........我手机里长这样logo的拍照app有十几个，截图简直不分彼此，一个方块里带个圆背景颜色改一改，说实话记忆和辨识度都为零。我叹息改的不好是因为它不再在我的手机中独树一帜了。真的单抠出来说有多丑倒也未必，只是ins这么多年走来，大家多少还有点情怀。",
        "iOS图标刚开始扁平化的时候，我的感觉是：不习惯、违和感，说白了就是突然的改变让我不适应，但是并没有觉得丑。Ins这个新图标…我只能说，不常用所以我今天删应用了，很简单，这个图标毁了我界面的美观。无论怎么说，都像是劣质美图软件。我知道审美是会改变的，可是新图标我如论如何也没办法接受，为什么会变成这样呢……只怪我啊，还是太年轻。"
      ]
    }
  }
  
  getInitialData() {
    Api.getZhihuCommentList().then(res => {
      console.log(res);
      this.setState({
        text: res
      });
    });
  }

  sendRequest() {
    Api.sentimentAnalysisMuti(this.state.text)
    .then((res) => {
      console.log('muti sentiment:', res);
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
            value={this.state.text.map((t, i) => `[${i+1}]${t}`).join('\n')}
            onChange={this.changeData.bind(this)}>
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