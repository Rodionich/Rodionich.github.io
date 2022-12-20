import React from "react"


export default class Content extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            fourthColor: 'white',
            fourthBgColor : "blue",
            fifthColor: 'black',
            fifthBgColor : "green",
        };
    };

    changeColor = (elementColor, elementBgColor) => {
        let color = elementColor === 'white' ? 'black' : 'white';
        let bgColor = elementBgColor === 'blue' ? 'green' : 'blue';
        return [color, bgColor];
    };

    fourthChangeColor = () => {
        let [fourthColor, fourthBgColor] = this.changeColor(this.state.fourthColor, this.state.fourthBgColor);
        this.setState({fourthColor, fourthBgColor});
    };
    
    fifthChangeColor = () => {
        let [fifthColor, fifthBgColor] = this.changeColor(this.state.fifthColor, this.state.fifthBgColor);
        this.setState({fifthColor, fifthBgColor});
    };

    render() {
      return (
          <section>
              <p>
                  <p id="fourth-elem"
                      style={{ color: this.state.fourthColor, backgroundColor: this.state.fourthBgColor }}
                      onClick={this.fourthChangeColor}>Хоббі:</p>
                  <ul>
                      <li id="fifth-elem"
                          style={{ color: this.state.fifthColor, backgroundColor: this.state.fifthBgColor }}
                          onClick={this.fifthChangeColor}>Футбол</li>
                      <li>Шахи</li>
                      <li>Оригамі</li>
                  </ul>
              </p>
              <p>Улюблені фільми:
                  <ol>
                      <li>"Достукатись до небес", 1997</li>
                      <li>"Фокус", 2015</li>
                      <li>"Мільйон років до нашої ери", 2014</li>
                  </ol>
              </p>
              <p>Берлін — столиця Федеративної Республіки Німеччина, окрема федеральна земля. Населення — 3,64 млн осіб, найбільше місто країни,
                  найбільше місто ЄС. </p>
              <p>Неодноразово був головним містом німецьких державних утворень, зокрема Маркграфства Бранденбург, Королівства Пруссія, Німецької імперії, Східної Німеччини. З часу возз'єднання Німеччини в 1990 році — загальнонімецька столиця.
                  Важливий політичний, інформаційний, культурний та науковий центр Європи. Великий транспортний вузол, одне з найвідвідуваніших міст континенту.</p>
              <p>Численні університети, дослідницькі лабораторії, театри й музеї заслужили міжнародне визнання. Місто — важливий осередок діячів мистецтва з усього світу.</p>
          </section>
      );
    } ;
};
