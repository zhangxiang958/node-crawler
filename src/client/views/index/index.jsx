import React from 'react';
import Echarts from 'echarts';
import Style from './style.scss';

class Single extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = {
      test: 123
    }
  }

  change(e) {
    console.log(e.target.value);
    this.setState({
      test: e.target.value
    });
  }

  submit() {
    alert('???');
  }

  componentDidMount() {
    console.log('mount');
    const myChart = Echarts.init(document.getElementById('overview-emotion'));
    myChart.setOption({
      title : {
        text: '情感分析',
        subtext: '基于本人真实爬虫数据分析',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['正面','负面']
      },
      series : [{
        name: 'nlp 数据分析',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[
            {value:335, name:'正面'},
            {value:310, name:'负面'}
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
      }]
    });
  }

  render () {
    return (
      <div>
        <div className="index-header">
          <div className="textarea-container">
            <textarea name="" id="" cols="30" rows="10" className="textarea" 
            value={this.state.test} 
            onChange={this.change.bind(this)}>
            </textarea>
            <a className="submit" onClick={this.submit}>提交文本</a>
          </div>
        </div>
        <div className="result">
          <div className="result-section">
            <div id="overview-emotion" className="section-item">
              <h1 className="overview-title">情感分析:</h1>
              <div className="overview-content">
                <div className="overview-result">
                </div>
              </div>
            </div>
            <div id="overview-analysis" className="section-item">
              <h1 className="overview-title">词性分析:</h1>
              <div className="overview-content">
                <div className="overview-result">
                  <dl className="words">
                    <dd title="时间词" className="t">15日</dd>
                    <dd title="标点符号" className="wd">，</dd>
                    <dd title="动词" className="v">备受</dd>
                    <dd title="动词" className="v">关注</dd>
                    <dd title="助词" className="ud">的</dd>
                    <dd title="名词" className="n">电影</dd>
                    <dd title="标点符号" className="wk">《</dd>
                    <dd title="时间词" className="t">黄金时代</dd>
                    <dd title="标点符号" className="wk">》</dd>
                    <dd title="介词" className="p">在</dd>
                    <dd title="地名" className="ns">北京</dd>
                    <dd title="动词" className="v">举行</dd>
                    <dd title="语气词" className="y">了</dd>
                    <dd title="名词" className="n">电影</dd>
                    <dd title="名词" className="n">发布会</dd>
                    <dd title="标点符号" className="wd">，</dd>
                    <dd title="名词" className="n">导演</dd>
                    <dd title="人名" className="nr">许鞍华</dd>
                    <dd title="连词" className="c">和</dd>
                    <dd title="名词" className="n">编剧</dd>
                    <dd title="人名" className="nr">李樯</dd>
                    <dd title="连词" className="c">及</dd>
                    <dd title="人名" className="nr">汤唯</dd>
                    <dd title="标点符号" className="wn">、</dd>
                    <dd title="人名" className="nr">冯绍峰</dd>
                    <dd title="助词" className="ud">等</dd>
                    <dd title="形容词" className="a">众</dd>
                    <dd title="名词" className="n">星</dd>
                    <dd title="副词" className="d">悉数</dd>
                    <dd title="动词" className="vi">亮相</dd>
                    <dd title="标点符号" className="wj">。</dd>
                    <dd title="动词" className="v">据悉</dd>
                    <dd title="标点符号" className="wd">，</dd>
                    <dd title="名词" className="n">电影</dd>
                    <dd title="动词" className="v">确定</dd>
                    <dd title="副词" className="d">将</dd>
                    <dd title="介词" className="p">于</dd>
                  </dl>
                </div>
                <dl className="word-mean">
                  <dt>词性类别图示:</dt>
                  <dd className="t">时间词</dd>
                  <dd className="w">标点符号</dd>
                  <dd className="v">动词</dd>
                  <dd className="u">助词</dd>
                  <dd className="n">名词</dd>
                  <dd className="p">介词</dd>
                  <dd className="ns">地名</dd>
                  <dd className="y">语气词</dd>
                  <dd className="nr">人名</dd>
                  <dd className="c">连词</dd>
                  <dd className="a">形容词</dd>
                  <dd className="d">副词</dd>
                  <dd className="r">代词</dd>
                  <dd className="m">数词</dd>
                  <dd className="s">处所词</dd>
                  <dd className="f">方位词</dd>
                  <dd className="q">量词</dd>
                </dl>
              </div>
            </div>
            <div id="overview-key" className="section-item">
              <h1 className="overview-title">关键词提取:</h1>
              <div className="overview-content">
                <div className="overview-result">
                  <table className="key-table">
                    <thead>
                      <tr>
                        <td>名称</td>
                        <td>权重</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>黄金时代</td>
                        <td>39</td>
                      </tr>
                      <tr>
                        <td>萧军</td>
                        <td>32</td>
                      </tr>
                      <tr>
                        <td>萧红</td>
                        <td>28</td>
                      </tr>
                      <tr>
                        <td>电影</td>
                        <td>27</td>
                      </tr>
                      <tr>
                        <td>端木蕻良</td>
                        <td>18</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Single;